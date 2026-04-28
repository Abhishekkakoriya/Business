"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, GraduationCap, FileText, Users, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const services = [
  {
    icon: Briefcase,
    title: "Internship Programs",
    description: "Paid & unpaid internships based on your skill level. Gain real-world experience.",
    href: "/internships",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "Interview Preparation",
    description: "DSA, system design, HR prep. Crack interviews at top companies.",
    href: "/interview-prep",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Code,
    title: "Project Development",
    description: "Build full-stack projects for your portfolio and our clients.",
    href: "/projects",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description: "ATS-friendly resumes that get you noticed by recruiters.",
    href: "/contact",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Career Mentorship",
    description: "1-on-1 guidance from industry professionals in your field.",
    href: "/contact",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Rocket,
    title: "Client Projects",
    description: "Work on real startup MVPs and get paid for your contributions.",
    href: "/projects",
    color: "from-indigo-500 to-blue-500"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function ServicesSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          What We <span className="gradient-text">Offer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Comprehensive programs designed to transform your career trajectory
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Link href={service.href} className="block h-full">
              <Card
                variant="hover"
                className="h-full group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
