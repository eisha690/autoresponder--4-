import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import { TemplatesList } from "@/components/dashboard/templates-list"

export default function TemplatesPage() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Response Templates</h1>
        <Link href="/dashboard/templates/new">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Template
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <TemplatesList />
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-4">
          <TemplatesList platform="whatsapp" />
        </TabsContent>

        <TabsContent value="facebook" className="space-y-4">
          <TemplatesList platform="facebook" />
        </TabsContent>

        <TabsContent value="instagram" className="space-y-4">
          <TemplatesList platform="instagram" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
