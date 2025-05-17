"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Save, Wand2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewTemplatePage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [templateContent, setTemplateContent] = useState("")

  const handleSave = () => {
    setIsSaving(true)

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      router.push("/dashboard/templates")
    }, 1500)
  }

  const handleGenerateAI = () => {
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      setTemplateContent(
        "Thank you for reaching out to us! I'm the AI assistant for Acme Inc. I'd be happy to help you with any questions about our products or services. How can I assist you today?",
      )
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1200px] mx-auto">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create Template</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Template Details</CardTitle>
              <CardDescription>Create a new response template for your platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Template Name</Label>
                <Input id="name" placeholder="e.g., Welcome Message" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="e.g., Initial greeting for new customers" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Template Content</Label>
                <div className="flex gap-2">
                  <Textarea
                    id="content"
                    placeholder="Enter your template content here..."
                    className="min-h-[200px]"
                    value={templateContent}
                    onChange={(e) => setTemplateContent(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Platforms</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp" defaultChecked />
                    <label
                      htmlFor="whatsapp"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      WhatsApp Business
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="facebook" defaultChecked />
                    <label
                      htmlFor="facebook"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Facebook Page
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="instagram" defaultChecked />
                    <label
                      htmlFor="instagram"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Instagram DM
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleGenerateAI} disabled={isGenerating}>
                  <Wand2 className="mr-2 h-4 w-4" />
                  {isGenerating ? "Generating..." : "Generate with AI"}
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Template"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>AI Settings</CardTitle>
              <CardDescription>Customize how AI generates responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Response Tone</Label>
                <Select defaultValue="friendly">
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="length">Response Length</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                    <SelectItem value="medium">Medium (2-3 sentences)</SelectItem>
                    <SelectItem value="long">Long (3+ sentences)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="creativity">Creativity</Label>
                  <span className="text-xs text-muted-foreground">0.7</span>
                </div>
                <Slider defaultValue={[0.7]} max={1} step={0.1} />
              </div>

              <div className="space-y-2">
                <Label>Include</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="greeting" defaultChecked />
                    <label
                      htmlFor="greeting"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Greeting
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="company-name" defaultChecked />
                    <label
                      htmlFor="company-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Company name
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="follow-up" defaultChecked />
                    <label
                      htmlFor="follow-up"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Follow-up question
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
