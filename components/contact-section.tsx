"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const mapsQuery = encodeURIComponent(
    "13, Sumit Compound, B/h Mahalaxmi Mill, Narolgam, Ahmedabad, Gujarat 382443"
  )
  const mapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5195.009799678447!2d72.59006054771663!3d22.971335936951544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f07191c593%3A0x214931cd14677207!2sOmkar%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1758195393443!5m2!1sen!2sin"
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <section id="contact" className="py-20 pb-0 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <SectionHeading className="text-3xl lg:text-5xl mb-4">Get in Touch</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to discuss your plastic product requirements? Our team is here to help you find the perfect solution
            for your needs.
          </p>
        </div>
      </div>

      

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      Omkar India Private Limited
                      <br />
                      Mahalaxmi Mill, Survey No. 13, Omkar Compound,
                      <br />
                      Narol - Vatva Rd, Ahmedabad, Gujarat 382443
                      <br />
                      <br />
                      Survey No. 13, Sumit Compound, B/H Mahalaxmi Mills,
                      <br />
                      Narol, Ahmedabad - 382 405, Gujarat, India.
                    </p>
                    <div className="mt-3">
                      <a href={mapsLink} target="_blank" rel="noreferrer">
                        <Button size="sm">Get Directions</Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-muted-foreground">
                      Sales: +91  xxxx-xxxx
                      <br />
                      Support: +91 xxxx-xxxx
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Addresses</h4>
                    <p className="text-muted-foreground">
                      General: omtex@omkargroup.com
                      <br />
                      Sales: omtex@omkargroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl font-[family-name:var(--font-playfair)]">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button type="submit" className="w-full text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Full-width Map (outside container) */}
      <div
        className="relative overflow-hidden"
        style={{ width: "99vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", marginTop: "3rem" }}
      >
        <div className="relative w-full h-[400px]">
          <iframe
            title="Omtex Plastics Location Map"
            src={mapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
