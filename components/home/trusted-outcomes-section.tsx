"use client"

import { motion } from "framer-motion"
import { Building2, Trophy, TrendingUp, Users } from "lucide-react"
import { Section } from "@/components/ui/section"

const outcomes = [
  {
    icon: Building2,
    metric: "100+",
    label: "Enterprise Clients",
    description: "Trusted by leading companies",
  },
  {
    icon: Trophy,
    metric: "99.9%",
    label: "Uptime SLA",
    description: "Average system availability",
  },
  {
    icon: TrendingUp,
    metric: "$100M+",
    label: "Client Value",
    description: "Total value created",
  },
  {
    icon: Users,
    metric: "50+",
    label: "Projects Delivered",
    description: "Successfully completed",
  },
]

export function TrustedOutcomesSection() {
  return (
    <Section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Proven results across diverse industries and scales
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={outcome.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-4">
              <outcome.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
              {outcome.metric}
            </div>
            <div className="text-lg font-semibold mb-1">{outcome.label}</div>
            <p className="text-sm text-muted-foreground">{outcome.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Company Logos Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix"].map((company) => (
            <div key={company} className="text-2xl font-bold text-muted-foreground">
              {company}
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </Section>
  )
}
