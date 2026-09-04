
"use client"

import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planning a trip? Contact Shri Manjunatha Tours and
            Travels Chitradurga and let us help you with your travel requirements.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Phone */}
          <Card>
            <CardContent className="p-7 text-center">

              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Phone className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Call Us
              </h3>

              <p className="text-muted-foreground mb-5">
                Speak with us about your trip.
              </p>

              <a href="tel:+916362569311">
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 6362569311
                </Button>
              </a>

            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card>
            <CardContent className="p-7 text-center">

              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                WhatsApp
              </h3>

              <p className="text-muted-foreground mb-5">
                Send us your travel requirements.
              </p>

              <a
                href="https://wa.me/919945492982"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>

            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardContent className="p-7 text-center">

              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Location
              </h3>

              <p className="text-muted-foreground">
                Chitradurga, Karnataka, India
              </p>

              <div className="flex justify-center items-center gap-2 mt-4 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Contact us for booking 24 hours availability
              </div>

            </CardContent>
          </Card>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-10">

            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Plan Your Journey?
            </h3>

            <p className="mb-6 opacity-90">
              Contact Shri Manjunatha Tours and Travels today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a href="tel:+916362569311">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>

              <a
                href="https://wa.me/916362569311"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

