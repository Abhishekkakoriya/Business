"use client"

import { motion } from "framer-motion"
import { Laptop, Users, Award, Briefcase, TrendingUp, BookOpen } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Laptop,
    title: "Real-World Projects",
    description: "Work on production applications used by real users"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from industry professionals with 5+ years experience"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized certificate to boost your resume"
  },
  {
    icon: Briefcase,
    title: "Portfolio Building",
    description: "Build 3-5 impressive projects for your portfolio"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Potential transition to paid roles or full-time positions"
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Learn latest technologies and best practices"
  },
]

export function InternshipBenefits() {
  return (
    <Section className="bg-muted/50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          What You'll <span className="gradient-text">Gain</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="hover" className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
