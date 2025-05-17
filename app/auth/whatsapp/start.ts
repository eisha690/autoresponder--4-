import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!;
  const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/whatsapp/callback`);
  const scope = "whatsapp_business_messaging,whatsapp_business_management,business_management,pages_show_list";

  const url = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

  return NextResponse.redirect(url);
}
