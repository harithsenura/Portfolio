"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Smartphone } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isFlying, setIsFlying] = useState(false)
  const [isCoding, setIsCoding] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSelfAppClick = () => {
    setIsFlying(true)

    // After animation completes, navigate to self section
    setTimeout(() => {
      const selfSection = document.getElementById("self-app-showcase")
      if (selfSection) {
        selfSection.scrollIntoView({ behavior: "smooth" })
      }
      // Reset flying state after navigation
      setTimeout(() => {
        setIsFlying(false)
      }, 1500)
    }, 4500) // Slower animation duration
  }

  const handlePhoneClick = () => {
    setIsCoding(true)

    // After coding animation completes, navigate to self section
    setTimeout(() => {
      const selfSection = document.getElementById("self-app-showcase")
      if (selfSection) {
        selfSection.scrollIntoView({ behavior: "smooth" })
      }
      // Reset coding state after navigation
      setTimeout(() => {
        setIsCoding(false)
      }, 1500)
    }, 4000) // Coding animation duration
  }

  return (
    <>
      {/* Desktop Header - App Icons */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={`hidden md:block fixed top-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4">
            {/* Self App Icon */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSelfAppClick}
                className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
                aria-label="View Self App"
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                        y: [0, -4, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-2 -left-2 w-8 h-8 bg-primary/10 rounded-full blur-sm"
                    />
                  </div>
                </div>
                <div className="relative z-10 w-6 h-6">
                  <Image
                    src="/images/self-app-icon.png"
                    alt="Self App Icon"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Button>
            </motion.div>

            {/* Phone/Coding Icon */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePhoneClick}
                className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
                aria-label="Coding Animation"
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        x: [0, -6, 0],
                        y: [0, 6, 0],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500/10 rounded-full blur-sm"
                    />
                  </div>
                </div>
                <Smartphone className="relative z-10 h-6 w-6 text-blue-500" />
              </Button>
            </motion.div>

            {/* Menu Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    animate={{
                      x: [0, -4, 0],
                      y: [0, 4, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 4,
                    }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                  />
                </div>
              </div>
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </div>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fixed Icons */}
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-3">
        {/* Self App Icon */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSelfAppClick}
            className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
            aria-label="View Self App"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -4, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -left-2 w-8 h-8 bg-primary/10 rounded-full blur-sm"
                />
              </div>
            </div>
            <div className="relative z-10 w-6 h-6">
              <Image
                src="/images/self-app-icon.png"
                alt="Self App Icon"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
          </Button>
        </motion.div>

        {/* Phone/Coding Icon */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePhoneClick}
            className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
            aria-label="Coding Animation"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, -6, 0],
                    y: [0, 6, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500/10 rounded-full blur-sm"
                />
              </div>
            </div>
            <Smartphone className="relative z-10 h-6 w-6 text-blue-500" />
          </Button>
        </motion.div>

        {/* Menu Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -4, 0],
                  y: [0, 4, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 4,
                }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
              />
            </div>
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </div>
        </Button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Dropdown */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: -10,
                transformOrigin: "top right",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transformOrigin: "top right",
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -10,
                transformOrigin: "top right",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                mass: 0.8,
                duration: 0.4,
              }}
              className="fixed top-20 md:top-24 right-4 md:right-6 z-50 w-64"
            >
              {/* Liquid Glass Container */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/40 dark:bg-gray-900/60 border border-white/50 dark:border-gray-700/50 shadow-2xl">
                {/* Smooth animated liquid blobs */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-white/10 to-primary/5 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -12, 0],
                      y: [0, 12, 0],
                      scale: [1, 0.95, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 3,
                    }}
                    className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-500/10 to-white/5 rounded-full blur-xl"
                  />
                </div>

                {/* Menu Content */}
                <div className="relative z-10 p-3">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <motion.span
                            className="block"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative bottom gradient */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ultra Smooth Flying Self App Icon Animation */}
      <AnimatePresence>
        {isFlying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            {/* Gradual Background Blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(0,0,0,0.15)" }}
              exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            />

            {/* Ultra Smooth Flying Self App Icon */}
            <motion.div
              initial={{
                x: typeof window !== "undefined" ? window.innerWidth - 100 : 0,
                y: 50,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                rotateZ: 0,
                filter: "blur(0px)",
              }}
              animate={{
                x: typeof window !== "undefined" ? window.innerWidth / 2 - 60 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 - 60 : 0,
                scale: [1, 1.8, 2.2, 2.8, 1.5],
                rotateY: [0, 120, 240, 360, 480],
                rotateX: [0, 15, -10, 12, 0],
                rotateZ: [0, 25, -20, 30, 0],
                filter: ["blur(0px)", "blur(1px)", "blur(3px)", "blur(1px)", "blur(0px)"],
              }}
              transition={{
                duration: 4.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              className="absolute w-24 h-24 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gentle Glowing Ring Effect */}
              <motion.div
                animate={{
                  scale: [1, 2.5, 4, 6, 8],
                  opacity: [0.7, 0.5, 0.3, 0.15, 0],
                }}
                transition={{
                  duration: 4.5,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-2xl"
              />

              {/* Icon Container with Smooth 3D Effect */}
              <motion.div
                animate={{
                  rotateY: [0, 240, 480, 720],
                  rotateX: [0, 120, 240, 360],
                  scale: [1, 1.2, 1.1, 1.3, 1],
                }}
                transition={{
                  duration: 4.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative z-10 w-12 h-12">
                  <Image
                    src="/images/self-app-icon.png"
                    alt="Self App Icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Smooth Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{
                delay: 2.5,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-lg">
                <p className="text-white font-medium text-lg">Opening Self App...</p>
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                  className="mt-2 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coding Animation */}
      <AnimatePresence>
        {isCoding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            {/* Background Blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(0,0,0,0.3)" }}
              exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            />

            {/* Terminal Window */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                x: typeof window !== "undefined" ? window.innerWidth / 2 - 200 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 - 150 : 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: typeof window !== "undefined" ? window.innerWidth / 2 - 200 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 - 150 : 0,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute w-96 h-64 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm ml-2">Terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm text-green-400 h-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <span className="text-blue-400">$</span> npm start
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="mt-2"
                >
                  <span className="text-gray-400">Starting development server...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className="mt-1"
                >
                  <span className="text-gray-400">Compiling...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.3 }}
                  className="mt-1"
                >
                  <span className="text-green-400">✓ Compiled successfully!</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.3 }}
                  className="mt-2"
                >
                  <span className="text-blue-400">$</span> open self-app
                </motion.div>

                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-2 h-4 bg-green-400 ml-1"
                />
              </div>
            </motion.div>

            {/* Floating Code Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
                  y: typeof window !== "undefined" ? window.innerHeight + 50 : 0,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: typeof window !== "undefined" ? -50 : 0,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                className="absolute text-blue-400 font-mono text-lg"
              >
                {["</", "{", "}", "()", "=>", "[]", "&&", "||"][i % 8]}
              </motion.div>
            ))}

            {/* "Self" Text Animation */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 + 100 : 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 + 100 : 0,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="text-center">
                <motion.h1
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 40px rgba(139, 92, 246, 1)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-6xl font-bold text-white mb-4"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Self
                </motion.h1>

                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto"
                  style={{ width: "120px" }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-white/80 mt-4 text-lg"
                >
                  Loading Self App...
                </motion.p>
              </div>
            </motion.div>

            {/* Matrix-style Code Rain */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                initial={{
                  x: typeof window !== "undefined" ? (i * window.innerWidth) / 8 : 0,
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: typeof window !== "undefined" ? window.innerHeight + 100 : 0,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  ease: "linear",
                  repeat: 1,
                }}
                className="absolute text-green-400 font-mono text-xs opacity-30"
              >
                {Array.from({ length: 20 }, (_, j) => (
                  <div key={j} className="mb-1">
                    {Math.random().toString(36).substring(2, 8)}
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
