"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Award } from "lucide-react"
import { Container } from "@/components/ui/container"

export function InternshipHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Launch Your Tech Career</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Internship <span className="gradient-text">Programs</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Choose between paid and unpaid tracks based on your skill level. Work on real projects, build your portfolio, and get industry-recognized certificates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: TrendingUp, label: "Skill-Based Selection", value: "Fair Evaluation" },
              { icon: Award, label: "Certificate", value: "Industry Recognized" },
              { icon: Sparkles, label: "Real Projects", value: "Production Ready" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
