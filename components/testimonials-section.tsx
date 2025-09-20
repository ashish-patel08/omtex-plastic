import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import SectionHeading from "./section-heading"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Metro Construction Ltd.",
    role: "Project Manager",
    content:
      "PlastiCorp's water tanks have been exceptional for our residential projects. The quality is outstanding and installation is always smooth. Highly recommended!",
    rating: 5,
    image: "/professional-woman-construction-manager.jpg",
  },
  {
    name: "Michael Chen",
    company: "GreenLogistics Corp",
    role: "Operations Director",
    content:
      "We've been using their pallets and trolleys for 3 years now. Durable, reliable, and great value for money. Our warehouse efficiency has improved significantly.",
    rating: 5,
    image: "/professional-man-logistics-director.jpg",
  },
  {
    name: "Priya Patel",
    company: "EcoWaste Solutions",
    role: "Sustainability Manager",
    content:
      "The dustbin range is perfect for our waste management programs. The quality and eco-friendly materials align perfectly with our sustainability goals.",
    rating: 5,
    image: "/professional-woman-sustainability-manager.jpg",
  },
]

const customerLogos = [
  { name: "Metro Construction Ltd.", logo: "/metro-construction-company-logo.jpg" },
  { name: "GreenLogistics Corp", logo: "/greenlogistics-company-logo.jpg" },
  { name: "EcoWaste Solutions", logo: "/ecowaste-solutions-company-logo.jpg" },
  { name: "BuildTech Industries", logo: "/buildtech-industries-company-logo.jpg" },
  { name: "Urban Development Co.", logo: "/urban-development-company-logo.jpg" },
  { name: "Industrial Solutions Ltd.", logo: "/industrial-solutions-company-logo.jpg" },
  { name: "Smart Logistics Inc.", logo: "/smart-logistics-company-logo.jpg" },
  { name: "Eco Manufacturing", logo: "/eco-manufacturing-company-logo.jpg" },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <SectionHeading className="text-3xl lg:text-5xl"> What Our Customers Say</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what industry professionals have to say about our products and
            services.
          </p>
        </div>

        <div className="mb-16 overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-muted-foreground">Trusted by Leading Companies</h3>
          </div>
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {customerLogos.map((customer, index) => (
                <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <img
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    className="h-16 w-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {customerLogos.map((customer, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <img
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    className="h-16 w-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.content}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
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
