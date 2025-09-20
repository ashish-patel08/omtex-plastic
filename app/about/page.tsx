import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Recycle, Target, Shield, Lightbulb } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Omtex Plastics - 30+ Years of Excellence in Plastic Manufacturing | Omkar India",
  description: "Learn about Omtex Plastics by Omkar India Pvt Ltd - 30+ years of excellence in plastic manufacturing. Industrial solutions for material handling, storage, water tanks across Gujarat. Trusted by Raymond, L&T, TATA & more.",
  keywords: [
    "about omtex plastics",
    "omkar india pvt ltd",
    "plastic manufacturing company",
    "industrial plastic solutions",
    "water tank manufacturer",
    "material handling solutions",
    "ahmedabad plastic company",
    "gujarat plastic manufacturer"
  ],
  openGraph: {
    title: "About Omtex Plastics - 30+ Years of Excellence",
    description: "Learn about our 30+ years of excellence in plastic manufacturing. Industrial solutions for material handling, storage, water tanks across Gujarat.",
    url: 'https://omtexplastics.com/about',
  },
}

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    description: "Trusted industry leader",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Satisfied Customers",
    description: "Across the nation",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Cities Served",
    description: "Nationwide presence",
  },
  {
    icon: Recycle,
    value: "100%",
    label: "Recyclable Products",
    description: "Eco-friendly commitment",
  },
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide innovative, high-quality plastic solutions that meet our customers' evolving needs while maintaining our commitment to environmental sustainability.",
  },
  {
    icon: Shield,
    title: "Our Values",
    description:
      "Integrity, quality, innovation, and environmental responsibility guide every decision we make and every product we manufacture.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be the leading plastic manufacturing company recognized for excellence, sustainability, and customer satisfaction worldwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              About <span className="text-primary">Omtex Plastics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Industrial solutions for material handling, storage, and water tanks—trusted across Gujarat and beyond for durable quality and long-lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
                  Our Story
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Omkar Group is an industrial powerhouse based in Ahmedabad, Gujarat, invested in the fields of Textiles and Plastics. We ventured into Plastics in the year 1988 with Omkar (India) Pvt Ltd, popularly recognized by our premier product brand identity – OMTEX.
                  </p>
                  <p>
                    We specialize in providing industrial solutions for material handling and storage. We are renowned manufacturers of Processing Trolleys and Crates which are extensively used in Textile Processing, Pharmaceuticals and other industries.
                  </p>
                  <p>
                    We are also proud to boast a robust presence in the retail space with a complete presence across the state of Gujarat. Our water tanks are renowned for their superior Value, bringing durability and quality at affordable prices consistently over the past 30 years. Omtex Water Tanks provides a complete range to cover the gamut of multiple applications, varying sizes, different qualities and reasonable prices.
                  </p>
                </div>
              </div>
{/* 
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Material Handling & Storage</h3>
                    <p className="text-muted-foreground">
                      Purpose-built industrial solutions designed for demanding environments across textiles, pharma, and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Processing Trolleys & Crates</h3>
                    <p className="text-muted-foreground">
                      Renowned manufacturing quality trusted by leading processors for reliability, hygiene, and durability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Omtex Water Tanks</h3>
                    <p className="text-muted-foreground">
                      Strong retail presence across Gujarat with a full range of capacities, grades, and price points delivering long-lasting value.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 bg-muted/50 hover:bg-muted transition-colors">
                  <CardContent className="p-0 space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-foreground">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-0 space-y-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
