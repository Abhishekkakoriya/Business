"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function InternshipApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success("Application submitted successfully! We'll contact you soon.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden" id="apply">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="text-sm font-medium">🚀 Start Your Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Apply <span className="gradient-text">Now</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Fill out the form below and we'll review your application within 48 hours. Join hundreds of students transforming their careers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="glass p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" name="name" required placeholder="John Doe" />
                <Input label="Email" name="email" type="email" required placeholder="john@example.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                <Input label="College/University" name="college" placeholder="MIT" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Graduation Year
                  </label>
                  <select
                    name="graduationYear"
                    className="flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Track
                  </label>
                  <select
                    name="programType"
                    className="flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select track</option>
                    <option value="paid_internship">Paid Internship</option>
                    <option value="unpaid_internship">Unpaid Growth Track</option>
                  </select>
                </div>
              </div>

              <Input label="Resume URL" name="resumeUrl" type="url" placeholder="https://drive.google.com/..." />

              <Textarea
                label="Skills (comma separated)"
                name="skills"
                placeholder="JavaScript, React, Node.js, Python..."
                rows={3}
              />

              <Textarea
                label="Why do you want to join?"
                name="coverLetter"
                placeholder="Tell us about your goals and what you hope to achieve..."
                rows={5}
                required
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Submitting your application...</span>
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>Quick 48hr review</span>
                </div>
                <span>•</span>
                <span>No spam, ever</span>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">✓</span>
            </div>
            <span>500+ students enrolled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">✓</span>
            </div>
            <span>85% placement rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">✓</span>
            </div>
            <span>Industry certificates</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
