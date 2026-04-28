"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  spacing?: "sm" | "md" | "lg" | "xl"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, containerSize = "xl", spacing = "lg", ...props }, ref) => {
    const spacings = {
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-20 lg:py-24",
      xl: "py-20 md:py-24 lg:py-32"
    }
    
    return (
      <section
        ref={ref}
        className={cn(spacings[spacing], className)}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section }
