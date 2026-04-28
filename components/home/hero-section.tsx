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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pb-20">
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

      <Container className="relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-96">
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
              className="text-base sm:text-lg lg:text-xl text-foreground/70 mb-8 leading-relaxed"
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
            className="relative hidden lg:block h-96"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Gradient Box */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              
              {/* Code/Tech visualization */}
              <motion.div
                className="absolute inset-0 bg-card/40 dark:bg-card/20 rounded-xl border border-border/50 backdrop-blur-md p-6 flex flex-col shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">server.ts</div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-2 text-foreground/80 flex-1">
                  <p><span className="text-primary font-medium">import</span> &#123; System &#125; <span className="text-primary font-medium">from</span> <span className="text-accent">'@core/system'</span>;</p>
                  <p className="mt-4"><span className="text-primary font-medium">const</span> app = <span className="text-primary">new</span> System(&#123;</p>
                  <p className="pl-4">performance: <span className="text-accent">'ultra'</span>,</p>
                  <p className="pl-4">security: <span className="text-primary font-medium">true</span>,</p>
                  <p className="pl-4">scale: <span className="text-accent">'global'</span></p>
                  <p>&#125;);</p>
                  <p className="mt-4">app.deploy().then(() =&gt; &#123;</p>
                  <p className="pl-4">console.log(<span className="text-success">'🚀 Systems online'</span>);</p>
                  <p>&#125;);</p>
                </div>
              </motion.div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 z-20">
                <motion.div
                  className="bg-card text-card-foreground rounded-xl shadow-xl p-5 border border-border flex items-center gap-4"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="text-base font-bold whitespace-nowrap">50+ Projects</span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">Successfully Delivered</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
