
import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase } from "lucide-react"

export function ProjectsSection() {
  const vehicles = [
    {
      name: "Toyata Taisor",
      image: "/vehicle/car1.jpeg",
      passengers: "4+1 Passengers Comfortable seating",
      luggage: "Comfortable luggage space",
    },
    {
      name: "Toyata Innova",
      image: "/vehicle/car2.jpeg",
      passengers: "6+1 Passengers",
      luggage: "Spacious luggage space",
    },
    {
      name: "Travel Vehicle",
      image: "/vehicle/car4.jpg",
      passengers: "Group Travel",
      luggage: "Ideal for tours and trips",
    },
  ]

  return (
    <section
      id="vehicles"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Vehicles
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right vehicle for your family trip,
            business travel or group journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >

              <div className="aspect-video overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">

                <h3 className="text-xl font-semibold mb-4">
                  {vehicle.name}
                </h3>

                <div className="space-y-3 text-sm text-muted-foreground">

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{vehicle.passengers}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{vehicle.luggage}</span>
                  </div>

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}

