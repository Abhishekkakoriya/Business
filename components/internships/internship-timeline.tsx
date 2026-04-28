"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Section } from "@/components/ui/section"

const timeline = [
  {
    phase: "Application",
    duration: "Week 1",
    description: "Submit your application with portfolio and resume"
  },
  {
    phase: "Assessment",
    duration: "Week 1-2",
    description: "Complete technical assessment and initial screening"
  },
  {
    phase: "Interview",
    duration: "Week 2-3",
    description: "Technical interview and culture fit discussion"
  },
  {
    phase: "Onboarding",
    duration: "Week 3-4",
    description: "Get oriented with tools, team, and first projects"
  },
  {
    phase: "Active Work",
    duration: "Month 2+",
    description: "Work on real projects with regular mentorship"
  },
  {
    phase: "Completion",
    duration: "Final Month",
    description: "Project delivery, performance review, and certification"
  },
]

export function InternshipTimeline() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Your <span className="gradient-text">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          From application to certification - here's what to expect
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Desktop Timeline View */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div className={`glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-border ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {item.duration}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.phase}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline View */}
        <div className="md:hidden space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
            >
              {/* Mobile Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              {/* Content */}
              <div className="glass p-5 rounded-xl">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  {item.duration}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.phase}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
