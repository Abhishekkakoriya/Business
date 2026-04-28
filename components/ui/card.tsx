import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "hover"
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground border border-border shadow-md",
      glass: "glass shadow-lg",
      gradient: "bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border shadow-lg",
      hover: "bg-card text-card-foreground border border-border shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
    }
    
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl p-6", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export { Card }
