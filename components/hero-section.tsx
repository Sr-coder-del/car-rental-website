
"use client"

import { Button } from "@/components/ui/button"
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowDown,
} from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Your Trusted Travel Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Shri Manjunatha
              <span className="block text-primary">
                Tours & Travels Chitradurga
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Comfortable, safe and reliable travel services for
              local trips, outstation journeys, airport transfers
              and memorable tours across Karnataka and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a href="tel:+916362569311">
                <Button
                  size="lg"
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
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>

              <Button
                size="lg"
                variant="ghost"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                Get a Quote
              </Button>

            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                Explore our services
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/vehicle/car2.jpeg"
                alt="Shri Manjunatha Tours and Travels"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-background border border-border rounded-2xl shadow-xl p-5">
              <p className="font-bold text-lg">
                Safe & Comfortable
              </p>
              <p className="text-sm text-muted-foreground">
                Travel with confidence
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

