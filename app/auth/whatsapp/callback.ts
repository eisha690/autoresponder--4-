import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "Missing code in URL." }, { status: 400 });
    }

    // 1. Exchange code for access token
    const tokenRes = await fetch(`https://graph.facebook.com/v19.0/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/whatsapp/callback&code=${code}`);
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return NextResponse.json({ error: "Access token not received." }, { status: 400 });
    }

    // 2. Get business ID
    const wabaRes = await fetch(`https://graph.facebook.com/v19.0/me?fields=businesses&access_token=${accessToken}`);
    const wabaData = await wabaRes.json();
    const businessId = wabaData.businesses?.[0]?.id;

    if (!businessId) {
      return NextResponse.json({ error: "Business ID not found." }, { status: 400 });
    }

    // 3. Get phone number ID
    const phoneRes = await fetch(`https://graph.facebook.com/v19.0/${businessId}/owned_whatsapp_business_accounts?access_token=${accessToken}`);
    const phoneData = await phoneRes.json();
    const phoneNumberId = phoneData.data?.[0]?.id;

    if (!phoneNumberId) {
      return NextResponse.json({ error: "Phone number ID not found." }, { status: 400 });
    }

    // 4. Save to DB
    await prisma.whatsAppAccount.create({
      data: {
        userId: "demo-user", // You may want to dynamically fetch logged-in user ID
        accessToken,
        businessId,
        phoneNumberId,
      },
    });

    // 5. Register webhook
    await fetch(`https://graph.facebook.com/v19.0/${businessId}/subscribed_apps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        subscribed_fields: ["messages"],
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook/whatsapp`,
        verify_token: process.env.WHATSAPP_VERIFY_TOKEN,
      }),
    });

    // 6. Redirect to dashboard
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/platforms?connected=whatsapp`);

  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
