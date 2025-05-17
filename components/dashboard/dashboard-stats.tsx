import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ArrowUpRight, Users, Activity } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,853</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span className="flex items-center text-emerald-500 dark:text-emerald-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              19%
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98.2%</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span className="flex items-center text-emerald-500 dark:text-emerald-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              2.1%
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Platforms</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span className="flex items-center text-emerald-500 dark:text-emerald-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />1
            </span>
            <span className="ml-1">new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span className="flex items-center text-emerald-500 dark:text-emerald-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              201
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
