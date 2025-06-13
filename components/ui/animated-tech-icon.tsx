"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedTechIconProps {
  name: string
  icon: string
  color: string
  className?: string
}

export function AnimatedTechIcon({ name, icon, color, className }: AnimatedTechIconProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={cn("flex flex-col items-center", className)}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear", repeatDelay: 1 }}
        className={cn(
          "relative flex items-center justify-center p-4 rounded-xl backdrop-blur-md mb-2",
          "bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20",
          "shadow-[0_4px_12px_rgba(0,0,0,0.05),_inset_0_1px_1px_rgba(255,255,255,0.2)]",
          "dark:shadow-[0_4px_12px_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(255,255,255,0.05)]",
        )}
        style={{
          boxShadow: `0 4px 12px ${color}20, inset 0 1px 1px rgba(255,255,255,0.2)`,
        }}
      >
        <div className="relative w-10 h-10">
          <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
      </motion.div>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </motion.div>
  )
}
