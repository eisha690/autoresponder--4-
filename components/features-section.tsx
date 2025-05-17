import { MessageSquare, Zap, BarChart, Settings, Shield, Smartphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
      title: "Multi-Platform Support",
      description: "Connect WhatsApp, Facebook, Instagram, and more from a single dashboard.",
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: "AI-Powered Responses",
      description: "Leverage advanced AI to generate human-like responses to customer inquiries.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      title: "Detailed Analytics",
      description: "Track performance with comprehensive analytics on response rates and customer satisfaction.",
    },
    {
      icon: <Settings className="h-10 w-10 text-emerald-500" />,
      title: "Customizable Templates",
      description: "Create and customize message templates to match your brand voice.",
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full GDPR compliance for all your data.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
      title: "Mobile Friendly",
      description: "Manage your auto-responses on the go with our responsive mobile interface.",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to automate your customer communications
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-white dark:bg-gray-800"
            >
              <div className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
