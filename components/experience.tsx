"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Award, Code, Smartphone } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechInnovate",
    period: "2021 - Present",
    description:
      "Leading development of web and mobile applications using React, Node.js, and React Native. Implemented CI/CD pipelines and mentored junior developers.",
    type: "web",
  },
  {
    title: "Mobile App Developer",
    company: "AppCraft Studios",
    period: "2018 - 2021",
    description:
      "Developed native Android and iOS applications for clients in various industries. Created cross-platform solutions using React Native and Flutter.",
    type: "mobile",
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Inc.",
    period: "2016 - 2018",
    description:
      "Built responsive web applications using React and Angular. Collaborated with designers to implement pixel-perfect UI/UX designs and optimize performance.",
    type: "web",
  },
  {
    title: "Junior Developer",
    company: "CodeWorks",
    period: "2014 - 2016",
    description:
      "Worked on web development projects using JavaScript, HTML, and CSS. Assisted in building and maintaining client websites and web applications.",
    type: "web",
  },
]

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in web and mobile application development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3.5 top-7 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500/30"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 bg-gradient-to-br from-primary to-purple-500 rounded-full p-2 shadow-lg">
                {experience.type === "web" ? (
                  <Code className="h-4 w-4 text-white" />
                ) : (
                  <Smartphone className="h-4 w-4 text-white" />
                )}
              </div>

              <GlassCard className="p-6">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Award className="h-4 w-4 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{experience.company}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
