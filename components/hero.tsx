"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Globe, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  // Function to handle smooth scrolling to the bottom
  const scrollToBottom = () => {
    // Get the contact section of the page
    const contactSection = document.getElementById("contact")

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If contact section doesn't exist, scroll to the bottom of the page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Header />

      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Added pt-24 to create more space between navigation and hero content */}
      <div className="container mx-auto px-4 py-20 pt-24 md:pt-28 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mb-6 relative mx-auto"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl relative mx-auto">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Your Name"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30">
                <Globe className="h-5 w-5 text-primary" />
                <span>Web Development</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30">
                <Smartphone className="h-5 w-5 text-purple-500" />
                <span>Mobile Development</span>
              </div>
            </motion.div>
          </div>

          {/* Your Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Your Name
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            <span className="text-primary">
              <TypeAnimation
                sequence={["Web Developer", 2000, "Mobile Developer", 2000, "Software Engineer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Crafting cutting-edge software solutions for web and mobile platforms. Specializing in responsive web
            applications and native mobile experiences for Android and iOS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="rounded-full px-8 backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border border-white/10 dark:border-gray-700/30"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Down Button - Now positioned below the Contact Me button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex justify-center"
            onClick={scrollToBottom}
            style={{ cursor: "pointer" }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
              <div className="flex flex-col items-center">
                <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2 mb-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"
                  />
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
