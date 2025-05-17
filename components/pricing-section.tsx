import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out AutoResponder",
      features: [
        "1 connected platform",
        "100 AI responses per month",
        "Basic templates",
        "24-hour response time",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "3 connected platforms",
        "1,000 AI responses per month",
        "Advanced templates",
        "Custom AI tone settings",
        "Priority support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "For growing teams and businesses",
      features: [
        "Unlimited platforms",
        "5,000 AI responses per month",
        "Team access (up to 5 users)",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "99.9% uptime SLA",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that's right for your business
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800 relative ${
                plan.popular ? "border-emerald-500 dark:border-emerald-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/auth/register">
                  <Button
                    className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600 text-white" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
