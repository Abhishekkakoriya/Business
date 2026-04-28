"use client"

import { motion } from "framer-motion"
import { Target, Heart, Users, TrendingUp, Award, Zap } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const values = [
  { icon: Target, title: "Excellence", description: "We pursue the highest standards in everything we do" },
  { icon: Heart, title: "Student-First", description: "Your success is our success" },
  { icon: Users, title: "Community", description: "Building a strong network of learners and achievers" },
  { icon: TrendingUp, title: "Growth Mindset", description: "Continuous learning and improvement" },
]

const stats = [
  { icon: Users, value: "500+", label: "Students Mentored" },
  { icon: Award, value: "85%", label: "Placement Rate" },
  { icon: TrendingUp, value: "₹8 LPA", label: "Avg Package" },
  { icon: Zap, value: "50+", label: "Partner Companies" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <Container className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">CareerLaunch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to bridge the gap between academic learning and industry requirements, helping students launch successful tech careers.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                CareerLaunch was founded by three tech industry veterans who saw a recurring problem: talented students graduating with degrees but lacking the practical skills companies need.
              </p>
              <p>
                We've been in your shoes. We've struggled with interviews, built countless projects, and navigated the complex tech landscape. We know what it takes to succeed.
              </p>
              <p>
                Today, we're building a platform that gives students real-world experience through hands-on projects, expert mentorship, and industry connections. Our goal is simple: help you land your dream tech job faster.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-muted/50">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower students and early professionals with practical skills, real-world experience, and industry connections that accelerate their tech careers.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-muted-foreground">
                To become India's most trusted platform for career transformation, where every student gets the opportunity to reach their full potential.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Impact by <span className="gradient-text">Numbers</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-card border border-border flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-1 gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
