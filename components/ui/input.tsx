import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-foreground">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-base",
            "transition-all duration-200",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
