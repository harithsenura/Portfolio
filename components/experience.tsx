"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, ExternalLink, Github, Calendar, TrendingUp, Zap, Star, Play } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const ongoingProjects = [
  {
    title: "Self - Life Planning App",
    description:
      "A comprehensive iOS application built with Swift for complete life management including memory tracking, financial management, habit building, and personal development.",
    status: "In Development",
    progress: 75,
    category: "Mobile App",
    technologies: ["Swift", "SwiftUI", "Core Data", "iOS"],
    features: [
      "Memory Management System",
      "Financial Tracking",
      "Habit Tracker",
      "Dark Mode Support",
      "Academic Schedule Management",
      "Personal Development Tracking",
    ],
    teamSize: "Solo Project",
    startDate: "2024",
    expectedCompletion: "Q2 2025",
    priority: "high",
    type: "mobile",
    image: "/self.png",
    demoAvailable: true,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js featuring liquid glass design, smooth animations, and responsive layouts. Showcases projects and professional experience.",
    status: "Active",
    progress: 90,
    category: "Web App",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Liquid Glass Design",
      "Smooth Animations",
      "Responsive Layout",
      "Dark Mode Support",
      "SEO Optimized",
      "Performance Optimized",
    ],
    teamSize: "Solo Project",
    startDate: "2024",
    expectedCompletion: "Q1 2025",
    priority: "high",
    type: "web",
    image: "/placeholder.svg?height=48&width=48",
    demoAvailable: true,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern UI, payment integration, inventory management, and admin dashboard. Built for scalability and performance.",
    status: "Planning",
    progress: 25,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Product Management",
      "Payment Integration",
      "User Authentication",
      "Admin Dashboard",
      "Inventory Tracking",
      "Order Management",
    ],
    teamSize: "Solo Project",
    startDate: "2024",
    expectedCompletion: "Q3 2025",
    priority: "medium",
    type: "web",
    image: "/placeholder.svg?height=48&width=48",
    demoAvailable: false,
    githubUrl: "#",
    liveUrl: "#",
  },
]

