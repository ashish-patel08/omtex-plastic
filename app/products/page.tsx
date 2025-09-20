import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products - Water Tanks, Trolleys, Pallets & More | Omtex Plastics",
  description: "Explore our comprehensive range of plastic products including water tanks, loft tanks, processing trolleys, pallets, and dustbins. Industrial solutions for material handling and storage across Gujarat.",
  keywords: [
    "plastic products",
    "water tanks",
    "processing trolleys",
    "plastic pallets",
    "dustbins",
    "industrial plastic solutions",
    "material handling equipment",
    "ahmedabad plastic company",
    "gujarat plastic manufacturer"
  ],
  openGraph: {
    title: "Our Products - Omtex Plastics",
    description: "Explore our comprehensive range of plastic products for industrial and residential use. Water tanks, trolleys, pallets and more.",
    url: 'https://omtexplastics.com/products',
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
     

      {/* Products Grid */}
      <ProductGrid />

      <Footer />
    </div>
  )
}
