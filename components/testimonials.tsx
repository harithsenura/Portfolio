"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Quote, Globe, Smartphone } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassyIcon } from "@/components/ui/glassy-icon"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechInnovate",
    content:
      "Working with this developer was a game-changer for our web platform. Their deep understanding of both frontend and backend technologies helped us build a robust system that our users love.",
    image: "/placeholder.svg?height=100&width=100",
    type: "web",
  },
  {
    name: "Michael Chen",
    role: "Founder, AppLaunch",
    content:
      "I've worked with many mobile developers, but few understand both Android and iOS development like this expert. They delivered a beautiful application that works flawlessly across all devices.",
    image: "/placeholder.svg?height=100&width=100",
    type: "mobile",
  },
  {
    name: "Jessica Williams",
    role: "Product Manager, DigitalSolutions",
    content:
      "The attention to detail in both the web and mobile versions of our application was impressive. Our product not only looks modern and professional but has received excellent user feedback.",
    image: "/placeholder.svg?height=100&width=100",
    type: "both",
  },
]

export default function Testimonials() {
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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What clients say about my work and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} transition={{ duration: 0.5 }}>
              <GlassCard className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-10 w-10 text-primary/20" />
                  {testimonial.type === "web" ? (
                    <GlassyIcon icon={Globe} size={16} color="primary" className="p-2" />
                  ) : testimonial.type === "mobile" ? (
                    <GlassyIcon icon={Smartphone} size={16} color="purple" className="p-2" />
                  ) : (
                    <div className="flex">
                      <GlassyIcon icon={Globe} size={16} color="primary" className="p-2 mr-2" />
                      <GlassyIcon icon={Smartphone} size={16} color="purple" className="p-2" />
                    </div>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
