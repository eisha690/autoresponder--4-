import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

interface GenerateResponseOptions {
  message: string
  platform: string
  tone?: string
  length?: string
  includeGreeting?: boolean
  includeCompanyName?: boolean
  includeFollowUp?: boolean
  companyName?: string
}

export async function generateAIResponse({
  message,
  platform,
  tone = "friendly",
  length = "medium",
  includeGreeting = true,
  includeCompanyName = true,
  includeFollowUp = true,
  companyName = "Acme Inc.",
}: GenerateResponseOptions) {
  try {
    // Construct the prompt based on the options
    const prompt = `
      You are a helpful customer service assistant for ${includeCompanyName ? companyName : "a business"}.
      Respond to the following customer message in a ${tone} tone.
      
      ${length === "short" ? "Keep your response very brief (1-2 sentences)." : ""}
      ${length === "medium" ? "Keep your response concise (2-3 sentences)." : ""}
      ${length === "long" ? "Provide a detailed response (3+ sentences)." : ""}
      
      ${includeGreeting ? "Start with an appropriate greeting." : ""}
      ${includeFollowUp ? "End with a follow-up question to engage the customer." : ""}
      
      Platform: ${platform}
      Customer message: ${message}
    `

    // Use the AI SDK to generate a response
    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
    })

    return text
  } catch (error) {
    console.error("Error generating AI response:", error)
    return "Thank you for your message. We'll get back to you as soon as possible."
  }
}
