"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Search, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"

interface DashboardHeaderProps {
  onToggleSidebar: () => void
}

export function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Function to get the current page title based on the pathname
  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard"
    if (pathname === "/dashboard/platforms") return "Platforms"
    if (pathname === "/dashboard/templates") return "Templates"
    if (pathname === "/dashboard/analytics") return "Analytics"
    if (pathname === "/dashboard/team") return "Team"
    if (pathname === "/dashboard/billing") return "Billing"
    if (pathname === "/dashboard/settings") return "Settings"
    if (pathname.startsWith("/dashboard/platforms/connect")) return "Connect Platform"
    if (pathname.startsWith("/dashboard/templates/new")) return "Create Template"
    return "Dashboard"
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm h-16">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">
              <span className="font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block">AutoResponder</span>
          </Link>

          <div className="hidden md:block h-6 w-px bg-border mx-2"></div>

          <h1 className="text-lg font-semibold hidden md:block">{getPageTitle()}</h1>
        </div>

        <div className="hidden md:flex items-center ml-auto mr-4 relative max-w-sm">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full pl-8 bg-background border-muted" />
        </div>

        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-500" />
            <span className="sr-only">Notifications</span>
          </Button>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">JD</span>
                </div>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/login">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
