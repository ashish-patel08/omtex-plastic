import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Droplets, Home, Truck, Package, Trash2 } from "lucide-react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"

const products = [
  {
    id: 1,
    title: "Water Tanks",
    slug: "water-tanks",
    description:
      "Durable water storage solutions for residential and commercial use. Available in various capacities from 500L to 10,000L.",
    icon: Droplets,
    image: "/large-blue-plastic-water-storage-tank.jpg",
    features: ["UV Resistant", "Food Grade Material", "Multiple Sizes", "Easy Installation"],
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Loft Tanks",
    slug: "loft-tanks",
    description:
      "Compact overhead water storage tanks designed for space-efficient installation in residential lofts and buildings.",
    icon: Home,
    image: "/compact-black-plastic-loft-water-tank.jpg",
    features: ["Space Saving", "Lightweight", "Corrosion Resistant", "Long Lasting"],
    badge: "Popular",
  },
  {
    id: 3,
    title: "Trolleys",
    slug: "trolleys",
    description:
      "Heavy-duty plastic trolleys for material handling in warehouses, factories, and commercial establishments.",
    icon: Truck,
    image: "/industrial-plastic-trolley-with-wheels-for-materia.jpg",
    features: ["High Load Capacity", "Smooth Wheels", "Ergonomic Design", "Chemical Resistant"],
    badge: "Industrial Grade",
  },
  {
    id: 4,
    title: "Pallets",
    slug: "pallets",
    description:
      "Robust plastic pallets for efficient storage and transportation of goods. Ideal for logistics and warehousing.",
    icon: Package,
    image: "/blue-plastic-pallet-for-warehouse-storage-and-logi.jpg",
    features: ["Stackable Design", "Forklift Compatible", "Weather Resistant", "Hygienic Surface"],
    badge: "Logistics",
  },
  {
    id: 5,
    title: "Dustbins",
    slug: "dustbins",
    description:
      "Comprehensive range of waste management solutions including household and commercial dustbins with various capacities.",
    icon: Trash2,
    image: "/colorful-plastic-dustbins-and-waste-bins-for-recyc.jpg",
    features: ["Multiple Colors", "Pedal Operation", "Easy to Clean", "Odor Control"],
    badge: "Eco-Friendly",
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading className="text-3xl lg:text-5xl mb-4">Our Product Range</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our comprehensive collection of premium plastic products designed to meet diverse industrial and
            residential requirements with uncompromising quality. From water tanks to material handling solutions, we serve industries across Gujarat and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card pt-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-playfair)]">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <Button className="w-full">View Details</Button>
                    </Link>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Get Quote
                    </Button>
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
