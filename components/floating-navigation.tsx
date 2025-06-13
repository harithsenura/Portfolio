"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Code, Briefcase, Mail, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function FloatingNavigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Navigation visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Completely hide when scrolling down
      } else {
        setIsVisible(true) // Show when scrolling up
      }

      setScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6,
        }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="floating-nav-container">
          {/* Animated Background Blobs */}
          <div className="floating-nav-blob floating-nav-blob-1" />
          <div className="floating-nav-blob floating-nav-blob-2" />
          <div className="floating-nav-blob floating-nav-blob-3" />

          {/* Navigation Content */}
          <div className="floating-nav-content">
            {/* Logo/Brand */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="floating-nav-logo">
              <Link href="/" className="flex items-center gap-2">
                <div className="floating-nav-logo-icon">
                  <Code className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <div className="floating-nav-links">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "floating-nav-link",
                      activeSection === item.href.substring(1) && "floating-nav-link-active",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>

                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="floating-nav-active-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="floating-nav-theme">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6,
        }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="floating-nav-mobile">
          {/* Mobile Background Blobs */}
          <div className="floating-nav-blob floating-nav-blob-1" />
          <div className="floating-nav-blob floating-nav-blob-2" />

          <div className="floating-nav-mobile-content">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center gap-2">
                <div className="floating-nav-logo-icon">
                  <Code className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </Link>
            </motion.div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ThemeToggle />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="floating-nav-menu-button"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="floating-nav-mobile-menu">
              {/* Background Blobs */}
              <div className="floating-nav-blob floating-nav-blob-1" />
              <div className="floating-nav-blob floating-nav-blob-2" />

              <div className="floating-nav-mobile-menu-content">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "floating-nav-mobile-link",
                      activeSection === item.href.substring(1) && "floating-nav-mobile-link-active",
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>

                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="floating-nav-mobile-active-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
