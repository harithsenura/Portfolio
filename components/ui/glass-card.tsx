import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass-card rounded-xl p-6", hoverEffect && "hover:shadow-xl hover:translate-y-[-2px]", className)}
      {...props}
    >
      {children}
    </div>
  )
}
