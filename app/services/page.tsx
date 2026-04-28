import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Code2, Zap, Layers, BarChart3, ShieldCheck, Cpu } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Bespoke applications tailored to your business needs. From concept to deployment, we handle it all with enterprise-grade quality.",
      features: ["Full-stack web & mobile", "API development", "Integration services"]
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Accelerate your applications. We identify bottlenecks and implement solutions that deliver measurable improvements.",
      features: ["Code optimization", "Infrastructure scaling", "Database tuning"]
    },
    {
      icon: Layers,
      title: "Architecture & Strategy",
      description: "Design scalable systems built for growth. Our architects help you make the right technology decisions.",
      features: ["System design", "Tech stack evaluation", "Migration planning"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn data into actionable insights. Build data pipelines and analytics solutions that drive business decisions.",
      features: ["Data engineering", "Analytics platforms", "Business intelligence"]
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Protect your digital assets. We implement security best practices and ensure regulatory compliance.",
      features: ["Security audits", "Infrastructure hardening", "Compliance consulting"]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI technology. From prototypes to production systems, we build intelligent solutions.",
      features: ["Model development", "NLP solutions", "Computer vision"]
    }
  ]

  const processSteps = [
    { number: "01", title: "Discovery", description: "We deeply understand your business goals, constraints, and vision." },
    { number: "02", title: "Strategy", description: "We design the optimal technical approach and roadmap." },
    { number: "03", title: "Execution", description: "Our expert team builds with quality and attention to detail." },
    { number: "04", title: "Delivery", description: "We deploy, monitor, and support your solution in production." }
  ]

  return (
    <main className="min-h-screen pt-32">
      {/* Hero Section */}
      <Section className="py-20 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise Software Solutions
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              We build the technology that powers ambitious companies. From concept to scale, we're your technical partner.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-foreground/70 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-foreground/60 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results on time and on budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-3">{step.number}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Technology?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build the next generation of your product.
            </p>
            <a href="/contact">
              <Button variant="gradient" size="lg">
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  )
}
