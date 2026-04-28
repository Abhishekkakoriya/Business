"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const rotatingTexts = [
  "Build Skills.",
  "Build Projects.",
  "Build Your Career.",
  "Build Your Future.",
]

const stats = [
  { icon: Users, value: 500, label: "Students Trained", suffix: "+" },
  { icon: TrendingUp, value: 120, label: "Projects Delivered", suffix: "+" },
  { icon: Sparkles, value: 85, label: "Interviews Cracked", suffix: "%" },
]

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
              <span className="text-sm font-medium">🚀 Your Career Transformation Starts Here</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="gradient-text"
              >
                {rotatingTexts[currentTextIndex]}
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform from student to professional with <strong>real-world projects</strong>, <strong>paid internships</strong>, and <strong>expert mentorship</strong>. Land your dream tech job faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/internships" className="w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                  Apply for Internship
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 sm:flex-col sm:items-start"
                >
                  <div className="flex items-center gap-2 mb-0 sm:mb-1">
                    <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
                      <AnimatedCounter end={stat.value} />
                      {stat.suffix}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual (Placeholder for now - can add illustration later) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Placeholder for hero image/illustration */}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
