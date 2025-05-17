import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function AvailablePlatforms() {
  const platforms = [
    {
      id: 1,
      name: "Telegram",
      description: "Connect your Telegram bot to automate responses",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-blue-400",
    },
    {
      id: 2,
      name: "Twitter/X DM",
      description: "Automate responses to your Twitter direct messages",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-black",
    },
    {
      id: 3,
      name: "Slack",
      description: "Connect your Slack workspace for automated responses",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Discord",
      description: "Automate responses in your Discord server",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {platforms.map((platform) => (
        <Card key={platform.id} className="border-dashed">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className={`relative h-10 w-10 overflow-hidden rounded-md ${platform.color}`}>
                <Image
                  src={platform.icon || "/placeholder.svg"}
                  alt={platform.name}
                  fill
                  className="object-cover p-1"
                />
              </div>
              <div>
                <CardTitle className="text-base">{platform.name}</CardTitle>
                <CardDescription className="text-xs">{platform.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="pt-2">
            <Link href={`/dashboard/platforms/connect?platform=${platform.id}`} className="w-full">
              <Button
                variant="outline"
                className="w-full hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Connect
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
