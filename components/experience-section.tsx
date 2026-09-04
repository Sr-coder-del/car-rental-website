
import {
  ShieldCheck,
  IndianRupee,
  Headphones,
  Sparkles,
} from "lucide-react"

export function ExperienceSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Safe & Reliable",
      description:
        "We focus on providing a safe and comfortable journey for every customer.",
    },
    {
      icon: IndianRupee,
      title: "Fair Pricing",
      description:
        "Transparent and reasonable pricing for your travel requirements.",
    },
    {
      icon: Headphones,
      title: "Easy Booking",
      description:
        "Contact us directly by phone or WhatsApp to discuss and book your trip.",
    },
    {
      icon: Sparkles,
      title: "Comfortable Journey",
      description:
        "We aim to make every local and outstation trip convenient and enjoyable.",
    },
  ]

  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey matters to us. We work to provide
            dependable service from booking to destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <div key={index} className="text-center">

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

