import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "gradient"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-[var(--primary-dark)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[var(--secondary)] hover:shadow-lg hover:-translate-y-0.5",
      accent: "bg-accent text-accent-foreground hover:bg-[var(--accent-dark)] hover:shadow-lg hover:-translate-y-0.5",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg",
      ghost: "hover:bg-muted hover:text-foreground",
      gradient: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm h-9",
      md: "px-6 py-3 text-base h-11",
      lg: "px-6 py-3 md:px-8 md:py-4 text-base md:text-lg h-12 md:h-14",
      xl: "px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl h-14 md:h-16"
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
