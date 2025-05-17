import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Settings, RefreshCw } from "lucide-react"

export function ConnectedPlatforms() {
  const platforms = [
    {
      id: 1,
      name: "WhatsApp Business",
      description: "Connected to +1 (555) 123-4567",
      status: "active",
      lastSync: "2 minutes ago",
      messagesHandled: 1245,
      responseRate: 98.5,
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      name: "Facebook Page",
      description: "Connected to Acme Inc. Page",
      status: "active",
      lastSync: "5 minutes ago",
      messagesHandled: 876,
      responseRate: 97.2,
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Instagram DM",
      description: "Connected to @acmeinc",
      status: "inactive",
      lastSync: "1 hour ago",
      messagesHandled: 732,
      responseRate: 95.8,
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-pink-500",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {platforms.map((platform) => (
        <Card key={platform.id} className={platform.status === "inactive" ? "border-dashed" : ""}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
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
              <Badge
                variant={platform.status === "active" ? "outline" : "secondary"}
                className={
                  platform.status === "active"
                    ? "border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300"
                    : ""
                }
              >
                {platform.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Messages Handled</p>
                <p className="font-medium">{platform.messagesHandled}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Response Rate</p>
                <p className="font-medium">{platform.responseRate}%</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Last sync: {platform.lastSync}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs">Auto-reply</span>
                <Switch checked={platform.status === "active"} className="data-[state=checked]:bg-purple-600" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <div className="flex w-full justify-between gap-2">
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
