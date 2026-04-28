"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What's the difference between paid and unpaid tracks?",
    answer: "Paid internships are for candidates with strong skills and existing portfolio. You'll work on client projects and earn a stipend. Unpaid tracks are learning-focused for beginners, helping you build skills and portfolio to transition to paid roles."
  },
  {
    question: "How are candidates selected?",
    answer: "We evaluate based on your current skill level, portfolio, technical assessment, and interview performance. We believe in fair evaluation and provide opportunities for all skill levels through different tracks."
  },
  {
    question: "What is the time commitment required?",
    answer: "Paid internships require full-time commitment (40 hrs/week). Unpaid growth tracks require 15-20 hours per week. Flexibility is possible for students based on academic schedules."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Upon successful completion, you'll receive an industry-recognized certificate that you can add to your resume and LinkedIn profile."
  },
  {
    question: "Can I transition from unpaid to paid track?",
    answer: "Absolutely! Many of our paid interns started in the unpaid track. Based on your performance and skill growth, you can transition to paid roles."
  },
  {
    question: "What technologies will I work with?",
    answer: "Depending on the project, you'll work with modern tech stacks including React, Next.js, Node.js, Python, databases, cloud platforms, and more. We focus on industry-relevant technologies."
  },
  {
    question: "Is this program suitable for complete beginners?",
    answer: "The unpaid growth track is designed for beginners with basic programming knowledge. If you're completely new to programming, we recommend starting with our foundational courses first."
  },
  {
    question: "What happens after the internship ends?",
    answer: "Based on your performance, you may be offered a full-time position, extended internship, or project-based work. We also provide placement assistance and interview preparation support."
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group rounded-2xl overflow-hidden transition-all duration-300",
        "border-2 hover:border-primary/50",
        isOpen ? "border-primary shadow-lg shadow-primary/10" : "border-border"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300",
          isOpen ? "bg-primary/5" : "hover:bg-muted/50"
        )}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0",
            isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
          )}>
            <span className="font-bold text-sm">{index + 1}</span>
          </div>
          <span className={cn(
            "font-semibold text-base md:text-lg transition-colors",
            isOpen && "text-primary"
          )}>
            {question}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-6 h-6 transition-all duration-300 flex-shrink-0 ml-4",
            isOpen ? "rotate-180 text-primary" : "text-muted-foreground group-hover:text-primary"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2">
              <div className="pl-11">
                <p className="text-muted-foreground leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function InternshipFAQ() {
  return (
    <Section className="bg-muted/30">
      <Container size="lg">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="text-sm font-medium">💡 Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about our internship programs. Can't find your answer? Contact us!
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="glass p-8 md:p-10 rounded-3xl text-center border border-border/50 shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help! Reach out to us and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-[var(--primary-dark)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
