import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Copy, Trash2, MessageSquare } from "lucide-react"

interface TemplatesListProps {
  platform?: string
}

export function TemplatesList({ platform }: TemplatesListProps) {
  const templates = [
    {
      id: 1,
      name: "Welcome Message",
      description: "Initial greeting for new customers",
      content: "Hello! Thanks for reaching out to us. How can I assist you today?",
      platforms: ["whatsapp", "facebook", "instagram"],
      usageCount: 245,
    },
    {
      id: 2,
      name: "Business Hours",
      description: "Inform customers about business hours",
      content:
        "Our business hours are Monday to Friday, 9 AM to 6 PM EST. We're also available on Saturdays from 10 AM to 2 PM. Is there anything specific you'd like to know?",
      platforms: ["whatsapp", "facebook"],
      usageCount: 187,
    },
    {
      id: 3,
      name: "Product Inquiry",
      description: "Response to product questions",
      content:
        "Thank you for your interest in our products! I'd be happy to provide more information. Could you please specify which product you're interested in?",
      platforms: ["whatsapp", "facebook", "instagram"],
      usageCount: 312,
    },
    {
      id: 4,
      name: "Out of Office",
      description: "Response when outside business hours",
      content:
        "Thank you for your message. Our team is currently out of the office and will respond to your inquiry when we return. For urgent matters, please email support@acmeinc.com.",
      platforms: ["whatsapp", "instagram"],
      usageCount: 156,
    },
  ]

  const filteredTemplates = platform ? templates.filter((template) => template.platforms.includes(platform)) : templates

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {filteredTemplates.map((template) => (
        <Card key={template.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base">{template.name}</CardTitle>
                <CardDescription className="text-xs">{template.description}</CardDescription>
              </div>
              <div className="flex gap-1">
                {template.platforms.map((p) => (
                  <Badge key={p} variant="outline" className="capitalize">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="rounded-md bg-muted p-3">
              <p className="text-sm">{template.content}</p>
            </div>
            <div className="mt-2 flex items-center text-xs text-muted-foreground">
              <MessageSquare className="mr-1 h-3 w-3" />
              Used {template.usageCount} times
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <div className="flex w-full justify-between gap-2">
              <Link href={`/dashboard/templates/edit/${template.id}`} className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="w-full">
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </Button>
              <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
