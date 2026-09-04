
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Clock,
  Users,
  MapPinned,
} from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe Travel",
      description:
        "Your safety and comfort are our top priorities on every journey.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description:
        "We value your time and strive to provide punctual travel services.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Friendly service and comfortable travel for individuals, families and groups.",
    },
    {
      icon: MapPinned,
      title: "Local & Outstation",
      description:
        "Travel within the city or plan an outstation journey with us.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Shri Manjunatha Tours and Travels chitradurga
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shri Manjunatha Tours and Travels chitradurga provides dependable
            transportation and travel solutions for local and
            outstation journeys. Our goal is to make every trip
            comfortable, convenient and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">

                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}

