"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface GlassyIconProps {
  icon: LucideIcon
  className?: string
  size?: number
  color?: string
}

export function GlassyIcon({ icon: Icon, className, size = 24, color = "primary" }: GlassyIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex items-center justify-center p-3 rounded-xl backdrop-blur-md overflow-hidden",
        color === "primary" && "bg-primary/10 text-primary",
        color === "purple" && "bg-purple-500/10 text-purple-500",
        color === "blue" && "bg-blue-500/10 text-blue-500",
        color === "green" && "bg-green-500/10 text-green-500",
        color === "red" && "bg-red-500/10 text-red-500",
        color === "orange" && "bg-orange-500/10 text-orange-500",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>

      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `radial-gradient(circle at 30% 30%, ${getColorValue(color)}30, transparent 70%)`,
            `radial-gradient(circle at 70% 70%, ${getColorValue(color)}30, transparent 70%)`,
            `radial-gradient(circle at 30% 70%, ${getColorValue(color)}30, transparent 70%)`,
            `radial-gradient(circle at 70% 30%, ${getColorValue(color)}30, transparent 70%)`,
            `radial-gradient(circle at 30% 30%, ${getColorValue(color)}30, transparent 70%)`,
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <Icon size={size} />
    </motion.div>
  )
}

function getColorValue(color: string): string {
  switch (color) {
    case "primary":
      return "#8b5cf6"
    case "purple":
      return "#a855f7"
    case "blue":
      return "#3b82f6"
    case "green":
      return "#22c55e"
    case "red":
      return "#ef4444"
    case "orange":
      return "#f97316"
    default:
      return "#8b5cf6"
  }
}
