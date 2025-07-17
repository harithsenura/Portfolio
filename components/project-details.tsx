"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedTechIcon } from "@/components/ui/animated-tech-icon"

// Technology icons mapping
const techIcons = {
  React: "/react.png?height=40&width=40",
  "Next.js": "/placeholder.svg?height=40&width=40",
  TypeScript: "/placeholder.svg?height=40&width=40",
  JavaScript: "/placeholder.svg?height=40&width=40",
  Node: "/placeholder.svg?height=40&width=40",
  MongoDB: "/placeholder.svg?height=40&width=40",
  Firebase: "/placeholder.svg?height=40&width=40",
  Redux: "/placeholder.svg?height=40&width=40",
  "D3.js": "/placeholder.svg?height=40&width=40",
  Tailwind: "/placeholder.svg?height=40&width=40",
  Kotlin: "/placeholder.svg?height=40&width=40",
  Java: "/placeholder.svg?height=40&width=40",
  "Jetpack Compose": "/placeholder.svg?height=40&width=40",
  "Android SDK": "/placeholder.svg?height=40&width=40",
  Swift: "/placeholder.svg?height=40&width=40",
  SwiftUI: "/placeholder.svg?height=40&width=40",
  UIKit: "/placeholder.svg?height=40&width=40",
  "Core Data": "/placeholder.svg?height=40&width=40",
  Stripe: "/placeholder.svg?height=40&width=40",
  "Material Design": "/placeholder.svg?height=40&width=40",
  "Room DB": "/placeholder.svg?height=40&width=40",
  "Google Fit API": "/placeholder.svg?height=40&width=40",
  MQTT: "/placeholder.svg?height=40&width=40",
  CloudKit: "/placeholder.svg?height=40&width=40",
  MapKit: "/placeholder.svg?height=40&width=40",
  "Core Location": "/placeholder.svg?height=40&width=40",
}

// Technology colors mapping
const techColors = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Node: "#339933",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Redux: "#764ABC",
  "D3.js": "#F9A03C",
  Tailwind: "#06B6D4",
  Kotlin: "#7F52FF",
  Java: "#007396",
  "Jetpack Compose": "#4285F4",
  "Android SDK": "#3DDC84",
  Swift: "#FA7343",
  SwiftUI: "#FF2D55",
  UIKit: "#2396F3",
  "Core Data": "#5AC8FA",
  Stripe: "#008CDD",
  "Material Design": "#757575",
  "Room DB": "#4CAF50",
  "Google Fit API": "#EA4335",
  MQTT: "#660066",
  CloudKit: "#999999",
  MapKit: "#5856D6",
  "Core Location": "#34AADC",
}

interface ProjectDetailsProps {
  project: {
    title: string
    description: string
    longDescription?: string
    features?: string[]
    images?: string[]
    tags: string[]
    demoLink: string
    codeLink: string
    category?: "web" | "android" | "ios"
  }
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Default images if none provided
  const images = project.images || [
    `/placeholder.svg?height=600&width=800&query=${project.title} screenshot 1`,
    `/placeholder.svg?height=600&width=800&query=${project.title} screenshot 2`,
    `/placeholder.svg?height=600&width=800&query=${project.title} screenshot 3`,
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="flex flex-col">
      {/* Project Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
      >
        {project.title}
      </motion.h2>

      {/* Image Gallery */}
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <div className="aspect-video relative">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-3">About this project</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.longDescription || project.description}</p>

        {/* Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {project.tags.map((tech, index) => (
            <AnimatedTechIcon
              key={index}
              name={tech}
              icon={techIcons[tech as keyof typeof techIcons] || "/placeholder.svg?height=40&width=40"}
              color={techColors[tech as keyof typeof techColors] || "#6366F1"}
            />
          ))}
        </div>
      </motion.div>

      {/* Project Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        <Button className="rounded-full px-6 flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
          <ExternalLink className="h-4 w-4" />
          View Live Demo
        </Button>
        <Button variant="glass" className="rounded-full px-6 flex items-center gap-2">
          <Github className="h-4 w-4" />
          View Source Code
        </Button>
      </motion.div>
    </div>
  )
}
