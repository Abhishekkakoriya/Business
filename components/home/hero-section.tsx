"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const features = [
  { icon: Zap, text: "Lightning Fast Performance" },
  { icon: Shield, text: "Enterprise Security" },
  { icon: Sparkles, text: "Cutting Edge Technology" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Software Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Build Tomorrow's
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Innovation Today
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-foreground/70 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We're a team of experts building world-class software solutions. From startups to enterprises, we transform visions into reality.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link href="/services">
                <Button variant="gradient" size="lg">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              {/* Gradient Box */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              
              {/* Code/Tech visualization */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 backdrop-blur-sm p-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="space-y-4">
                  <div className="w-32 h-3 bg-primary/30 rounded" />
                  <div className="w-full h-2 bg-primary/20 rounded" />
                  <div className="w-48 h-2 bg-accent/20 rounded" />
                  <div className="w-full h-2 bg-primary/20 rounded mt-8" />
                  <div className="w-40 h-2 bg-accent/20 rounded" />
                  <div className="w-full h-2 bg-primary/20 rounded mt-8" />
                  <div className="w-36 h-2 bg-accent/20 rounded" />
                </div>
              </motion.div>

              {/* Floating Card */}
              <motion.div
                className="absolute -right-12 -bottom-12 bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 max-w-xs"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">50+ Projects</p>
                    <p className="text-xs text-foreground/60">Successfully Delivered</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
