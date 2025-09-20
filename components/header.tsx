"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  const products = [
    { name: "Water Tanks", slug: "water-tanks" },
    { name: "Loft Tanks", slug: "loft-tanks" },
    { name: "Trolleys", slug: "trolleys" },
    { name: "Pallets", slug: "pallets" },
    { name: "Dustbins", slug: "dustbins" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+(91) 9879202649 </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>omtex@omkargroup.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary font-medium">Omkar (India) Pvt Ltd — Since 1988</div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3" aria-label="Omtex Plastics">
              <img
                src="/omtex-plastics-logo.svg"
                alt="Omtex Plastics"
                className="h-8 w-auto md:h-9"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                href="/products"
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </Link>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Trusted By
            </a>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">Get Quote</Button>
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out mt-1.5 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out mt-1.5 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <Link
                  href="/products"
                  className="flex items-center justify-between w-full text-foreground font-medium py-2"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isMobileProductsOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="block text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Trusted By
              </a>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Header }
export default Header
