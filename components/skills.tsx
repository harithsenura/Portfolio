"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Globe,
  Server,
  Database,
  Layers,
  Smartphone,
  Palette,
  Apple,
  SmartphoneIcon as Android,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { GlassyIcon } from "@/components/ui/glassy-icon"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const webDevelopmentSkills = [
  {
    category: "Frontend Development",
    icon: Globe,
    color: "primary",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "primary",
    items: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    color: "primary",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    icon: Layers,
    color: "primary",
    items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
  },
]

const mobileDevelopmentSkills = [
  {
    category: "Android Development",
    icon: Android,
    color: "green",
    items: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Firebase"],
  },
  {
    category: "iOS Development",
    icon: Apple,
    color: "blue",
    items: ["Swift", "SwiftUI", "UIKit", "Core Data", "XCode"],
  },
  {
    category: "Cross-Platform",
    icon: Smartphone,
    color: "purple",
    items: ["React Native", "Flutter", "Expo", "Capacitor", "Ionic"],
  },
  {
    category: "Mobile UI/UX",
    icon: Palette,
    color: "orange",
    items: ["Material Design", "iOS Design", "Figma", "Prototyping", "Animation"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const currentSkills = activeTab === "web" ? webDevelopmentSkills : mobileDevelopmentSkills

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % currentSkills.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + currentSkills.length) % currentSkills.length)
  }

  const goToCard = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized skills in web and mobile application development
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="expertise-tab-container">
            <button
              onClick={() => setActiveTab("web")}
              className={`expertise-tab ${activeTab === "web" ? "expertise-tab-active" : ""}`}
            >
              <Globe className="h-5 w-5 mr-2" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`expertise-tab ${activeTab === "mobile" ? "expertise-tab-active" : ""}`}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Mobile Development
            </button>
            <div
              className="expertise-tab-indicator"
              style={{
                transform: activeTab === "web" ? "translateX(0)" : "translateX(100%)",
              }}
            />
          </div>
        </div>

        {/* Desktop Grid View */}
        {!isMobile && (
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="expertise-card">
                  <div className="expertise-card-blob"></div>
                  <div className="expertise-card-content">
                    <div className="flex items-center mb-4">
                      <GlassyIcon icon={skill.icon} color={skill.color as any} />
                      <h3 className="text-lg font-semibold ml-3">{skill.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          <div className="expertise-bullet"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-6">
              <Button
                variant="glass"
                size="icon"
                onClick={prevCard}
                className="rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/10 dark:border-gray-700/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentIndex + 1} of {currentSkills.length}
                </span>
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={nextCard}
                className="rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/10 dark:border-gray-700/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipeThreshold = 50
                  const swipeVelocityThreshold = 500

                  if (offset.x > swipeThreshold || velocity.x > swipeVelocityThreshold) {
                    prevCard()
                  } else if (offset.x < -swipeThreshold || velocity.x < -swipeVelocityThreshold) {
                    nextCard()
                  }
                }}
              >
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="expertise-card h-full">
                      <div className="expertise-card-blob"></div>
                      <div className="expertise-card-content">
                        <div className="flex items-center mb-4">
                          <GlassyIcon icon={skill.icon} color={skill.color as any} />
                          <h3 className="text-lg font-semibold ml-3">{skill.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {skill.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="flex items-center text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * itemIndex }}
                            >
                              <div className="expertise-bullet"></div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {currentSkills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: 3 }}
              className="text-center mt-4"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">👆 Swipe left or right to navigate</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
