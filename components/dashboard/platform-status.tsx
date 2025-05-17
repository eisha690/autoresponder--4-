import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PlatformStatus() {
  const platforms = [
    {
      name: "WhatsApp Business",
      connected: true,
      active: true,
      status: "healthy",
      lastSync: "2 minutes ago",
    },
    {
      name: "Facebook Page",
      connected: true,
      active: true,
      status: "healthy",
      lastSync: "5 minutes ago",
    },
    {
      name: "Instagram DM",
      connected: true,
      active: false,
      status: "paused",
      lastSync: "1 hour ago",
    },
  ]

  return (
    <div className="space-y-4">
      {platforms.map((platform) => (
        <div key={platform.name} className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{platform.name}</h4>
              <Badge
                variant={platform.status === "healthy" ? "outline" : "secondary"}
                className={
                  platform.status === "healthy"
                    ? "border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300"
                    : ""
                }
              >
                {platform.status === "healthy" ? "Active" : "Paused"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Last sync: {platform.lastSync}</p>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id={`${platform.name}-switch`}
              checked={platform.active}
              className="data-[state=checked]:bg-purple-600"
            />
            <Label htmlFor={`${platform.name}-switch`} className="sr-only">
              {platform.active ? "Disable" : "Enable"} {platform.name}
            </Label>
          </div>
        </div>
      ))}
    </div>
  )
}
