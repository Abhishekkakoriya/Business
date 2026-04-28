"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Limited Spots Available</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
        >
          Ready to Accelerate Your <span className="gradient-text">Future?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10"
        >
          Join 500+ students who are building real skills, real projects, and real careers. Your transformation starts today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/internships">
            <Button variant="gradient" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="xl">
              Talk to Our Team
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          No credit card required • Free consultation • Join anytime
        </motion.p>
      </div>
    </Section>
  )
}
