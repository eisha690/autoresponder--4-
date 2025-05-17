import { type NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const message = data.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body;
    const sender = data.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from;

    if (!message || !sender) {
      console.log("Message or sender undefined:", message, sender);
      return NextResponse.json({ success: false, error: "Invalid message format" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Respond professionally to: ${message}`,
        },
      ],
    });

    const text = completion.choices[0].message.content;

    await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: sender,
        type: "text",
        text: {
          body: text,
        },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST error", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  } else {
    return new Response("Forbidden", { status: 403 });
  }
}
