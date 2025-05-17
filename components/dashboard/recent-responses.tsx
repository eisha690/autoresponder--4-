import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentResponses() {
  const responses = [
    {
      id: 1,
      platform: "WhatsApp",
      customer: "John Doe",
      customerInitial: "JD",
      message: "Hi, I'm interested in your product. Can you tell me more about it?",
      response:
        "Hello John! Thank you for your interest. Our product offers AI-powered automation for customer service. Would you like me to send you our brochure with more details?",
      time: "10 minutes ago",
    },
    {
      id: 2,
      platform: "Facebook",
      customer: "Sarah Johnson",
      customerInitial: "SJ",
      message: "What are your business hours?",
      response:
        "Hi Sarah! Our business hours are Monday to Friday, 9 AM to 6 PM EST. We're also available on Saturdays from 10 AM to 2 PM. Is there anything specific you'd like to know?",
      time: "25 minutes ago",
    },
    {
      id: 3,
      platform: "Instagram",
      customer: "Michael Chen",
      customerInitial: "MC",
      message: "Do you offer international shipping?",
      response:
        "Hello Michael! Yes, we do offer international shipping to most countries. Shipping rates vary depending on the destination. Would you like me to check the shipping cost for your location?",
      time: "1 hour ago",
    },
  ]

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "WhatsApp":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
      case "Facebook":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      case "Instagram":
        return "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      {responses.map((response) => (
        <div key={response.id} className="rounded-lg border p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 bg-purple-100 dark:bg-purple-900">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={response.customer} />
                <AvatarFallback className="text-purple-700 dark:text-purple-300">
                  {response.customerInitial}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{response.customer}</p>
                <p className="text-xs text-muted-foreground">{response.time}</p>
              </div>
            </div>
            <Badge variant="outline" className={getPlatformColor(response.platform)}>
              {response.platform}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm">{response.message}</p>
            </div>
            <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-3">
              <p className="text-sm">{response.response}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
