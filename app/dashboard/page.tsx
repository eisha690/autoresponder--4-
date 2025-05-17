import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, Download, PlusCircle } from "lucide-react"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentResponses } from "@/components/dashboard/recent-responses"
import { PlatformStatus } from "@/components/dashboard/platform-status"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor your automated responses and platform performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Link href="/dashboard/platforms/connect">
            <Button size="sm" className="h-9 bg-purple-600 hover:bg-purple-700 text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Connect Platform
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <DashboardStats />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Response Activity</CardTitle>
                <CardDescription>AI responses sent over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-muted-foreground/70" />
                  <span className="ml-2 text-sm text-muted-foreground">Activity chart will appear here</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Platform Status</CardTitle>
                <CardDescription>Current status of your connected platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <PlatformStatus />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Responses</CardTitle>
              <CardDescription>Latest AI-generated responses across your platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentResponses />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
