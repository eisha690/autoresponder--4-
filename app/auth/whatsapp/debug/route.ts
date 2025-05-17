// app/api/auth/whatsapp/debug/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  try {
    // Step 1: Get access token
    const tokenRes = await fetch(`https://graph.facebook.com/v19.0/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/whatsapp/debug&code=${code}`);
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Step 2: Get Business ID
    const wabaRes = await fetch(`https://graph.facebook.com/v19.0/me?fields=businesses&access_token=${accessToken}`);
    const wabaData = await wabaRes.json();
    const businessId = wabaData.businesses?.[0]?.id;

    // Step 3: Get WhatsApp Number ID
    const phoneRes = await fetch(`https://graph.facebook.com/v19.0/${businessId}/owned_whatsapp_business_accounts?access_token=${accessToken}`);
    const phoneData = await phoneRes.json();
    const phoneNumberId = phoneData.data?.[0]?.id;

    return NextResponse.json({
      accessToken,
      businessId,
      phoneNumberId,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to fetch token or business info" }, { status: 500 });
  }
}
