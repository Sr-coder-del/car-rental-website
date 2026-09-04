"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Kiran K",
    rating: 5,
    text: "Excellent service and very comfortable journey. The driver was polite and professional.",
    location: "Mysuru",
    image: "/review/chamundi.jpeg",
  },
  {
    name: "Sushmitha Chilla",
    rating: 5,
    text: "Very good experience. The vehicle was clean and the trip was smooth from start to finish.",
    location: "Bengaluru",
    image: "/review/sushma.jpeg"
  },
  {
    name: "Darshan K A",
    rating: 5,
    text: "Professional service and reasonable pricing. I would definitely use the service again.",
    location: "Coorg",
  },
  {
    name: "Akash",
    rating: 5,
    text: "The driver arrived on time and the entire journey was comfortable and safe.",
    location: "Mysuru",
  },
  {
    name: "Nanditha",
    rating: 5,
    text: "Great service for our family trip. Everything was well organised.",
    location: "Bengaluru",
    image: "/review/shiva.jpeg"
    
  },
  {
    name: "Srushti",
    rating: 5,
    text: "Very friendly driver and excellent vehicle condition. Highly recommended.",
    location: "Chikmagalur",
    image: "/review/chikmangalore.jpeg"
  },
  {
    name: "Gayathri",
    rating: 5,
    text: "Booking was easy and the service was exactly as promised. Very happy with the experience.",
    location: "Chitradurga",
    image: "/review/madeshwara.jpeg"
  },
  {
    name: "Palaksha",
    rating: 5,
    text: "Comfortable ride, good communication and excellent customer service.",
    location: "Darwad",
  },
  {
    name: "Shivu",
    rating: 5,
    text: "We had a wonderful trip. The driver was knowledgeable and helpful throughout the journey.",
    location: "Davanagere",

  },
  {
    name: "Sanju",
    rating: 5,
    text: "Reliable tour and travel service. We had a very pleasant experience.",
    location: "Mysuru",
    image: "/review/sanju.jpeg"
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Customer Feedback
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing comfortable, reliable and
            professional tour and travel services.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                “{review.text}”
              </p>

               <Image
    src={review.image}
    alt={review.name}
    width={60}
    height={60}
    className="w-14 h-14 rounded-full object-cover"
  />

              {/* Customer */}
              <div className="border-t pt-4">
                <p className="font-semibold">
                  {review.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}