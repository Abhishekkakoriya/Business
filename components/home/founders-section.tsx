"use client"

import { motion } from "framer-motion"
import { Link2, Share2 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const founders = [
  {
    name: "Amit Kumar",
    role: "Co-Founder & CEO",
    expertise: "Ex-Google | 8+ years in Tech",
    bio: "Passionate about bridging the gap between education and industry. Led engineering teams at Google and helped 1000+ developers level up.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sneha Reddy",
    role: "Co-Founder & CTO",
    expertise: "Ex-Amazon | Full Stack Architect",
    bio: "Built scalable systems serving millions. Believes in learning by doing and mentoring the next generation of engineers.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rohan Singh",
    role: "Co-Founder & Head of Placements",
    expertise: "Ex-Microsoft | Career Coach",
    bio: "Cracked 50+ tech interviews. Expert in DSA, system design, and helping students navigate their career journey strategically.",
    linkedin: "#",
    github: "#",
  },
]

export function FoundersSection() {
  return (
    <Section className="bg-muted/50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Meet the <span className="gradient-text">Founders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Industry veterans committed to your success
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <Card variant="hover" className="text-center h-full">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-white font-bold text-3xl">
                {founder.name.split(" ").map(n => n[0]).join("")}
              </div>

              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-primary font-medium mb-2">{founder.role}</p>
              <p className="text-sm text-muted-foreground font-medium mb-4">{founder.expertise}</p>
              <p className="text-muted-foreground mb-6">{founder.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <Link2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                  aria-label={`${founder.name} GitHub`}
                >
                  <Share2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
