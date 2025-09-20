import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Recycle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stats = [
  {
    icon: Award,
    value: "30+",
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

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionHeading className="text-3xl lg:text-5xl">About Omtex Plastics</SectionHeading>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
               
              </div>
            </div>

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
            </div>
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
      </div>
    </section>
  )
}
