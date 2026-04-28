"use client"

import { motion } from "framer-motion"
import { DollarSign, GraduationCap, Code, Rocket } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const tracks = [
  {
    type: "Paid Internship",
    icon: DollarSign,
    duration: "3-6 months",
    stipend: "₹5,000 - ₹15,000/month",
    requirements: [
      "Strong foundational skills in web development",
      "At least 2 completed projects in portfolio",
      "Pass technical assessment",
      "Available for full-time commitment"
    ],
    benefits: [
      "Monthly stipend based on performance",
      "Work on client projects",
      "Direct mentorship from seniors",
      "Potential for full-time conversion"
    ],
    color: "from-emerald-500 to-green-500"
  },
  {
    type: "Unpaid Growth Track",
    icon: GraduationCap,
    duration: "2-4 months",
    stipend: "Learning-focused",
    requirements: [
      "Basic programming knowledge",
      "Eager to learn and grow",
      "Commitment to complete the program",
      "Part-time availability (15-20 hrs/week)"
    ],
    benefits: [
      "Hands-on project experience",
      "Weekly mentorship sessions",
      "Industry certificate upon completion",
      "Transition to paid track based on performance"
    ],
    color: "from-blue-500 to-cyan-500"
  }
]

export function InternshipTracks() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Choose Your <span className="gradient-text">Track</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          We offer pathways for different skill levels and career goals
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tracks.map((track, index) => (
          <motion.div
            key={track.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4`}>
                <track.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3">{track.type}</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6">
                <div className="text-sm">
                  <span className="text-muted-foreground">Duration: </span>
                  <span className="font-medium">{track.duration}</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Stipend: </span>
                  <span className="font-medium">{track.stipend}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {track.requirements.map((req, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Code className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {track.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Rocket className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
