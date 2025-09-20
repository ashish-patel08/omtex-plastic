import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Omtex Plastics - Get Quote for Plastic Manufacturing Solutions | Omkar India",
  description: "Contact Omtex Plastics for industrial plastic solutions, water tanks, processing trolleys & material handling equipment. Located in Ahmedabad, Gujarat. Get quote today!",
  keywords: [
    "contact omtex plastics",
    "plastic manufacturing quote",
    "water tank quote",
    "industrial plastic solutions",
    "ahmedabad plastic company",
    "gujarat plastic manufacturer",
    "get quote plastic products"
  ],
  openGraph: {
    title: "Contact Omtex Plastics - Get Quote Today",
    description: "Contact us for industrial plastic solutions, water tanks, processing trolleys & material handling equipment. Located in Ahmedabad, Gujarat.",
    url: 'https://omtexplastics.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  )
}
