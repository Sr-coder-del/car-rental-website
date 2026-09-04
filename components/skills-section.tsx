
import {
  Car,
  Map,
  Plane,
  Users,
  Clock,
  Route,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const services = [
    {
      icon: Car,
      title: "Car Rental",
      description:
        "Comfortable cars with driver available for local and outstation travel.",
    },
    {
      icon: Map,
      title: "Outstation Trips",
      description:
        "Plan convenient one-way and round-trip journeys to your destination.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Reliable pickup and drop services for airport travel.",
    },
    {
      icon: Users,
      title: "Group Travel",
      description:
        "Travel comfortably with family, friends and larger groups.",
    },
    {
      icon: Clock,
      title: "Local Taxi Service",
      description:
        "Convenient transportation for local city travel and daily requirements.",
    },
    {
      icon: Route,
      title: "Tour Packages",
      description:
        "Explore popular destinations with comfortable and convenient travel arrangements.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable travel solutions designed around your comfort,
            convenience and destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-7">

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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

