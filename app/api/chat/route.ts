import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages,
    system:
      "You are a helpful customer service assistant for AutoResponder.ai, a platform that allows businesses to automate responses across messaging platforms like WhatsApp, Facebook, and Instagram using AI. Provide helpful, concise answers about the platform's features, pricing, and technical details.",
  })

  return result.toDataStreamResponse()
}