export default function OngoingProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showFeatures, setShowFeatures] = useState<Set<number>>(new Set())
  const [currentProject, setCurrentProject] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const toggleFeatures = (index: number) => {
    const newShowFeatures = new Set(showFeatures)
    if (newShowFeatures.has(index)) {
      newShowFeatures.delete(index)
    } else {
      newShowFeatures.add(index)
    }
    setShowFeatures(newShowFeatures)
  }

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

    if (isLeftSwipe && currentProject < ongoingProjects.length - 1) {
      setCurrentProject((prev) => prev + 1)
    }
    if (isRightSwipe && currentProject > 0) {
      setCurrentProject((prev) => prev - 1)
    }
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % ongoingProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + ongoingProjects.length) % ongoingProjects.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-primary/6 to-purple-500/6 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/6 to-cyan-500/6 rounded-full blur-3xl"
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
          className="absolute top-1/2 right-1/3 w-36 h-36 md:w-56 md:h-56 bg-gradient-to-r from-green-500/6 to-emerald-500/6 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3"
          >
            <Zap className="h-2.5 w-2.5" />
            <span className="text-xs font-medium">Currently Building</span>
          </motion.div>

          <h2 className="text-xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
            Ongoing Projects
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto text-xs md:text-sm">
            Current projects in active development
          </p>
        </motion.div>

        {/* Single Project Display with Swipe */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Project Navigation Arrows - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={prevProject}
              disabled={currentProject === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextProject}
              disabled={currentProject === ongoingProjects.length - 1}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Swipeable Container */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(currentProject)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  transition: { type: "spring", damping: 25 },
                }}
                className="relative"
              >
                <GlassCard
                  className={`p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                    hoveredIndex === currentProject ? "shadow-xl shadow-primary/10" : ""
                  }`}
                >
                  {/* Priority Badge */}
                  {ongoingProjects[currentProject].priority === "high" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      <Star className="h-2.5 w-2.5" />
                      <span>Priority</span>
                    </motion.div>
                  )}

                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {/* Project Icon */}
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="relative"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={ongoingProjects[currentProject].image || "/placeholder.svg"}
                              alt={`${ongoingProjects[currentProject].title} icon`}
                              className="w-6 h-6 sm:w-8 sm:h-8 object-cover"
                            />
                          </div>

                          {/* Floating particles around icon */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                y: [0, -15, 0],
                                x: [0, Math.sin(i) * 10, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.5,
                                ease: "easeInOut",
                              }}
                              className="absolute w-1 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                              style={{
                                top: `${20 + Math.sin(i * 60) * 20}%`,
                                left: `${20 + Math.cos(i * 60) * 20}%`,
                              }}
                            />
                          ))}
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 truncate">
                            {ongoingProjects[currentProject].title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
                                ongoingProjects[currentProject].type === "mobile"
                                  ? "bg-green-500/10 text-green-600"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              {ongoingProjects[currentProject].category}
                            </span>
                            <div className="flex items-center text-xs text-orange-600 bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full w-fit">
                              <Calendar className="h-2.5 w-2.5 mr-1" />
                              {ongoingProjects[currentProject].status}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                        {ongoingProjects[currentProject].description}
                      </p>
                    </div>

                    {/* Project Stats - Desktop */}
                    <div className="hidden lg:block ml-6">
                      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 min-w-[200px]">
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Progress</span>
                              <span className="font-medium text-primary">
                                {ongoingProjects[currentProject].progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${ongoingProjects[currentProject].progress}%` }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Team</span>
                            <span className="font-medium">{ongoingProjects[currentProject].teamSize}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Started</span>
                            <span className="font-medium">{ongoingProjects[currentProject].startDate}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Expected</span>
                            <span className="font-medium text-green-600">
                              {ongoingProjects[currentProject].expectedCompletion}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Stats - Mobile/Tablet */}
                  <div className="lg:hidden mb-4 sm:mb-6">
                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Progress</span>
                            <span className="font-medium text-primary">
                              {ongoingProjects[currentProject].progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${ongoingProjects[currentProject].progress}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Team</span>
                            <span className="font-medium">{ongoingProjects[currentProject].teamSize}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Expected</span>
                            <span className="font-medium text-green-600">
                              {ongoingProjects[currentProject].expectedCompletion}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code className="h-3 w-3 mr-1 text-primary" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ongoingProjects[currentProject].technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * techIndex }}
                          className={`text-sm px-3 py-1 rounded-full font-medium ${
                            ongoingProjects[currentProject].type === "mobile"
                              ? "bg-green-500/10 text-green-600"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <Button
                      onClick={() => toggleFeatures(currentProject)}
                      className="rounded-full px-4 sm:px-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-sm"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {showFeatures.has(currentProject) ? "Hide Features" : "View Features"}
                    </Button>

                    <div className="flex gap-2">
                      {ongoingProjects[currentProject].demoAvailable && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full px-3 sm:px-4 text-sm"
                          onClick={() => window.open(ongoingProjects[currentProject].liveUrl, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Demo
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full px-3 sm:px-4 text-sm"
                        onClick={() => window.open(ongoingProjects[currentProject].githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Expandable Features */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: showFeatures.has(currentProject) ? "auto" : 0,
                      opacity: showFeatures.has(currentProject) ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ongoingProjects[currentProject].features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300 p-2 rounded-lg bg-white/30 dark:bg-gray-800/30"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-purple-500 mr-2 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="md:hidden flex justify-center gap-4 mt-4">
            <button
              onClick={prevProject}
              disabled={currentProject === 0}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextProject}
              disabled={currentProject === ongoingProjects.length - 1}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {ongoingProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-primary scale-125 shadow-sm shadow-primary/30"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/6 to-purple-500/6 border border-primary/10 text-xs">
            <span className="text-gray-700 dark:text-gray-300">Interested in collaborating?</span>
            <motion.div animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
