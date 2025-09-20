"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  const [api, setApi] = React.useState<any>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setSlideCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    if (isPaused) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [api, isPaused, selectedIndex]);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-background to-muted py-12 md:py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)] leading-tight">
                Leading Plastic Manufacturing{" "}
                <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premium quality plastic products for industrial and commercial
                applications. Trusted by businesses worldwide for over 30 years.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">
                  30+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">
                  Eco-Friendly Materials
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Nationwide Delivery</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
              >
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 bg-transparent w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <Carousel
              className="w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              setApi={setApi}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {[
                  {
                    src: "/modern-plastic-manufacturing-facility-with-water-t.jpg",
                    alt: "Modern plastic manufacturing facility",
                  },
                  {
                    src: "/plastic-pallets-stacked-in-warehouse.jpg",
                    alt: "Plastic pallets in warehouse",
                  },
                  {
                    src: "/heavy-duty-plastic-trolley.jpg",
                    alt: "Heavy duty plastic trolley",
                  },
                  {
                    src: "/large-blue-plastic-water-storage-tank.jpg",
                    alt: "Large blue plastic water tank",
                  },
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <div
                      className={
                        "aspect-square rounded-2xl overflow-hidden bg-muted transition-all duration-700 ease-out will-change-transform " +
                        (index === selectedIndex
                          ? "scale-100 shadow-xl"
                          : "scale-[.96] opacity-90")
                      }
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Dots */}
              {slideCount > 1 ? (
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {Array.from({ length: slideCount }).map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => api?.scrollTo(i)}
                      className={
                        "h-2.5 w-2.5 rounded-full transition-all " +
                        (i === selectedIndex
                          ? "bg-primary scale-100"
                          : "bg-primary/30 hover:bg-primary/60 scale-90")
                      }
                    />
                  ))}
                </div>
              ) : null}
            </Carousel>

            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">10,000+</div>
              <div className="text-xs md:text-sm opacity-90">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
