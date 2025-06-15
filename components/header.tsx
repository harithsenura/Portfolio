"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Smartphone } from "lucide-react"

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
  const [isCoding, setIsCoding] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePhoneClick = () => {
    setIsCoding(true)

    // After coding animation completes, navigate to self section
    setTimeout(() => {
      // Try to find the self section with multiple approaches
      const selfSection =
        document.getElementById("self-app-showcase") ||
        document.querySelector("section[data-section='self']") ||
        document.querySelector(".self-app-showcase") ||
        // Look for the specific SelfAppShowcase component structure
        document.querySelector("section:has(.liquid-glass)") ||
        // Find section containing "Self - Life Planning App" text
        Array.from(document.querySelectorAll("section")).find((section) =>
          section.textContent?.includes("Self - Life Planning App"),
        )

      if (selfSection) {
        selfSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      } else {
        // Fallback: scroll to the bottom part of the page where self section likely is
        const pageHeight = document.documentElement.scrollHeight
        const viewportHeight = window.innerHeight
        window.scrollTo({
          top: pageHeight - viewportHeight * 1.2, // Scroll near bottom
          behavior: "smooth",
        })
      }

      // Reset coding state after navigation
      setTimeout(() => {
        setIsCoding(false)
      }, 1500)
    }, 3500)
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
          <div className="flex items-center gap-3">
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
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-2">
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

            {/* Terminal Window - Mobile Responsive */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                x: typeof window !== "undefined" ? window.innerWidth / 2 - (window.innerWidth < 768 ? 150 : 200) : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 - (window.innerWidth < 768 ? 120 : 150) : 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: typeof window !== "undefined" ? window.innerWidth / 2 - (window.innerWidth < 768 ? 150 : 200) : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 - (window.innerWidth < 768 ? 120 : 150) : 0,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden
                         w-80 h-56 md:w-96 md:h-64
                         max-w-[90vw] max-h-[60vh]"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-3 md:px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-xs md:text-sm ml-2">Terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="p-3 md:p-4 font-mono text-xs md:text-sm text-green-400 h-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <span className="text-blue-400">$</span> npm start
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="mt-1 md:mt-2"
                >
                  <span className="text-gray-400">Starting dev server...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                  className="mt-1"
                >
                  <span className="text-gray-400">Compiling...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className="mt-1"
                >
                  <span className="text-green-400">✓ Compiled successfully!</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.3 }}
                  className="mt-1 md:mt-2"
                >
                  <span className="text-blue-400">$</span> open self-app
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.3 }}
                  className="mt-1"
                >
                  <span className="text-purple-400">→ Navigating to Self...</span>
                </motion.div>

                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-green-400 ml-1"
                />
              </div>
            </motion.div>

            {/* Floating Code Particles - Mobile Optimized */}
            {[...Array(window.innerWidth < 768 ? 8 : 12)].map((_, i) => (
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
                  duration: 2.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="absolute text-blue-400 font-mono text-base md:text-lg"
              >
                {["</", "{", "}", "()", "=>", "[]", "&&", "||"][i % 8]}
              </motion.div>
            ))}

            {/* "Self" Text Animation - Mobile Responsive */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 + (window.innerWidth < 768 ? 80 : 100) : 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 + (window.innerWidth < 768 ? 80 : 100) : 0,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 2.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="text-center px-4">
                <motion.h1
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 40px rgba(139, 92, 246, 1)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4"
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
                  style={{ width: window.innerWidth < 768 ? "80px" : "120px" }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-white/80 mt-3 md:mt-4 text-base md:text-lg"
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
