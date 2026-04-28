import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "FinTech Platform Redesign",
      description: "Complete redesign and modernization of a legacy banking platform. Built scalable microservices architecture supporting 500K+ daily transactions.",
      image: "bg-gradient-to-br from-blue-500 to-blue-700",
      technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes"],
      impact: "40% performance improvement, 99.99% uptime",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Analytics Engine",
      description: "Real-time analytics platform processing 10M+ events daily. Provides actionable insights for 200+ online retailers.",
      image: "bg-gradient-to-br from-purple-500 to-purple-700",
      technologies: ["Python", "Apache Spark", "Elasticsearch", "React"],
      impact: "20% increase in conversion rates for clients",
      link: "#"
    },
    {
      id: 3,
      title: "Healthcare Data Portal",
      description: "HIPAA-compliant patient data management system. Integrated with 15+ hospital systems serving 100K+ patients.",
      image: "bg-gradient-to-br from-green-500 to-green-700",
      technologies: ["Vue.js", "Python", "MongoDB", "AWS"],
      impact: "Reduced data retrieval time by 75%",
      link: "#"
    },
    {
      id: 4,
      title: "AI-Powered Supply Chain Optimization",
      description: "Machine learning system predicting supply chain disruptions. Helps enterprises optimize inventory and reduce costs.",
      image: "bg-gradient-to-br from-orange-500 to-orange-700",
      technologies: ["TensorFlow", "Python", "GCP", "React"],
      impact: "$2M annual savings for major retail client",
      link: "#"
    },
    {
      id: 5,
      title: "Real-time Collaboration Platform",
      description: "Enterprise SaaS platform enabling 50+ teams to collaborate on projects. Built with real-time sync technology.",
      image: "bg-gradient-to-br from-pink-500 to-pink-700",
      technologies: ["Next.js", "Firebase", "WebSockets", "TypeScript"],
      impact: "1000+ enterprise customers, 10M+ monthly active users",
      link: "#"
    },
    {
      id: 6,
      title: "Mobile Banking Application",
      description: "Full-featured mobile banking app with AI-powered fraud detection. Available on iOS and Android.",
      image: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      technologies: ["React Native", "Node.js", "ML Kit", "PostgreSQL"],
      impact: "2M downloads, 4.8-star rating, zero security breaches",
      link: "#"
    }
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
              Our Portfolio
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Proven track record of delivering transformative technology solutions for industry leaders. See what we've built.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Project Image */}
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 flex-1">{project.description}</p>

                    {/* Impact */}
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold text-primary">{project.impact}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-muted/50 py-20">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Projects Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">$100M+</div>
              <p className="text-foreground/70">Client Value Created</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-foreground/70">Uptime Average</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-foreground/70">Years of Experience</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">See Your Project Come to Life</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ready to join our roster of successful clients? Let's talk about your vision.
            </p>
            <a href="/contact">
              <Button variant="gradient" size="lg">
                Start a Project
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  )
}
