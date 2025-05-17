import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AutoResponder.ai has transformed how we handle customer inquiries. Our response time went from hours to seconds!",
      author: "Sarah Johnson",
      role: "E-commerce Manager",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The AI responses are so natural that our customers can't tell they're automated. It's been a game-changer for our small team.",
      author: "Michael Chen",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "We've seen a 40% increase in customer satisfaction since implementing AutoResponder across our social channels.",
      author: "Jessica Williams",
      role: "Customer Success Lead",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Businesses Worldwide
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what our customers have to say about AutoResponder.ai
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-white dark:bg-gray-800"
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <blockquote className="text-center text-gray-500 dark:text-gray-400">"{testimonial.quote}"</blockquote>
              <div className="text-center">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
