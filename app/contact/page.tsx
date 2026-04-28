"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@careerlaunch.com",
    href: "mailto:hello@careerlaunch.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, Maharashtra, India",
    href: "#"
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success("Message sent! We'll get back to you within 24 hours.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <Container className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={method.href}>
                <Card variant="hover" className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Name" name="name" required placeholder="Your name" />
                  <Input label="Email" name="email" type="email" required placeholder="your@email.com" />
                </div>

                <Input label="Phone (optional)" name="phone" type="tel" placeholder="+91 98765 43210" />

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    className="flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="internship">Internship Program</option>
                    <option value="client">Client Project</option>
                    <option value="interview_prep">Interview Preparation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  required
                  placeholder="Tell us how we can help you..."
                  rows={6}
                />

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <MessageCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">WhatsApp Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant responses on WhatsApp
              </p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Chat on WhatsApp
                </Button>
              </a>
            </Card>

            <Card>
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Schedule a Call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute consultation
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Book Meeting
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
