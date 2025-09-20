import GoogleTranslateFull from "@/components/google-translate";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import dynamic from "next/dynamic";

const GoogleTranslate = dynamic(() => import("@/components/google-translate"), {
  ssr: false,
});

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/omtex-plastics-logo.webp"
                alt="Omtex Plastics"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-background/80 leading-relaxed">
              Omkar (India) Pvt Ltd — Leading manufacturer of premium plastic
              products for over 30 years. Quality, innovation, and
              sustainability in every product we create.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            {/* <GoogleTranslateFull /> */}
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Water Tanks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Loft Tanks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Trolleys
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Pallets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Dustbins
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-background transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-background transition-colors"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">
                  Mahalaxmi Mill, Survey No. 13, Omkar Compound, Narol - Vatva
                  Rd, Ahmedabad, Gujarat 382443
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91 xxx-xxxxxx</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">omtex@omkargroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>
            &copy; 2024 Omkar (India) Pvt Ltd (OMTEX). All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
