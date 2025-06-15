"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Brain, DollarSign, Moon, BookOpen, Target, Zap, Apple, Play, Star, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GlassyIcon } from "@/components/ui/glassy-icon"

// Self App Features
const selfAppFeatures = [
  {
    icon: Brain,
    title: "Memory Management",
    description: "Organize and track your important memories",
    color: "purple",
  },
  {
    icon: DollarSign,
    title: "Money Management",
    description: "Track expenses and manage your finances",
    color: "green",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Beautiful dark theme for comfortable usage",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "Assignments & Exams",
    description: "Manage your academic schedule efficiently",
    color: "orange",
  },
  {
    icon: Target,
    title: "Habit Tracker",
    description: "Build and maintain positive habits",
    color: "red",
  },
  {
    icon: Zap,
    title: "Self Development",
    description: "Track your personal growth journey",
    color: "primary",
  },
]

// App Screenshots Data
const appScreenshots = [
  {
    title: "Dashboard",
    description: "Main overview screen",
    gradient: "from-purple-500 to-pink-500",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <h4 className="text-white font-bold text-lg">Good Morning!</h4>
          <p className="text-gray-200 text-sm">Ready to achieve your goals?</p>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <Brain className="h-6 w-6 text-white mb-2" />
            <p className="text-white text-xs">Memories</p>
            <p className="text-gray-200 text-xs">12 saved</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <DollarSign className="h-6 w-6 text-white mb-2" />
            <p className="text-white text-xs">Budget</p>
            <p className="text-gray-200 text-xs">$2,450</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <Target className="h-6 w-6 text-white mb-2" />
            <p className="text-white text-xs">Habits</p>
            <p className="text-gray-200 text-xs">5/7 done</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <BookOpen className="h-6 w-6 text-white mb-2" />
            <p className="text-white text-xs">Tasks</p>
            <p className="text-gray-200 text-xs">3 pending</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Memory Vault",
    description: "Store precious moments",
    gradient: "from-blue-500 to-cyan-500",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <Brain className="h-8 w-8 text-white mx-auto mb-2" />
          <h4 className="text-white font-bold text-lg">Memory Vault</h4>
          <p className="text-gray-200 text-sm">Your precious moments</p>
        </div>
        <div className="space-y-3 flex-1">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">First Day at Work</p>
                <p className="text-gray-200 text-xs">March 15, 2024</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Graduation Day</p>
                <p className="text-gray-200 text-xs">June 20, 2023</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Family Trip</p>
                <p className="text-gray-200 text-xs">December 25, 2023</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Finance Tracker",
    description: "Manage your money",
    gradient: "from-green-500 to-emerald-500",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <DollarSign className="h-8 w-8 text-white mx-auto mb-2" />
          <h4 className="text-white font-bold text-lg">$2,450.00</h4>
          <p className="text-gray-200 text-sm">Current Balance</p>
        </div>
        <div className="space-y-3 flex-1">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Groceries</p>
                <p className="text-gray-200 text-xs">Today</p>
              </div>
              <p className="text-red-300 font-medium">-$45.20</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Salary</p>
                <p className="text-gray-200 text-xs">Yesterday</p>
              </div>
              <p className="text-green-300 font-medium">+$3,200.00</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Coffee</p>
                <p className="text-gray-200 text-xs">2 days ago</p>
              </div>
              <p className="text-red-300 font-medium">-$4.50</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Habit Tracker",
    description: "Build better habits",
    gradient: "from-orange-500 to-red-500",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <Target className="h-8 w-8 text-white mx-auto mb-2" />
          <h4 className="text-white font-bold text-lg">Daily Habits</h4>
          <p className="text-gray-200 text-sm">5 of 7 completed today</p>
        </div>
        <div className="space-y-3 flex-1">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
              <p className="text-white text-sm">Morning Exercise</p>
            </div>
            <div className="text-green-300 text-xs">✓</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
              <p className="text-white text-sm">Read 30 minutes</p>
            </div>
            <div className="text-green-300 text-xs">✓</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
              <p className="text-white text-sm">Meditation</p>
            </div>
            <div className="text-gray-400 text-xs">○</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
              <p className="text-white text-sm">Drink 8 glasses</p>
            </div>
            <div className="text-green-300 text-xs">✓</div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function SelfAppShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showAppFeatures, setShowAppFeatures] = useState(false)
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)

  // Auto-rotate screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % appScreenshots.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

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

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated liquid blobs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
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
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.8, 1.3, 1],
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
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 bg-gradient-to-r from-green-500/6 to-emerald-500/6 rounded-full blur-3xl"
        />
      </div>

      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[0.5px]"></div>

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
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3 backdrop-blur-md border border-primary/20"
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

        {/* Self App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Liquid Glass Card */}
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-gray-900/20 dark:via-gray-900/10 dark:to-gray-900/5 border border-white/20 dark:border-gray-700/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Liquid effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>

            {/* Featured Project Badge */}
            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-md shadow-lg">
              <Star className="h-3 w-3" />
              Featured Project
            </div>

            <div className="relative p-4 sm:p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* App Info */}
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 backdrop-blur-md border border-primary/20"
                  >
                    <Apple className="h-4 w-4" />
                    <span className="text-sm font-medium">iOS App</span>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Self - Life Planning App
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    A comprehensive life management application built with Swift. Designed to help users organize their
                    memories, manage finances, track habits, and achieve personal development goals.
                  </p>

                  {/* Quick Features Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                    {selfAppFeatures.slice(0, 4).map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 p-2 sm:p-3 rounded-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/20"
                      >
                        <GlassyIcon icon={feature.icon} size={16} color={feature.color as any} className="p-1" />
                        <span className="text-xs sm:text-sm font-medium">{feature.title}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Swift", "SwiftUI", "Core Data", "iOS"].map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium backdrop-blur-md border border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => setShowAppFeatures(!showAppFeatures)}
                      className="rounded-full px-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {showAppFeatures ? "Hide Features" : "See Features"}
                    </Button>
                    <Button
                      variant="glass"
                      className="rounded-full px-6 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 hover:bg-white/30 dark:hover:bg-gray-800/30"
                      onClick={() => window.open("#", "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                  </div>
                </div>

                {/* App Screenshots/Mockup */}
                <div className="relative order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative mx-auto max-w-xs"
                  >
                    {/* Phone Mockup */}
                    <div className="relative w-64 h-96 sm:w-72 sm:h-[432px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl mx-auto">
                      <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

                        {/* Screen Content with Animated Screenshots */}
                        <div className="pt-8 h-full relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentScreenIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.1 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className={`absolute inset-0 pt-8 bg-gradient-to-br ${appScreenshots[currentScreenIndex].gradient}`}
                            >
                              {appScreenshots[currentScreenIndex].content}
                            </motion.div>
                          </AnimatePresence>

                          {/* Screen Indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {appScreenshots.map((_, index) => (
                              <motion.button
                                key={index}
                                onClick={() => setCurrentScreenIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === currentScreenIndex ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/70"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated App Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20"
                    >
                      {/* App Icon Content */}
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Sparkles className="h-8 w-8 text-white" />
                        </motion.div>

                        {/* Glowing effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-white/20 rounded-full blur-sm"
                        />
                      </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Zap className="h-6 w-6 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        x: [0, -3, 0],
                      }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                      className="absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Target className="h-4 w-4 text-white" />
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
                className="overflow-hidden mt-8"
              >
                <div className="border-t border-white/20 dark:border-gray-700/20 pt-8">
                  <h4 className="text-xl font-bold mb-6 text-center">App Features</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selfAppFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={featureVariants}
                        initial="hidden"
                        animate={showAppFeatures ? "visible" : "hidden"}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <GlassyIcon icon={feature.icon} size={20} color={feature.color as any} className="p-2" />
                          <h5 className="font-semibold">{feature.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Screenshots Section */}
                  <div className="mt-8 text-center">
                    <h5 className="text-lg font-semibold mb-4">App Screens</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {appScreenshots.map((screen, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentScreenIndex(index)}
                          className={`aspect-[9/16] rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-md border-2 ${
                            index === currentScreenIndex
                              ? "border-primary shadow-lg shadow-primary/20"
                              : "border-white/20 dark:border-gray-700/20 hover:border-primary/50"
                          } bg-gradient-to-br ${screen.gradient} flex items-center justify-center relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="text-center z-10">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                              <Play className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-white">{screen.title}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
