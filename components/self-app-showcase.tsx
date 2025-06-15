"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Apple, Play } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Real Self App Screenshots
const appScreenshots = [
  {
    title: "Dashboard",
    description: "Main overview with quick stats",
    image: "/self1.jpeg?height=600&width=300",
    gradient: "from-purple-500 to-pink-500",
  },
]

// Self App Features
const selfAppFeatures = [
  {
    icon: "🧠",
    title: "Memory Management",
    description: "Organize and track your important memories",
    color: "purple",
  },
  {
    icon: "💰",
    title: "Money Management",
    description: "Track expenses and manage your finances",
    color: "green",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    description: "Beautiful dark theme for comfortable usage",
    color: "blue",
  },
  {
    icon: "📚",
    title: "Assignments & Exams",
    description: "Manage your academic schedule efficiently",
    color: "orange",
  },
  {
    icon: "🎯",
    title: "Habit Tracker",
    description: "Build and maintain positive habits",
    color: "red",
  },
  {
    icon: "⚡",
    title: "Self Development",
    description: "Track your personal growth journey",
    color: "primary",
  },
]

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

export default function SelfAppShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showAppFeatures, setShowAppFeatures] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  // Add these state variables after existing useState declarations
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-rotate screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % appScreenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Add swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentScreenshot((prev) => (prev + 1) % appScreenshots.length)
    }
    if (isRightSwipe) {
      setCurrentScreenshot((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length)
    }
  }

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % appScreenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length)
  }

  return (
    <section
      id="self-app-showcase"
      data-section="self"
      className="self-app-showcase py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Liquid Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-primary/8 to-purple-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 bg-gradient-to-r from-green-500/6 to-emerald-500/6 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3"
          >
            <Apple className="h-2.5 w-2.5" />
            <span className="text-xs font-medium">Featured Project</span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
            Self - Life Planning App
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto text-sm md:text-base">
            A comprehensive iOS application built with Swift for complete life management
          </p>
        </motion.div>

        {/* Rest of your component remains the same... */}
        {/* Self App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile Layout - iPhone and Icon Above Card */}
          <div className="block lg:hidden">
            {/* iPhone Mockup with App Icon - Mobile */}
            <div className="relative flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative flex items-center justify-center gap-6"
              >
                {/* App Icon on Left Side */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  <div className="relative">
                    {/* Glowing Ring Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-lg"
                    />

                    {/* App Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-12 h-12 bg-white rounded-xl shadow-2xl flex items-center justify-center overflow-hidden"
                    >
                      {/* Shine Effect */}
                      <motion.div
                        animate={{
                          x: [-100, 100],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />

                      {/* Your App Icon */}
                      <Image src="/self.png" alt="Self App Icon" width={32} height={32} className="relative z-10" />
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          x: [0, Math.sin(i) * 15, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        style={{
                          top: `${20 + Math.sin(i * 60) * 25}%`,
                          left: `${20 + Math.cos(i * 60) * 25}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Connection Line Animation */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <svg width="40" height="2" className="text-primary/30">
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="40"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                      animate={{
                        strokeDashoffset: [0, -6],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </motion.div>

                {/* iPhone Frame */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotateY: [0, 2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-40 aspect-[9/19.5] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.5rem] p-1 shadow-2xl"
                >
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[1.2rem] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-20"></div>

                    {/* Full Screen Screenshot Container with Swipe */}
                    <div
                      className="absolute inset-0 rounded-[1.2rem] overflow-hidden"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {/* Screenshot Image - Full Screen */}
                      <motion.div
                        key={currentScreenshot}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={appScreenshots[currentScreenshot].image || "/placeholder.svg"}
                          alt={appScreenshots[currentScreenshot].title}
                          className="w-full h-full object-cover rounded-[1.2rem]"
                        />
                      </motion.div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevScreenshot}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={nextScreenshot}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Screenshot Indicators - Bottom */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
                        {appScreenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentScreenshot(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              index === currentScreenshot ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile App Info Card */}
            <div className="liquid-glass p-4 sm:p-6 relative overflow-hidden">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
              >
                <Apple className="h-4 w-4" />
                <span className="text-sm font-medium">iOS App</span>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Self - Life Planning App
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                A comprehensive life management application built with Swift. Designed to help users organize their
                memories, manage finances, track habits, and achieve personal development goals.
              </p>

              {/* Quick Features Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {selfAppFeatures.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <span className="text-base">{feature.icon}</span>
                    <span className="text-xs font-medium">{feature.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["Swift", "SwiftUI", "Core Data", "iOS"].map((tech, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => setShowAppFeatures(!showAppFeatures)}
                  className="rounded-full px-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-sm"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {showAppFeatures ? "Hide Features" : "See Features"}
                </Button>
                <Button
                  variant="glass"
                  className="rounded-full px-4 text-sm"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Reduced Width Card */}
          <div className="hidden lg:block relative">
            {/* Liquid Glass Card - Reduced Width */}
            <div className="liquid-glass p-6 md:p-8 relative overflow-hidden max-w-2xl">
              {/* App Info */}
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
                >
                  <Apple className="h-4 w-4" />
                  <span className="text-sm font-medium">iOS App</span>
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Self - Life Planning App
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A comprehensive life management application built with Swift. Designed to help users organize their
                  memories, manage finances, track habits, and achieve personal development goals.
                </p>

                {/* Quick Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selfAppFeatures.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span className="text-sm font-medium">{feature.title}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Swift", "SwiftUI", "Core Data", "iOS"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => setShowAppFeatures(!showAppFeatures)}
                    className="rounded-full px-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {showAppFeatures ? "Hide Features" : "See Features"}
                  </Button>
                  <Button variant="glass" className="rounded-full px-6" onClick={() => window.open("#", "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>

            {/* iPhone Mockup with App Icon - Desktop Positioned */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative flex items-center justify-center gap-8"
              >
                {/* App Icon on Left Side */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  <div className="relative">
                    {/* Glowing Ring Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-lg"
                    />

                    {/* App Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                    >
                      {/* Shine Effect */}
                      <motion.div
                        animate={{
                          x: [-100, 100],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />

                      {/* Your App Icon */}
                      <Image src="/self.png" alt="Self App Icon" width={48} height={48} className="relative z-10" />
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.sin(i) * 20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                        className="absolute w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        style={{
                          top: `${20 + Math.sin(i * 60) * 30}%`,
                          left: `${20 + Math.cos(i * 60) * 30}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Connection Line Animation */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <svg width="60" height="2" className="text-primary/30">
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="60"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -10],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </motion.div>

                {/* iPhone Frame with Enhanced Animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotateY: [0, 2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-64 lg:w-72 aspect-[9/19.5] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl"
                >
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-gray-900 rounded-full z-20"></div>

                    {/* Full Screen Screenshot Container with Swipe */}
                    <div
                      className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {/* Screenshot Image - Full Screen */}
                      <motion.div
                        key={currentScreenshot}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={appScreenshots[currentScreenshot].image || "/placeholder.svg"}
                          alt={appScreenshots[currentScreenshot].title}
                          className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem]"
                        />
                      </motion.div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevScreenshot}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={nextScreenshot}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Screenshot Indicators - Bottom */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
                        {appScreenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentScreenshot(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentScreenshot ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Expandable Features Section */}
          <motion.div
            initial={false}
            animate={{
              height: showAppFeatures ? "auto" : 0,
              opacity: showAppFeatures ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mt-6 sm:mt-8"
          >
            <div className="border-t border-white/20 dark:border-gray-700/30 pt-6 sm:pt-8">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">App Features</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {selfAppFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate={showAppFeatures ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 sm:p-4 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{feature.icon}</span>
                      <h5 className="font-semibold text-sm sm:text-base">{feature.title}</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Screenshots Section */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
