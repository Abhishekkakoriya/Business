"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, GraduationCap, FileText, Users, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your business needs and vision.",
    href: "/services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Enterprise Architecture",
    description: "Scalable systems designed for growth and reliability at enterprise scale.",
    href: "/services",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    description: "Modern infrastructure and deployment strategies for optimal performance.",
    href: "/services",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: FileText,
    title: "Data Solutions",
    description: "Analytics platforms and data pipelines that drive business intelligence.",
    href: "/services",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Expert guidance on technology strategy and digital transformation.",
    href: "/contact",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Rocket,
    title: "View All Services",
    description: "Explore our complete range of enterprise software solutions.",
    href: "/services",
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
          Our <span className="gradient-text">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg lg:text-lg text-muted-foreground"
        >
          Enterprise-grade solutions for modern businesses
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
