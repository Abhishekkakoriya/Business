"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/internships", label: "Internships" },
  { href: "/interview-prep", label: "Interview Prep" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                Career<span className="gradient-text">Launch</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/internships">
              <Button variant="gradient" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden glass border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Container>
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    pathname === link.href ? "text-primary" : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex items-center gap-4">
                <ThemeToggle />
                <Link href="/internships" onClick={() => setIsOpen(false)} className="flex-1">
                  <Button variant="gradient" size="md" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </motion.header>
  )
}
