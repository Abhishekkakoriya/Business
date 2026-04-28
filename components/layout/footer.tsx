"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Link2, Share2 } from "lucide-react"
import { Container } from "@/components/ui/container"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  work: [
    { label: "Projects", href: "/projects" },
    { label: "Portfolio", href: "/projects" },
    { label: "Careers", href: "/internships" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "GitHub" },
  { icon: Share2, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <Container>
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Career<span className="gradient-text">Launch</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Enterprise software solutions building the future. We deliver technology that transforms businesses.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@careerlaunch.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@careerlaunch.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Work</h3>
            <ul className="space-y-2">
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerLaunch. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg hover:bg-card transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
