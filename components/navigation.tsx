
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "vehicles",
        "why-us",
        "contact",
      ]

      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)

        if (element) {
          const { offsetTop, offsetHeight } = element

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }

    setIsOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "vehicles", label: "Vehicles" },
    { id: "why-us", label: "Why Choose Us" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo / Business Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-left"
          >
            <div className="font-bold text-primary text-lg sm:text-xl">
              Shri Manjunatha
            </div>

            <div className="text-sm text-muted-foreground">
              Tours & Travels
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}

            <a href="tel:+919945492982">
              <Button size="sm">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 text-sm font-medium ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="tel:+919945492982"
                className="px-4 pt-2"
              >
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
