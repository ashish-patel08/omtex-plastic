import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

const products = [
  {
    id: 1,
    title: "Water Tanks",
    slug: "water-tanks",
    description:
      "Durable water storage solutions for residential and commercial use. Available in various capacities from 500L to 10,000L.",
    longDescription:
      "Our premium water tanks are manufactured using high-grade, food-safe plastic materials that ensure water purity and longevity. Designed to withstand harsh weather conditions, these tanks feature UV-resistant properties that prevent degradation from sunlight exposure. Perfect for both residential homes and commercial establishments, our water tanks come in various sizes to meet different storage requirements.",
    image: "/large-blue-plastic-water-storage-tank.jpg",
    gallery: [
      "/large-blue-plastic-water-storage-tank.jpg",
      "/water-tank-installation.jpg",
      "/water-tank-sizes-comparison.jpg",
    ],
    features: ["UV Resistant", "Food Grade Material", "Multiple Sizes", "Easy Installation"],
    specifications: {
      Material: "High-Density Polyethylene (HDPE)",
      "Capacity Range": "500L - 10,000L",
      "Colors Available": "Blue, Black, Green",
      Warranty: "5 Years",
      "Temperature Range": "-20°C to +60°C",
      Installation: "Ground Level or Elevated",
    },
    applications: ["Residential Water Storage", "Commercial Buildings", "Industrial Facilities", "Agricultural Use"],
    badge: "Best Seller",
    price: "Starting from ₹8,500",
  },
  {
    id: 2,
    title: "Loft Tanks",
    slug: "loft-tanks",
    description:
      "Compact overhead water storage tanks designed for space-efficient installation in residential lofts and buildings.",
    longDescription:
      "Our loft tanks are specifically engineered for overhead installation in confined spaces. These lightweight yet durable tanks are perfect for residential buildings where space is at a premium. The compact design ensures easy installation while maintaining excellent water storage capacity.",
    image: "/compact-black-plastic-loft-water-tank.jpg",
    gallery: [
      "/compact-black-plastic-loft-water-tank.jpg",
      "/loft-tank-installation.jpg",
      "/compact-water-tank-design.jpg",
    ],
    features: ["Space Saving", "Lightweight", "Corrosion Resistant", "Long Lasting"],
    specifications: {
      Material: "High-Density Polyethylene (HDPE)",
      "Capacity Range": "200L - 2,000L",
      "Colors Available": "Black, Blue",
      Warranty: "3 Years",
      Weight: "Lightweight Design",
      Installation: "Overhead/Loft Mounting",
    },
    applications: ["Residential Lofts", "Apartment Buildings", "Small Commercial Spaces", "Backup Water Storage"],
    badge: "Popular",
    price: "Starting from ₹4,200",
  },
  {
    id: 3,
    title: "Trolleys",
    slug: "trolleys",
    description:
      "Heavy-duty plastic trolleys for material handling in warehouses, factories, and commercial establishments.",
    longDescription:
      "Our industrial-grade trolleys are built to handle the toughest material handling tasks. Featuring smooth-rolling wheels and ergonomic design, these trolleys improve workplace efficiency while reducing manual labor strain. Chemical-resistant construction ensures longevity in harsh industrial environments.",
    image: "/industrial-plastic-trolley-with-wheels-for-materia.jpg",
    gallery: [
      "/industrial-plastic-trolley-with-wheels-for-materia.jpg",
      "/industrial-trolley-in-warehouse.jpg",
      "/heavy-duty-plastic-trolley.jpg",
    ],
    features: ["High Load Capacity", "Smooth Wheels", "Ergonomic Design", "Chemical Resistant"],
    specifications: {
      Material: "High-Impact Polypropylene",
      "Load Capacity": "Up to 200kg",
      "Wheel Type": "Heavy-Duty Casters",
      Dimensions: "Various Sizes Available",
      Colors: "Blue, Gray, Green",
      Handle: "Ergonomic Push/Pull Handle",
    },
    applications: ["Warehouse Operations", "Manufacturing Plants", "Retail Stores", "Logistics Centers"],
    badge: "Industrial Grade",
    price: "Starting from ₹3,800",
  },
  {
    id: 4,
    title: "Pallets",
    slug: "pallets",
    description:
      "Robust plastic pallets for efficient storage and transportation of goods. Ideal for logistics and warehousing.",
    longDescription:
      "Our plastic pallets revolutionize logistics and warehousing operations with their superior durability and hygienic properties. Unlike wooden pallets, our plastic alternatives are moisture-resistant, easy to clean, and provide consistent dimensions for automated handling systems.",
    image: "/blue-plastic-pallet-for-warehouse-storage-and-logi.jpg",
    gallery: [
      "/blue-plastic-pallet-for-warehouse-storage-and-logi.jpg",
      "/plastic-pallets-stacked-in-warehouse.jpg",
      "/forklift-handling-plastic-pallets.jpg",
    ],
    features: ["Stackable Design", "Forklift Compatible", "Weather Resistant", "Hygienic Surface"],
    specifications: {
      Material: "Recycled HDPE",
      "Standard Size": "1200mm x 1000mm",
      "Load Capacity": "Dynamic: 1500kg, Static: 6000kg",
      Entry: "4-Way Entry",
      Colors: "Blue, Black, Gray",
      Weight: "Lightweight (15-25kg)",
    },
    applications: ["Warehouse Storage", "Export/Import", "Food Industry", "Pharmaceutical Storage"],
    badge: "Logistics",
    price: "Starting from ₹2,500",
  },
  {
    id: 5,
    title: "Dustbins",
    slug: "dustbins",
    description:
      "Comprehensive range of waste management solutions including household and commercial dustbins with various capacities.",
    longDescription:
      "Our comprehensive dustbin range addresses all waste management needs from household to large commercial applications. Featuring pedal operation, multiple color coding for waste segregation, and odor control technology, these bins promote cleaner and more organized waste disposal practices.",
    image: "/colorful-plastic-dustbins-and-waste-bins-for-recyc.jpg",
    gallery: [
      "/colorful-plastic-dustbins-and-waste-bins-for-recyc.jpg",
      "/waste-segregation-dustbins.jpg",
      "/commercial-dustbin-installation.jpg",
    ],
    features: ["Multiple Colors", "Pedal Operation", "Easy to Clean", "Odor Control"],
    specifications: {
      Material: "Virgin Polypropylene",
      "Capacity Range": "10L - 240L",
      Colors: "Green, Blue, Yellow, Red, Black",
      Operation: "Pedal/Swing/Step-on",
      Features: "Tight-Fitting Lids",
      Maintenance: "Easy to Clean & Sanitize",
    },
    applications: ["Residential Use", "Office Buildings", "Hospitals", "Schools & Institutions"],
    badge: "Eco-Friendly",
    price: "Starting from ₹450",
  },
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-96 object-cover" />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg bg-muted">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">{product.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{product.description}</p>
              <div className="text-2xl font-bold text-primary mb-6">{product.price}</div>

              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1">
                  Get Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Need More Information?</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91-XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>info@omtexplastics.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Description */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.longDescription}</p>

              <Separator className="my-6" />

              <h4 className="font-semibold mb-4">Applications</h4>
              <div className="grid grid-cols-2 gap-2">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{application}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1">
                    <dt className="font-medium text-sm">{key}</dt>
                    <dd className="text-muted-foreground text-sm">{value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  
  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.title} - ${product.description} | Omtex Plastics`,
    description: `${product.longDescription} Available in Gujarat. Get quote for ${product.title} from Omtex Plastics.`,
    keywords: [
      product.title.toLowerCase(),
      "plastic manufacturing",
      "industrial solutions",
      "ahmedabad plastic company",
      "gujarat plastic manufacturer",
      product.slug.replace("-", " "),
    ],
    openGraph: {
      title: `${product.title} - Omtex Plastics`,
      description: product.description,
      url: `https://omtexplastics.com/products/${product.slug}`,
      images: [product.image],
    },
  }
}
