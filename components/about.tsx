"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Code, Smartphone, Globe } from "lucide-react"
import { GlassyIcon } from "@/components/ui/glassy-icon"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative and user-friendly applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/ab1.png?height=600&width=600"
                alt="Professional Portrait"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Software Engineer & Developer
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With over 8 years of experience in software development, I specialize in building responsive web
              applications and native mobile apps for Android and iOS platforms.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My approach combines modern development practices with user-centered design, ensuring that applications
              are not only functional but also intuitive and enjoyable to use.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <GlassyIcon icon={Globe} size={20} color="primary" className="p-2" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassyIcon icon={Smartphone} size={20} color="purple" className="p-2" />
                <span>Mobile Development</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassyIcon icon={Code} size={20} color="blue" className="p-2" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassyIcon icon={Globe} size={20} color="green" className="p-2" />
                <span>Backend Development</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
