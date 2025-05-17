"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"

export function LandingNavbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="AutoResponder.ai Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-bold text-xl hidden sm:inline-block">AutoResponder</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/free-pro" className="text-sm font-medium transition-colors hover:text-primary">
            Free PRO
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isHomePage ? (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Get AutoResponder app
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/">
              <Button size="sm">Back to Home</Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
