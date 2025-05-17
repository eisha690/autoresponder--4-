"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  MessageSquare,
  Settings,
  Users,
  CreditCard,
  PlusCircle,
  LayoutDashboard,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isOpen) {
        const sidebar = document.getElementById("dashboard-sidebar")
        if (sidebar && !sidebar.contains(e.target as Node)) {
          onClose()
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, isOpen, onClose])

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile && isOpen) {
      onClose()
    }
  }, [pathname, isMobile, isOpen, onClose])

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Platforms",
      href: "/dashboard/platforms",
      icon: MessageSquare,
      subItems: [
        { title: "Connected", href: "/dashboard/platforms?tab=connected" },
        { title: "Available", href: "/dashboard/platforms?tab=available" },
      ],
    },
    {
      title: "Templates",
      href: "/dashboard/templates",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: Users,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  // Track expanded menu items
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Determine if a route is active
  const isRouteActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        id="dashboard-sidebar"
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-sidebar transition-transform duration-300 ease-in-out",
          isMobile && !isOpen && "-translate-x-full",
          !isMobile && !isOpen && "-translate-x-56 w-20",
        )}
      >
        <div className="flex h-full flex-col">
          <ScrollArea className="flex-1 py-4">
            <nav className="grid gap-1 px-2">
              {routes.map((route) => (
                <div key={route.href} className="space-y-1">
                  <Link
                    href={route.href}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isRouteActive(route.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                    onClick={
                      route.subItems
                        ? (e) => {
                            if (!isOpen) return
                            e.preventDefault()
                            toggleExpand(route.title)
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-3">
                      <route.icon
                        className={cn(
                          "h-5 w-5",
                          isRouteActive(route.href)
                            ? "text-accent-foreground"
                            : "text-muted-foreground group-hover:text-accent-foreground",
                        )}
                      />
                      <span className={cn("transition-opacity", !isOpen && "opacity-0 md:group-hover:opacity-100")}>
                        {route.title}
                      </span>
                    </div>
                    {route.subItems && isOpen && (
                      <div className="text-muted-foreground">
                        {expandedItems[route.title] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </Link>

                  {/* Sub-items */}
                  {route.subItems && expandedItems[route.title] && isOpen && (
                    <div className="ml-6 space-y-1 border-l pl-2">
                      {route.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            pathname === subItem.href
                              ? "bg-accent/50 text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                          )}
                        >
                          <div className="h-1 w-1 rounded-full bg-current" />
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </ScrollArea>

          <div className="border-t p-4">
            <Link href="/dashboard/platforms/connect">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                size={isOpen ? "default" : "icon"}
              >
                <PlusCircle className={cn("h-4 w-4", isOpen && "mr-2")} />
                {isOpen && <span>Connect Platform</span>}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
