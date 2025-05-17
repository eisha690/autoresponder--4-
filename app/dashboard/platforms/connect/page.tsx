"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Facebook, Instagram } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConnectPlatformPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const platformId = searchParams.get("platform");
  const [isConnecting, setIsConnecting] = useState(false);

  const platforms = [
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      description:
        "Connect your WhatsApp Business account to automate customer responses",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-green-500",
    },
    {
      id: "facebook",
      name: "Facebook Page",
      description:
        "Connect your Facebook Page to automate responses to customer messages",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-blue-500",
    },
    {
      id: "instagram",
      name: "Instagram DM",
      description:
        "Connect your Instagram business account to automate DM responses",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-pink-500",
    },
    {
      id: "telegram",
      name: "Telegram",
      description: "Connect your Telegram bot to automate responses",
      icon: "/placeholder.svg?height=64&width=64",
      color: "bg-blue-400",
    },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(
    platformId
      ? platforms.find((p) => p.id === platformId) || platforms[0]
      : platforms[0]
  );

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      router.push("/dashboard/platforms");
    }, 2000);
  };

  const handleFacebookConnect = () => {
    setIsConnecting(true);
    window.open("https://example.com/oauth/facebook", "_blank");
    setTimeout(() => {
      setIsConnecting(false);
      router.push("/dashboard/platforms");
    }, 2000);
  };

  const handleClick = () => {
    const phone = "15551793222";
    const message = encodeURIComponent("Hello! I need help with your service.");
    const url = `https://www.facebook.com/v19.0/dialog/oauth?client_id=671747708970251&redirect_uri=https://1783-103-245-195-74.ngrok-free.app/api/webhook/whatsapp&scope=whatsapp_business_messaging,business_management&response_type=code
`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1200px] mx-auto">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Connect Platform</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Available Platforms</CardTitle>
              <CardDescription>Select a platform to connect</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-accent ${
                    selectedPlatform.id === platform.id ? "bg-accent" : ""
                  }`}
                  onClick={() => setSelectedPlatform(platform)}
                >
                  <div
                    className={`relative h-8 w-8 overflow-hidden rounded-md ${platform.color}`}
                  >
                    <Image
                      src={platform.icon || "/placeholder.svg"}
                      alt={platform.name}
                      fill
                      className="object-cover p-1"
                    />
                  </div>
                  <span className="text-sm font-medium">{platform.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div
                  className={`relative h-10 w-10 overflow-hidden rounded-md ${selectedPlatform.color}`}
                >
                  <Image
                    src={selectedPlatform.icon || "/placeholder.svg"}
                    alt={selectedPlatform.name}
                    fill
                    className="object-cover p-1"
                  />
                </div>
                <div>
                  <CardTitle>{selectedPlatform.name}</CardTitle>
                  <CardDescription>{selectedPlatform.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {selectedPlatform.id === "whatsapp" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp Business Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                   
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook">
                      Webhook URL (Copy to WhatsApp Business API)
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhook"
                        value="https://autoresponder.ai/api/webhook/whatsapp/123456"
                        readOnly
                      />
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {(selectedPlatform.id === "facebook" ||
                selectedPlatform.id === "instagram") && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Connect your {" "}
                    {selectedPlatform.id === "facebook"
                      ? "Facebook Page"
                      : "Instagram Business Account"} {" "}
                    using Facebook's OAuth. This will allow AutoResponder.ai to
                    send automated responses to your customers.
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <h4 className="text-sm font-medium mb-2">
                      Permissions we'll request:
                    </h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Read and manage messages</li>
                      <li>Read page/profile information</li>
                      <li>Send messages on your behalf</li>
                    </ul>
                  </div>
                  <Button
                    className={
                      selectedPlatform.id === "facebook"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-pink-600 hover:bg-pink-700"
                    }
                    onClick={handleFacebookConnect}
                    disabled={isConnecting}
                  >
                    {selectedPlatform.id === "facebook" ? (
                      <Facebook className="mr-2 h-4 w-4" />
                    ) : (
                      <Instagram className="mr-2 h-4 w-4" />
                    )}
                    {isConnecting
                      ? "Connecting..."
                      : `Connect with ${
                          selectedPlatform.id === "facebook"
                            ? "Facebook"
                            : "Instagram"
                        }`}
                  </Button>
                </div>
              )}

              {selectedPlatform.id === "telegram" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bot-token">Telegram Bot Token</Label>
                    <Input
                      id="bot-token"
                      placeholder="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-telegram">
                      Webhook URL (We'll configure this for you)
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhook-telegram"
                        value="https://autoresponder.ai/api/webhook/telegram/123456"
                        readOnly
                      />
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              {selectedPlatform.id === "whatsapp" && (
                <Button
                  onClick={handleClick}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Connect with WhatsApp
                </Button>
              )}
              {selectedPlatform.id !== "facebook" &&
                selectedPlatform.id !== "instagram" && (
                  <Button
                    onClick={handleConnect}
                    disabled={isConnecting}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    {isConnecting ? "Connecting..." : "Connect Platform"}
                  </Button>
                )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
