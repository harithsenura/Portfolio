"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Apple } from "lucide-react"

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAppleIconClick = () => {
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
      }, 1000)
    }, 2000) // Animation duration
  }

  return (
    <>
      {/* Desktop Header - Only Icons */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={`hidden md:block fixed top-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4">
            {/* Desktop Apple Icon - Larger */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleAppleIconClick}
                className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
                aria-label="View Self App"
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-2 -left-2 w-8 h-8 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                    />
                    <motion.div
                      animate={{
                        x: [0, -8, 0],
                        y: [0, 8, 0],
                        scale: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                    />
                  </div>
                </div>
                <Apple className="relative z-10 h-6 w-6 text-primary" />
              </Button>
            </motion.div>

            {/* Desktop Menu Icon - Larger */}
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
                      x: [0, -6, 0],
                      y: [0, 6, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                  />
                </div>
              </div>
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </div>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fixed Icons - Always Visible */}
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-3">
        {/* Apple Icon */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAppleIconClick}
            className="relative rounded-full p-4 overflow-hidden group w-14 h-14"
            aria-label="View Self App"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -left-2 w-8 h-8 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                />
              </div>
            </div>
            <Apple className="relative z-10 h-6 w-6 text-primary" />
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
                  x: [0, -6, 0],
                  y: [0, 6, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
              />
            </div>
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </div>
        </Button>
      </div>

      {/* Dropdown Menu - Both Mobile and Desktop */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
                damping: 25,
                stiffness: 400,
                mass: 0.8,
                duration: 0.3,
              }}
              className="fixed top-20 md:top-24 right-4 md:right-6 z-50 w-64"
            >
              {/* Liquid Glass Container */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/40 dark:bg-gray-900/60 border border-white/50 dark:border-gray-700/50 shadow-2xl">
                {/* Smooth animated liquid blobs */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-white/10 to-primary/5 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      y: [0, 15, 0],
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-500/10 to-white/5 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 4,
                    }}
                    className="absolute top-1/2 right-1/4 w-6 h-6 bg-gradient-to-br from-primary/8 to-white/8 rounded-full blur-lg"
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
                          delay: index * 0.03,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-200 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 group"
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
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mt-3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Flying Apple Icon Animation */}
      <AnimatePresence>
        {isFlying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            {/* Animated Background Blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black/10"
            />

            {/* Flying Apple Icon */}
            <motion.div
              initial={{
                x: window.innerWidth - 100,
                y: 50,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              animate={{
                x: window.innerWidth / 2 - 50,
                y: window.innerHeight / 2 - 50,
                scale: [1, 2, 1.5, 3, 1],
                rotateY: [0, 180, 360, 540, 720],
                rotateX: [0, 15, -15, 10, 0],
                rotateZ: [0, 45, -45, 90, 0],
                filter: ["blur(0px)", "blur(2px)", "blur(4px)", "blur(2px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.3, 0.5, 0.8, 1],
              }}
              className="absolute w-20 h-20 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glowing Ring Effect */}
              <motion.div
                animate={{
                  scale: [1, 2, 3, 4, 5],
                  opacity: [0.8, 0.6, 0.4, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-xl"
              />

              {/* Multiple Ring Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 2, 2.5, 3],
                  opacity: [0.6, 0.4, 0.3, 0.1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
              />

              {/* Icon Container with 3D Effect */}
              <motion.div
                animate={{
                  rotateY: [0, 360, 720],
                  rotateX: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Depth Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 to-white/40 rounded-2xl" />

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: [-100, 100, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 rounded-2xl"
                />

                {/* Apple Icon */}
                <Apple className="relative z-10 h-8 w-8 text-primary drop-shadow-lg" />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, -80],
                      x: [0, Math.sin(i) * 30, Math.sin(i) * 60],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    style={{
                      top: `${50 + Math.sin(i * 45) * 20}%`,
                      left: `${50 + Math.cos(i * 45) * 20}%`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Trail Effect */}
              <motion.div
                animate={{
                  scale: [0, 1, 2],
                  opacity: [0.8, 0.4, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Ripple Effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  opacity: 0.6,
                  x: window.innerWidth / 2 - 25,
                  y: window.innerHeight / 2 - 25,
                }}
                animate={{
                  scale: [0, 4, 8],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
                className="absolute w-12 h-12 border-2 border-primary/30 rounded-full"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
