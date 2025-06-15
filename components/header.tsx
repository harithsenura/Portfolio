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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            >
              DevSecOps
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Apple Icon */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  const selfSection = document.getElementById("self-app-showcase")
                  if (selfSection) {
                    selfSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="relative rounded-full p-3 overflow-hidden group"
                aria-label="View Self App"
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                        y: [0, -4, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-2 -left-2 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                    />
                    <motion.div
                      animate={{
                        x: [0, -6, 0],
                        y: [0, 6, 0],
                        scale: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute -bottom-2 -right-2 w-5 h-5 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                    />
                  </div>
                </div>
                <Apple className="relative z-10 h-5 w-5 text-primary" />
              </Button>
            </motion.div>
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
            onClick={() => {
              const selfSection = document.getElementById("self-app-showcase")
              if (selfSection) {
                selfSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="relative rounded-full p-3 overflow-hidden group"
            aria-label="View Self App"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -4, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -left-2 w-6 h-6 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
                />
              </div>
            </div>
            <Apple className="relative z-10 h-5 w-5 text-primary" />
          </Button>
        </motion.div>

        {/* Menu Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full p-3 overflow-hidden group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/20 rounded-full transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -5, 0],
                  y: [0, 5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-white/5 dark:bg-gray-700/10 rounded-full blur-sm"
              />
            </div>
          </div>
          <div className="relative z-10">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
        </Button>
      </div>

      {/* Mobile Menu - Liquid Glass Box */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                duration: 0.4,
              }}
              className="md:hidden fixed top-20 right-4 z-50 w-64"
            >
              {/* Liquid Glass Container */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-gray-900/30 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                {/* Animated liquid blobs */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -15, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 dark:bg-gray-700/10 rounded-full blur-2xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -25, 0],
                      y: [0, 20, 0],
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 3,
                    }}
                    className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/5 dark:bg-gray-700/10 rounded-full blur-2xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 6,
                    }}
                    className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/5 dark:bg-gray-700/10 rounded-full blur-xl"
                  />
                </div>

                {/* Menu Content */}
                <div className="relative z-10 p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-300 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/20 backdrop-blur-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="block"
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative bottom element */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
