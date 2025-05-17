import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import { ConnectedPlatforms } from "@/components/dashboard/connected-platforms"
import { AvailablePlatforms } from "@/components/dashboard/available-platforms"

export default function PlatformsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platforms</h1>
          <p className="text-muted-foreground mt-1">Manage your connected messaging platforms</p>
        </div>
        <Link href="/dashboard/platforms/connect">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Connect Platform
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="connected" className="space-y-6">
        <TabsList>
          <TabsTrigger value="connected">Connected</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
        </TabsList>

        <TabsContent value="connected" className="space-y-6">
          <ConnectedPlatforms />
        </TabsContent>

        <TabsContent value="available" className="space-y-6">
          <AvailablePlatforms />
        </TabsContent>
      </Tabs>
    </div>
  )
}
