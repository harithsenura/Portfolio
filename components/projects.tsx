"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, Apple, SmartphoneIcon as Android, Info } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassyIcon } from "@/components/ui/glassy-icon"
import { useState } from "react"
import { LiquidGlassModal } from "@/components/ui/liquid-glass-modal"
import ProjectDetails from "@/components/project-details"

const webProjects = [
  {
    title: "Hotel Management System",
    description:
      "A comprehensive hotel management platform with booking system, room management, guest services, and administrative dashboard.",
    longDescription:
      "A full-featured hotel management system built with modern web technologies. This platform streamlines hotel operations with features like online booking, room availability tracking, guest check-in/check-out, billing management, and comprehensive reporting. The system includes both guest-facing booking interface and administrative dashboard for hotel staff.",
    features: [
      "Online room booking and reservation system",
      "Real-time room availability tracking",
      "Guest check-in and check-out management",
      "Billing and payment processing",
      "Guest profile and history management",
      "Administrative dashboard with analytics",
      "Room service and housekeeping management",
      "Reporting and revenue analytics",
    ],
    images: [
      "/HMS.png?height=600&width=800",
      "/HMS1.png?height=600&width=800",
      "/HMS2.png?height=600&width=800",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    demoLink: "https://hotel-management-system-red.vercel.app/",
    codeLink: "https://github.com/harithsenura/Hotel-Management-System.git",
    featured: true,
    category: "web",
  },
  {
    title: "Talent Showcasting",
    description:
      "Real-time analytics dashboard for businesses to monitor KPIs, sales data, and customer insights with interactive charts.",
    longDescription:
      "A powerful analytics dashboard built with Next.js and D3.js that provides businesses with real-time insights into their performance metrics. The dashboard features interactive charts and visualizations that make complex data easy to understand and analyze.",
    features: [
      "Real-time data visualization with D3.js",
      "Customizable dashboard layouts",
      "Data filtering and date range selection",
      "Export reports as PDF or CSV",
      "User role management",
      "Automated alerts for key metrics",
      "Mobile-responsive design",
    ],
    images: [
      "/paf.png?height=600&width=800",
      "/paf1.png?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Next.js", "TypeScript", "D3.js", "Firebase", "Tailwind"],
    demoLink: "https://paf-spring-boot.vercel.app/",
    codeLink: "https://github.com/harithsenura/PAF-SpringBoot.git",
    featured: true,
    category: "web",
  },
  {
    title: "Social Media Platform",
    description:
      "A full-featured social media platform with real-time messaging, post sharing, and community features.",
    longDescription:
      "A comprehensive social media platform built with modern web technologies. Features include real-time messaging, post creation and sharing, user profiles, friend connections, and community groups.",
    features: [
      "Real-time messaging and notifications",
      "Post creation with media upload",
      "User profiles and friend connections",
      "Community groups and pages",
      "Advanced privacy settings",
      "Content moderation tools",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "AWS"],
    demoLink: "https://hotel-management-system-red.vercel.app/",
    codeLink: "https://github.com/harithsenura/Hotel-Management-System.git",
    featured: false,
    category: "web",
  },
]

const androidProjects = [
  {
    title: "Fitness Tracker",
    description:
      "Android fitness application that tracks workouts, nutrition, and progress with personalized recommendations.",
    longDescription:
      "A comprehensive fitness tracking application built for Android using Kotlin and Jetpack Compose. The app helps users track their workouts, nutrition, and overall fitness progress. It integrates with Google Fit API to provide accurate activity tracking and offers personalized recommendations based on user goals.",
    features: [
      "Workout tracking with custom routines",
      "Nutrition logging and calorie tracking",
      "Progress visualization with charts",
      "Integration with Google Fit API",
      "Personalized workout recommendations",
      "Social sharing and challenges",
      "Offline support with Room Database",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "Google Fit API"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
    category: "android",
  },
  {
    title: "Smart Home Controller",
    description:
      "Android application to control smart home devices with voice commands, automation rules, and energy monitoring.",
    longDescription:
      "A comprehensive smart home control application built for Android using Java and the Android SDK. The app allows users to control all their smart home devices from a single interface, set up automation rules, and monitor energy usage. It supports voice commands and integrates with popular smart home ecosystems.",
    features: [
      "Unified control for multiple smart home devices",
      "Voice command integration",
      "Automation rules and schedules",
      "Energy usage monitoring and reports",
      "Device status notifications",
      "Scene creation for quick environment changes",
      "Secure remote access to home devices",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Java", "Android SDK", "MQTT", "Material Design"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    category: "android",
  },
  {
    title: "Language Learning App",
    description:
      "Interactive language learning application with gamification, speech recognition, and progress tracking.",
    longDescription:
      "An engaging language learning app that makes learning new languages fun and effective. Features include interactive lessons, speech recognition for pronunciation practice, gamification elements, and detailed progress tracking.",
    features: [
      "Interactive lessons and exercises",
      "Speech recognition for pronunciation",
      "Gamification with points and badges",
      "Progress tracking and analytics",
      "Offline lesson downloads",
      "Community features and challenges",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    tags: ["Kotlin", "Android SDK", "ML Kit", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    category: "android",
  },
]

const iosProjects = [
  {
    title: "Recipe Finder",
    description:
      "iOS application that helps users discover recipes based on available ingredients, dietary restrictions, and preferences.",
    longDescription:
      "An intuitive recipe discovery app built for iOS using Swift and SwiftUI. The app allows users to find recipes based on ingredients they already have, dietary restrictions, and taste preferences. It features a clean, modern interface with beautiful food photography and step-by-step cooking instructions.",
    features: [
      "Ingredient-based recipe search",
      "Dietary restriction filters (vegan, gluten-free, etc.)",
      "Personalized recipe recommendations",
      "Favorite recipes and collections",
      "Offline recipe storage",
      "Shopping list generation",
      "Meal planning calendar",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
    category: "ios",
  },
  {
    title: "Travel Planner",
    description:
      "iOS travel planning app with itinerary management, booking integration, and offline maps for travelers.",
    longDescription:
      "A comprehensive travel planning application built for iOS using Swift and UIKit. The app helps travelers plan their trips with detailed itineraries, booking management, and offline maps. It integrates with popular travel services and provides real-time updates on flights, accommodations, and activities.",
    features: [
      "Trip itinerary creation and management",
      "Offline maps and navigation",
      "Flight and hotel booking integration",
      "Real-time travel alerts",
      "Expense tracking in multiple currencies",
      "Photo journal with location tagging",
      "Travel document storage and organization",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Swift", "UIKit", "MapKit", "Core Location"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    category: "ios",
  },
  {
    title: "Meditation & Wellness",
    description: "iOS wellness app with guided meditations, mood tracking, and personalized wellness recommendations.",
    longDescription:
      "A comprehensive wellness application that helps users maintain mental health through guided meditations, mood tracking, and personalized wellness recommendations. Built with modern iOS technologies for a smooth and calming user experience.",
    features: [
      "Guided meditation sessions",
      "Mood tracking and analytics",
      "Personalized wellness recommendations",
      "Sleep stories and sounds",
      "Progress tracking and streaks",
      "Community support features",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    tags: ["Swift", "SwiftUI", "HealthKit", "Core Data"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    category: "ios",
  },
]

type ProjectCategory = "web" | "android" | "ios"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("web")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const getActiveProjects = () => {
    switch (activeCategory) {
      case "web":
        return webProjects.slice(0, 3) // Exactly 3 web projects
      case "android":
        return androidProjects.slice(0, 3) // Exactly 3 android projects
      case "ios":
        return iosProjects.slice(0, 3) // Exactly 3 iOS projects
      default:
        return webProjects.slice(0, 3)
    }
  }

  const handleOpenDetails = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Showcasing my work in web and mobile application development
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveCategory("web")}
              variant={activeCategory === "web" ? "default" : "glass"}
              className="rounded-full px-6 flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Web Projects
            </Button>
            <Button
              onClick={() => setActiveCategory("android")}
              variant={activeCategory === "android" ? "default" : "glass"}
              className="rounded-full px-6 flex items-center gap-2"
            >
              <Android className="h-4 w-4" />
              Android Projects
            </Button>
            <Button
              onClick={() => setActiveCategory("ios")}
              variant={activeCategory === "ios" ? "default" : "glass"}
              className="rounded-full px-6 flex items-center gap-2"
            >
              <Apple className="h-4 w-4" />
              iOS Projects
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid - Optimized for exactly 3 projects */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {getActiveProjects().map((project, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <GlassCard className="group overflow-hidden p-0 h-full flex flex-col" hoverEffect={false}>
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.images?.[0] || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="glass"
                        className="backdrop-blur-md bg-white/20 border border-white/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.demoLink, "_blank")
                        }}
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="glass"
                        className="backdrop-blur-md bg-white/20 border border-white/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.codeLink, "_blank")
                        }}
                      >
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </Button>
                    </div>
                    {project.featured && (
                      <span className="bg-primary/90 text-white text-xs px-2 py-0.5 rounded-full">Featured</span>
                    )}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <GlassyIcon
                      icon={activeCategory === "web" ? Globe : activeCategory === "android" ? Android : Apple}
                      size={14}
                      color={activeCategory === "web" ? "primary" : activeCategory === "android" ? "green" : "blue"}
                      className="p-1.5"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          activeCategory === "web"
                            ? "bg-primary/10 text-primary dark:bg-primary/20"
                            : activeCategory === "android"
                              ? "bg-green-500/10 text-green-600 dark:bg-green-500/20"
                              : "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <Button
                    onClick={() => handleOpenDetails(project)}
                    variant="glass"
                    className="w-full rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/10 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/30 text-sm py-1.5"
                  >
                    <Info className="mr-2 h-3.5 w-3.5" />
                    View Details
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <LiquidGlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </LiquidGlassModal>
    </section>
  )
}
