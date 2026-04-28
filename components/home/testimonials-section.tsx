"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    image: "/testimonials/priya.jpg",
    content: "CareerLaunch transformed my career. From a confused student to landing at Google in 8 months. The mentorship and real projects made all the difference.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Full Stack Developer @ Startup",
    image: "/testimonials/rahul.jpg",
    content: "The paid internship program gave me hands-on experience. I built 3 production apps and got hired before graduation. Best investment I made.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "Frontend Developer @ Amazon",
    image: "/testimonials/anjali.jpg",
    content: "Interview prep was intense but worth it. Cracked Amazon, Microsoft, and Flipkart. The mock interviews and DSA roadmap were game-changers.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Success <span className="gradient-text">Stories</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Hear from students who transformed their careers with us
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="hover" className="h-full relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
