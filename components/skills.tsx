"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Server, Database, Layers, Smartphone, Palette, Apple, SmartphoneIcon as Android } from "lucide-react"
import { GlassyIcon } from "@/components/ui/glassy-icon"
import { useState } from "react"

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

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {(activeTab === "web" ? webDevelopmentSkills : mobileDevelopmentSkills).map((skill, index) => (
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
      </div>
    </section>
  )
}
