"use client"

import { motion } from "framer-motion"
import { Target, Heart, DollarSign, Award } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const reasons = [
  {
    icon: Target,
    title: "Real-World Experience",
    description: "Work on actual client projects and production-grade software, not just tutorials.",
  },
  {
    icon: Heart,
    title: "Personalized Guidance",
    description: "1-on-1 mentorship tailored to your goals, skills, and career aspirations.",
  },
  {
    icon: DollarSign,
    title: "Affordable Programs",
    description: "Quality education and mentorship without breaking the bank. Performance-based paid internships available.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Industry-recognized certificates and portfolio projects that land interviews.",
  },
]

export function WhyChooseSection() {
  return (
    <Section className="bg-muted/50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Why Choose <span className="gradient-text">CareerLaunch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          We're different from traditional bootcamps and online courses
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
