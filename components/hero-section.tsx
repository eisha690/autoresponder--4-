import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Send, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Hey, I'm <span className="text-emerald-500">AutoResponder!</span>
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I will send automatic replies to your favorite messengers the way you like.
            <br />
            You can easily customize me on your phone for free!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-green-50 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Messenger"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <div className="bg-pink-50 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Telegram"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <div className="bg-purple-50 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Viber"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/auth/register">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Get Started for Free
              </Button>
            </Link>
          </div>

          <div className="relative mt-12 w-full max-w-3xl mx-auto">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 -z-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  {i % 3 === 0 && <MessageSquare className="text-gray-200 h-6 w-6" />}
                  {i % 3 === 1 && <MessageCircle className="text-gray-200 h-6 w-6" />}
                  {i % 3 === 2 && <Send className="text-gray-200 h-6 w-6" />}
                </div>
              ))}
            </div>

            <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[380px]">
              <div className="rounded-3xl border-8 border-gray-800 overflow-hidden shadow-2xl">
                <div className="bg-green-800 text-white p-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium ml-2">AutoResponder WA</span>
                </div>
                <div className="bg-gray-100 p-2 h-[400px] overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: hey</div>
                      <div className="text-xs text-gray-800">Send: Hi, how are you?</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: thanks</div>
                      <div className="text-xs text-gray-800">Send: You're welcome! 😊</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: email</div>
                      <div className="text-xs text-gray-800">Send: You can reach us at info@autoresponder.ai</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: bye</div>
                      <div className="text-xs text-gray-800">Send: Bye!</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: *</div>
                      <div className="text-xs text-gray-800">Send: I'm currently at work, will reply later.</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500">Receive: info</div>
                      <div className="text-xs text-gray-800">
                        Send: Send a number to receive info:
                        <br />1 - Opening hours
                        <br />2 - Location
                        <br />3 - Address
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
