"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border border-white/10 dark:border-gray-700/30 text-foreground hover:bg-white/20 dark:hover:bg-gray-800/40",
        primary: "backdrop-blur-md bg-primary/80 text-primary-foreground hover:bg-primary/70 border border-primary/10",
        destructive:
          "backdrop-blur-md bg-destructive/80 text-destructive-foreground hover:bg-destructive/70 border border-destructive/10",
        outline:
          "backdrop-blur-md border border-white/20 dark:border-gray-700/30 bg-transparent hover:bg-white/10 dark:hover:bg-gray-800/20 text-foreground",
        ghost: "hover:bg-white/10 dark:hover:bg-gray-800/20 text-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
