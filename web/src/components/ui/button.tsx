import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
          {
            "bg-brand-medium text-white hover:bg-brand-dark": variant === "primary",
            "bg-brand-light text-brand-dark hover:bg-brand-medium/20": variant === "secondary",
            "border border-brand-medium text-brand-medium bg-transparent hover:bg-brand-medium hover:text-white": variant === "outline",
            "hover:bg-brand-light/30 text-brand-dark": variant === "ghost",
            "text-brand-medium underline-offset-4 hover:underline": variant === "link",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-6 py-2 text-base": size === "md",
            "h-12 px-8 py-3 text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
