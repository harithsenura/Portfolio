"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Award, Code, Smartphone, MapPin, Users, TrendingUp, Star, ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { useState } from "react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechInnovate",
    location: "San Francisco, CA",
    period: "2021 - Present",
    duration: "3+ years",
    description: "Leading development of web and mobile applications using React, Node.js, and React Native.",
    achievements: [
      "Led team of 8 developers across 3 major projects",
      "Reduced deployment time by 70% with CI/CD",
      "Increased application performance by 45%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    type: "web",
    featured: true,
    teamSize: "8",
    impact: "45%↑",
  },
  {
    title: "Mobile App Developer",
    company: "AppCraft Studios",
    location: "New York, NY",
    period: "2018 - 2021",
    duration: "3 years",
    description: "Developed native Android and iOS applications for clients in various industries.",
    achievements: [
      "Delivered 15+ mobile applications to production",
      "Achieved 4.8+ average app store rating",
      "Reduced development time by 30%",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    type: "mobile",
    featured: true,
    teamSize: "5",
    impact: "4.8★",
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Inc.",
    location: "Austin, TX",
    period: "2016 - 2018",
    duration: "2 years",
    description: "Built responsive web applications using React and Angular with pixel-perfect designs.",
    achievements: [
      "Improved website loading speed by 60%",
      "Implemented responsive design for 20+ websites",
      "Reduced bounce rate by 35%",
    ],
    technologies: ["React", "Angular", "JavaScript", "SASS"],
    type: "web",
    featured: false,
    teamSize: "4",
    impact: "60%↑",
  },
  {
    title: "Junior Developer",
    company: "CodeWorks",
    location: "Remote",
    period: "2014 - 2016",
    duration: "2 years",
    description: "Worked on web development projects using JavaScript, HTML, and CSS.",
    achievements: [
      "Contributed to 25+ client projects",
      "Learned modern development practices",
      "Built foundation in full-stack development",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"],
    type: "web",
    featured: false,
    teamSize: "3",
    impact: "25+",
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50/50 dark:bg-gray-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-primary/6 to-purple-500/6 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        {/* Experience Section Header */}
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
            <TrendingUp className="h-2.5 w-2.5" />
            <span className="text-xs font-medium">Career Journey</span>
          </motion.div>

          <h2 className="text-xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto text-xs md:text-sm">
            My journey in web and mobile development
          </p>
        </motion.div>

        {/* Mobile Layout - Completely Different Structure */}
        <div className="block md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Mobile Timeline Dot - Left Side */}
                <div className="absolute left-0 top-4 z-10">
                  <motion.div whileHover={{ scale: 1.1 }} className="relative">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        experience.featured
                          ? "border-primary bg-primary shadow-sm shadow-primary/30"
                          : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      } transition-all duration-300`}
                    >
                      {experience.featured && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="absolute -inset-1 rounded-full border border-dashed border-primary/25"
                        />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="absolute -inset-2 flex items-center justify-center">
                      <div
                        className={`p-1 rounded-full ${
                          experience.type === "web" ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {experience.type === "web" ? <Code className="h-2 w-2" /> : <Smartphone className="h-2 w-2" />}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Card - With Proper Spacing */}
                <div className="ml-12 mr-2">
                  <motion.div
                    whileHover={{
                      y: -2,
                      transition: { type: "spring", damping: 25 },
                    }}
                    className="relative"
                  >
                    <GlassCard
                      className={`p-4 transition-all duration-300 cursor-pointer ${
                        hoveredIndex === index ? "shadow-lg shadow-primary/5" : ""
                      }`}
                      onClick={() => toggleCard(index)}
                    >
                      {/* Featured Badge */}
                      {experience.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        >
                          <Star className="h-2 w-2" />
                          <span>Top</span>
                        </motion.div>
                      )}

                      {/* Header */}
                      <div className="mb-3">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight pr-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full shrink-0">
                            <Calendar className="h-2.5 w-2.5 mr-1" />
                            {experience.duration}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center text-primary font-medium text-sm">
                            <Award className="h-3 w-3 mr-1" />
                            {experience.company}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                            <MapPin className="h-2.5 w-2.5 mr-1" />
                            {experience.location}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-sm">
                            <Users className="h-3 w-3 text-primary mr-1" />
                            <span className="text-gray-600 dark:text-gray-400">{experience.teamSize}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                            <span className="text-green-600 font-medium">{experience.impact}</span>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedCards.has(index) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </motion.div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.02 * techIndex }}
                              className={`text-sm px-2 py-1 rounded-full font-medium ${
                                experience.type === "web"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-green-500/10 text-green-600"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {experience.technologies.length > 4 && (
                            <span className="text-sm px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                              +{experience.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable Achievements */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedCards.has(index) ? "auto" : 0,
                          opacity: expandedCards.has(index) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                              >
                                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-purple-500 mt-2 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </GlassCard>
                  </motion.div>
                </div>

                {/* Mobile Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-8 w-px h-16 bg-gradient-to-b from-primary/30 to-primary/10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Layout - Original Structure */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent transform -translate-x-1/2">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4 md:space-y-6"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-row items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-3 z-10">
                  <motion.div whileHover={{ scale: 1.1 }} className="relative">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        experience.featured
                          ? "border-primary bg-primary shadow-sm shadow-primary/30"
                          : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      } transition-all duration-300`}
                    >
                      {experience.featured && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="absolute -inset-1 rounded-full border border-dashed border-primary/25"
                        />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="absolute -inset-2.5 flex items-center justify-center">
                      <div
                        className={`p-1.5 rounded-full ${
                          experience.type === "web" ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {experience.type === "web" ? (
                          <Code className="h-2.5 w-2.5" />
                        ) : (
                          <Smartphone className="h-2.5 w-2.5" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                  <motion.div
                    whileHover={{
                      y: -2,
                      transition: { type: "spring", damping: 25 },
                    }}
                    className="relative"
                  >
                    <GlassCard
                      className={`p-4 transition-all duration-300 cursor-pointer ${
                        hoveredIndex === index ? "shadow-lg shadow-primary/5" : ""
                      }`}
                      onClick={() => toggleCard(index)}
                    >
                      {/* Featured Badge */}
                      {experience.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-primary to-purple-500 text-white px-1.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-0.5"
                        >
                          <Star className="h-1.5 w-1.5" />
                          <span className="text-xs">Top</span>
                        </motion.div>
                      )}

                      {/* Compact Header */}
                      <div className="mb-2">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight pr-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full shrink-0">
                            <Calendar className="h-2 w-2 mr-0.5" />
                            {experience.duration}
                          </div>
                        </div>

                        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 mb-1">
                          <div className="flex items-center text-primary font-medium text-xs">
                            <Award className="h-2.5 w-2.5 mr-1" />
                            {experience.company}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs">
                            <MapPin className="h-2 w-2 mr-0.5" />
                            {experience.location}
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 dark:text-gray-400">{experience.period}</div>
                      </div>

                      {/* Compact Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-2 text-xs leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Inline Stats */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-xs">
                            <Users className="h-2.5 w-2.5 text-primary mr-1" />
                            <span className="text-gray-600 dark:text-gray-400">{experience.teamSize}</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <TrendingUp className="h-2.5 w-2.5 text-green-500 mr-1" />
                            <span className="text-green-600 font-medium">{experience.impact}</span>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedCards.has(index) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-3 w-3 text-gray-400" />
                        </motion.div>
                      </div>

                      {/* Technologies - Always Visible */}
                      <div className="mb-2">
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.02 * techIndex }}
                              className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                                experience.type === "web"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-green-500/10 text-green-600"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {experience.technologies.length > 3 && (
                            <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                              +{experience.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable Achievements */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedCards.has(index) ? "auto" : 0,
                          opacity: expandedCards.has(index) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5 flex items-center">
                            <TrendingUp className="h-2.5 w-2.5 mr-1 text-green-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start text-xs text-gray-600 dark:text-gray-300"
                              >
                                <div className="w-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 mt-1.5 mr-1.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </GlassCard>

                    {/* Connecting Line */}
                    <div
                      className={`absolute top-4 ${
                        index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                      } w-8 h-px bg-gradient-to-r ${
                        index % 2 === 0 ? "from-transparent to-primary/15" : "from-primary/15 to-transparent"
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 shadow-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 animate-ping opacity-75" />
            </div>
          </motion.div>
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/6 to-purple-500/6 border border-primary/10 text-xs">
            <span className="text-gray-700 dark:text-gray-300">Ready to discuss your project?</span>
            <motion.div animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
