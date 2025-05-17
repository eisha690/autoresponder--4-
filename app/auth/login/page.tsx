"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook } from "lucide-react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleGoogleLogin = () => {
    setIsLoading(true)

    // Simulate OAuth login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleFacebookLogin = () => {
    setIsLoading(true)

    // Simulate OAuth login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }
  <Button
  variant="outline"
  onClick={handleFacebookLogin}
  disabled={isLoading}
>
  <Facebook className="h-5 w-5 mr-2 text-blue-600" />
  Facebook
</Button>

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleGoogleLogin} disabled={isLoading}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                <path
                  fill="currentColor"
                  d="M12.545 12.151L12.545 12.151L12.545 12.151L12.545 12.151L12.545 12.151L12.545 12.151L12.545 12.151L12.545 12.151M12.545 12.151L12.545 12.151L12.545 12.151M12.545 12.151L12.545 12.151L12.545 12.151M20.64 12.204c0-.639-.057-1.252-.164-1.841H12v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
                />
                <path
                  fill="currentColor"
                  d="M12 21c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.957v2.332A8.997 8.997 0 0 0 12 21Z"
                />
                <path
                  fill="currentColor"
                  d="M6.964 13.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V7.958H3.957A8.996 8.996 0 0 0 3 12c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
                />
                <path
                  fill="currentColor"
                  d="M12 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.463 4.891 14.426 4 12 4a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332C7.672 9.163 9.656 7.58 12 7.58Z"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" onClick={handleFacebookLogin} disabled={isLoading}>
              <Facebook className="h-5 w-5 mr-2 text-blue-600" />
              Facebook
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/reset-password"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/auth/register" className="font-medium text-primary underline-offset-4 hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
