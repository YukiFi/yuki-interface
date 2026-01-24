import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg",
  {
    variants: {
      variant: {
        default:
          "bg-brand/90 text-brand-900 backdrop-blur-sm hover:bg-brand hover:brightness-105",
        destructive:
          "bg-destructive/90 text-destructive-foreground backdrop-blur-sm hover:bg-destructive hover:brightness-110",
        outline:
          "bg-white/[0.03] backdrop-blur-sm text-foreground hover:bg-white/[0.06] hover:brightness-105",
        secondary:
          "bg-white/[0.04] backdrop-blur-sm text-secondary-foreground hover:bg-white/[0.07]",
        ghost: 
          "hover:bg-white/[0.04] hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        brand:
          "bg-brand/90 text-brand-900 backdrop-blur-sm hover:bg-brand hover:brightness-105",
        "brand-outline":
          "bg-white/[0.03] backdrop-blur-sm text-foreground hover:bg-white/[0.06] hover:brightness-105",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base font-medium",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
