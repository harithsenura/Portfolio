"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Play,
  RefreshCw,
  Copy,
  Check,
  Laptop,
  Server,
  Database,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassyIcon } from "@/components/ui/glassy-icon"
import { useTheme } from "next-themes"
import { AnimatePresence } from "framer-motion"

// Sample code snippets
const codeSnippets = [
  {
    name: "React Component",
    language: "jsx",
    icon: Laptop,
    color: "primary",
    code: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function InsideGames022() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    
    // Keep animation visible longer
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="inside-games-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="welcome-text"
      >
        Inside Games 022
      </motion.h1>
      
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="description-text"
      >
        Your Ultimate Gaming Destination
      </motion.p>
      
      <motion.div
        className="animated-underline"
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ delay: 1.3, duration: 0.8 }}
      />
      
      <motion.div
        className="gaming-icons"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="icon-grid">
          <div className="game-icon">🎮</div>
          <div className="game-icon">🕹️</div>
          <div className="game-icon">🎯</div>
          <div className="game-icon">🏆</div>
        </div>
      </motion.div>
      
      <motion.button
        className="visit-website-btn"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🌐 Visit Website
      </motion.button>
    </motion.div>
  );
}

export default InsideGames022;`,
    output: "inside-games-animation",
    description:
      "An animated showcase component for Inside Games 022 website. Features smooth text animations, gaming icons, and an interactive visit website button. Built with React and Framer Motion for engaging user experience.",
  },
  {
    name: "API Endpoint",
    language: "javascript",
    icon: Server,
    color: "blue",
    code: `// Illustrator Art LK API Endpoint
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const artistId = searchParams.get('artistId');

  try {
    // Fetch art portfolio data
    const portfolioData = await fetchArtPortfolio(category);
    
    // Get featured artists
    const featuredArtists = await fetchFeaturedArtists();
    
    // Get art categories and services
    const services = await fetchArtServices();
    
    // Get client testimonials
    const testimonials = await fetchClientTestimonials();
    
    // Return comprehensive art platform data
    return Response.json({
      portfolio: portfolioData,
      artists: featuredArtists,
      services,
      testimonials,
      categories: ['Logo Design', 'Illustrations', 'Branding', 'Digital Art'],
      status: 'success'
    });
  } catch (error) {
    console.error('Art API Error:', error);
    return Response.json(
      { error: 'Failed to fetch art portfolio data', status: 'error' },
      { status: 500 }
    );
  }
}

// Helper functions for art platform
async function fetchArtPortfolio(category) {
  return {
    totalArtworks: 250,
    categories: ['Logo Design', 'Illustrations', 'Branding', 'Digital Art'],
    recentWorks: [
      { id: 'art1', title: 'Modern Logo Design', category: 'Logo', artist: 'Harith' },
      { id: 'art2', title: 'Character Illustration', category: 'Illustration', artist: 'Harith' },
      { id: 'art3', title: 'Brand Identity Package', category: 'Branding', artist: 'Harith' }
    ]
  };
}

async function fetchFeaturedArtists() {
  return [
    { id: 'artist1', name: 'Harith', specialty: 'Digital Illustrations', rating: 4.9 },
    { id: 'artist2', name: 'Creative Team', specialty: 'Logo Design', rating: 4.8 },
    { id: 'artist3', name: 'Brand Studio', specialty: 'Brand Identity', rating: 4.9 }
  ];
}

async function fetchArtServices() {
  return [
    { service: 'Logo Design', price: 'Starting from $50', duration: '3-5 days' },
    { service: 'Illustrations', price: 'Starting from $80', duration: '5-7 days' },
    { service: 'Branding Package', price: 'Starting from $200', duration: '1-2 weeks' },
    { service: 'Digital Art', price: 'Starting from $60', duration: '3-6 days' }
  ];
}

async function fetchClientTestimonials() {
  return [
    { client: 'Tech Startup', rating: 5, review: 'Amazing logo design and branding work!' },
    { client: 'Local Business', rating: 5, review: 'Professional illustrations exceeded expectations' }
  ];
}`,
    output: "illustrator-art-showcase",
    description:
      "A comprehensive API endpoint for Illustrator Art LK platform that fetches art portfolio data, featured artists, services, and client testimonials. Demonstrates structured data handling for creative services platform.",
  },
  {
    name: "Database Query",
    language: "javascript",
    icon: Database,
    color: "green",
    code: `// Prisma database query
async function getUserWithPosts(userId) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      posts: {
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        include: {
          categories: true,
          comments: true,
        },
      },
      profile: true,
    },
  });

  return user;
}`,
    output: "User data with related posts, categories, and comments",
    description:
      "A Prisma database query that retrieves a user along with their published posts, post categories, and comments. The query demonstrates relational data fetching, filtering, and sorting capabilities.",
  },
  {
    name: "CSS Animation",
    language: "css",
    icon: Laptop,
    color: "purple",
    code: `/* Glassy card animation */
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    top: -100%;
    left: -100%;
  }
  100% {
    top: 100%;
    left: 100%;
  }
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(31, 38, 135, 0.2);
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .glass-card {
    background: rgba(17, 25, 40, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
}`,
    output: "Animated glassy card with hover effects and shine animation",
    description:
      "CSS code for creating a beautiful glassy card with hover effects and a subtle shine animation. Includes responsive design and dark mode support.",
  },
]

// Function to add basic syntax highlighting with regex
function highlightCode(code: string, language: string) {
  // Escape HTML
  let highlighted = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

  // Add highlighting based on language
  if (language === "jsx" || language === "javascript") {
    // Keywords
    highlighted = highlighted.replace(
      /\b(const|let|var|function|return|import|export|from|async|await|if|else|try|catch|for|while|class|extends|new|this)\b/g,
      '<span style="color: #c678dd;">$1</span>',
    )

    // Strings
    highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span style="color: #98c379;">$1$2$1</span>')

    // Comments
    highlighted = highlighted.replace(/(\/\/.*)/g, '<span style="color: #7f848e;">$1</span>')

    // Function calls
    highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g, '<span style="color: #61afef;">$1</span>(')
  } else if (language === "css") {
    // CSS properties
    highlighted = highlighted.replace(/([\w-]+):/g, '<span style="color: #e06c75;">$1</span>:')

    // CSS values
    highlighted = highlighted.replace(/: (.*?);/g, ': <span style="color: #98c379;">$1</span>;')

    // CSS selectors
    highlighted = highlighted.replace(/([.#][a-zA-Z0-9_-]+)/g, '<span style="color: #61afef;">$1</span>')

    // CSS comments
    highlighted = highlighted.replace(/(\/\*.*?\*\/)/g, '<span style="color: #7f848e;">$1</span>')
  }

  return highlighted
}

export default function CodePlaygroundSimple() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeSnippet, setActiveSnippet] = useState(codeSnippets[0])
  const [isRunning, setIsRunning] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [copied, setCopied] = useState(false)
  const [userCode, setUserCode] = useState(codeSnippets[0].code)
  const [showInsideGamesAnimation, setShowInsideGamesAnimation] = useState(false)
  const [showIllustratorArtShowcase, setShowIllustratorArtShowcase] = useState(false)
  const { resolvedTheme } = useTheme()
  const [isMobileView, setIsMobileView] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Check if we're on mobile and specifically iPhone 14 size
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setIsMobileView(width < 768)
      setIsSmallMobile(width <= 390 || height <= 667) // Include height check for better detection
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reset user code when changing snippets
  useEffect(() => {
    setUserCode(activeSnippet.code)
    setShowOutput(false)
    setShowInsideGamesAnimation(false)
    setShowIllustratorArtShowcase(false)
    setIsEditing(false)
  }, [activeSnippet])

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setShowOutput(true)

      if (activeSnippet.name === "React Component") {
        setShowInsideGamesAnimation(true)
      } else if (activeSnippet.name === "API Endpoint") {
        setShowIllustratorArtShowcase(true)
      }
    }, 1000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(userCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setUserCode(activeSnippet.code)
    setShowOutput(false)
    setShowInsideGamesAnimation(false)
    setShowIllustratorArtShowcase(false)
    setIsEditing(false)
  }

  // Mobile snippet navigation
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0)

  const nextSnippet = () => {
    const nextIndex = (currentSnippetIndex + 1) % codeSnippets.length
    setCurrentSnippetIndex(nextIndex)
    setActiveSnippet(codeSnippets[nextIndex])
  }

  const prevSnippet = () => {
    const prevIndex = (currentSnippetIndex - 1 + codeSnippets.length) % codeSnippets.length
    setCurrentSnippetIndex(prevIndex)
    setActiveSnippet(codeSnippets[prevIndex])
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <section id="code-playground" className="py-8 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Mobile optimized container */}
      <div className={`${isMobileView ? "px-4 mx-auto" : "container mx-auto px-4 sm:px-6 md:px-8"}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Code Playground</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore and interact with code samples showcasing my development skills
          </p>
        </motion.div>

        {/* Mobile Snippet Selector */}
        {isMobileView && (
          <div className="mb-4">
            <div className="code-playground-mobile-container">
              <div className="code-playground-mobile-selector-inner">
                <button onClick={prevSnippet} className="code-nav-button">
                  <ChevronLeft size={isSmallMobile ? 16 : 20} />
                </button>

                <div className="flex items-center">
                  <GlassyIcon
                    icon={activeSnippet.icon}
                    size={isSmallMobile ? 14 : 16}
                    color={activeSnippet.color as any}
                    className="p-1.5 sm:p-2 mr-1.5 sm:mr-2"
                  />
                  <span className="font-medium text-xs sm:text-sm">{activeSnippet.name}</span>
                </div>

                <button onClick={nextSnippet} className="code-nav-button">
                  <ChevronRight size={isSmallMobile ? 16 : 20} />
                </button>
              </div>

              {/* Mobile snippet dots indicator */}
              <div className="flex justify-center mt-2 space-x-1.5">
                {codeSnippets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSnippetIndex(index)
                      setActiveSnippet(codeSnippets[index])
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSnippetIndex
                        ? "bg-primary scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-3 sm:gap-6">
          {/* Snippet Selection Sidebar - Desktop Only */}
          {!isMobileView && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="code-playground-sidebar">
                <h3 className="text-lg font-semibold mb-4">Code Samples</h3>
                <div className="space-y-2">
                  {codeSnippets.map((snippet, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveSnippet(snippet)
                        setCurrentSnippetIndex(index)
                      }}
                      className={`code-snippet-button ${
                        activeSnippet.name === snippet.name ? "code-snippet-active" : ""
                      }`}
                    >
                      <GlassyIcon icon={snippet.icon} size={16} color={snippet.color as any} className="p-2" />
                      <span>{snippet.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Code Editor - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={isMobileView ? "w-full px-2" : "lg:col-span-4"}
          >
            <div
              className={`${isFullscreen && isMobileView ? "mobile-fullscreen" : ""} ${
                isMobileView ? "w-full max-w-sm mx-auto" : "code-playground-editor-container"
              }`}
              style={
                isMobileView
                  ? {
                      background: resolvedTheme === "dark" ? "rgba(17, 25, 40, 0.8)" : "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: `1px solid ${
                        resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                      }`,
                      boxShadow:
                        resolvedTheme === "dark"
                          ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                          : "0 8px 32px rgba(31, 38, 135, 0.15)",
                      overflow: "hidden",
                      margin: "0 auto",
                      padding: "0",
                    }
                  : {}
              }
            >
              <div className={isMobileView ? "w-full" : "code-playground-editor-inner"}>
                {/* Editor Header */}
                <div
                  className={
                    isMobileView
                      ? "flex items-center justify-between p-3 border-b border-white/10 dark:border-gray-700/20"
                      : "code-playground-header"
                  }
                >
                  <div className="flex items-center">
                    <GlassyIcon
                      icon={Code}
                      size={isSmallMobile ? 14 : 16}
                      color="primary"
                      className={`p-1.5 mr-1.5 ${isSmallMobile ? "hidden" : "hidden sm:flex"}`}
                    />
                    <span className="font-medium text-xs">{activeSnippet.name}</span>
                    <span
                      className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary ${isSmallMobile ? "hidden" : "hidden sm:inline-block"}`}
                    >
                      {activeSnippet.language}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    {/* Mobile fullscreen toggle */}
                    {isMobileView && (
                      <Button size="sm" variant="glass" className="h-6 px-1 text-[9px]" onClick={toggleFullscreen}>
                        {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="glass"
                      className="h-6 px-1 text-[9px]"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "View" : "Edit"}
                    </Button>
                    <Button size="sm" variant="glass" className="h-6 px-1 text-[9px]" onClick={handleCopy}>
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                    <Button size="sm" variant="glass" className="h-6 px-1 text-[9px]" onClick={handleReset}>
                      <RefreshCw className="h-3 w-3" />
                    </Button>

                    {/* Separator */}
                    <div className="w-px h-4 bg-white/20 dark:bg-gray-700/30 mx-2"></div>

                    {/* Special Liquid Glass Run Button */}
                    <motion.button
                      onClick={handleRun}
                      disabled={isRunning}
                      className="liquid-run-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        padding: isSmallMobile ? "0.25rem 0.5rem" : "0.375rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: isSmallMobile ? "9px" : "10px",
                        fontWeight: "600",
                        border: "none",
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6))",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        transition: "all 0.3s ease",
                        cursor: isRunning ? "not-allowed" : "pointer",
                        opacity: isRunning ? 0.7 : 1,
                      }}
                    >
                      {/* Liquid flowing background effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                          backgroundSize: "200% 200%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />

                      {/* Button content */}
                      <div className="relative z-10 flex items-center gap-1">
                        {isRunning ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Play className="h-3 w-3" />}
                        <span className="hidden sm:inline">{isRunning ? "Running..." : "Run"}</span>
                      </div>

                      {/* Glowing border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.4))",
                          filter: "blur(8px)",
                          opacity: 0.7,
                          zIndex: -1,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 0.9, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Code Editor Area */}
                <div className={isMobileView ? "p-1" : "code-playground-content"}>
                  {isEditing ? (
                    <textarea
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                      className={
                        isMobileView
                          ? "w-full resize-none border-none outline-none bg-transparent text-gray-800 dark:text-gray-200 font-mono text-xs leading-relaxed p-4"
                          : "code-editor"
                      }
                      spellCheck="false"
                      style={{
                        height:
                          isFullscreen && isMobileView
                            ? "calc(100vh - 80px)"
                            : isSmallMobile
                              ? "140px"
                              : isMobileView
                                ? "180px"
                                : "400px",
                        fontSize: isSmallMobile ? "10px" : isMobileView ? "11px" : "14px",
                      }}
                    />
                  ) : (
                    <div
                      className={
                        isMobileView
                          ? "w-full overflow-auto p-4 font-mono text-xs leading-relaxed"
                          : "syntax-highlighter-container"
                      }
                      style={{
                        height:
                          isFullscreen && isMobileView
                            ? "calc(100vh - 80px)"
                            : isSmallMobile
                              ? "140px"
                              : isMobileView
                                ? "180px"
                                : "400px",
                        fontSize: isSmallMobile ? "10px" : isMobileView ? "11px" : "14px",
                        backgroundColor: isMobileView
                          ? "transparent"
                          : resolvedTheme === "dark"
                            ? "rgba(0, 0, 0, 0.2)"
                            : "rgba(255, 255, 255, 0.3)",
                        color: resolvedTheme === "dark" ? "#e2e8f0" : "#1a202c",
                      }}
                    >
                      <pre
                        dangerouslySetInnerHTML={{
                          __html: highlightCode(userCode, activeSnippet.language),
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Output Area - Only show if not mobile or if there's space */}
                {showOutput && !isMobileView && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="code-playground-output"
                  >
                    <div className="flex items-center mb-1 sm:mb-2">
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 mr-1.5 sm:mr-2"></div>
                      <span className="text-xs sm:text-sm font-medium">Output</span>
                    </div>
                    <div className="code-output text-[10px] sm:text-xs p-2 sm:p-3">
                      {activeSnippet.output === "inside-games-animation" ? (
                        <div className="text-center">Inside Games 022 showcase is running...</div>
                      ) : activeSnippet.output === "illustrator-art-showcase" ? (
                        <div className="text-center">Illustrator Art LK showcase is running...</div>
                      ) : (
                        activeSnippet.output
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Mobile Code Description */}
                {isMobileView && (
                  <div className="p-4 border-t border-white/10 dark:border-gray-700/20">
                    <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">
                      {activeSnippet.description.substring(0, 100)}...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inside Games 022 Animation Overlay - Compact Version */}
      <AnimatePresence>
        {showInsideGamesAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => setShowInsideGamesAnimation(false)}
          >
            {/* Compact Content Container */}
            <motion.div
              className="relative z-10 max-w-5xl mx-auto px-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Gaming Icons Header - Reduced */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex justify-center gap-3 mb-4"
              >
                {["🎮", "🕹️", "🎯", "🏆"].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="text-2xl sm:text-3xl"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Title - Smaller */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
                style={{
                  textShadow:
                    resolvedTheme === "dark" ? "0 0 30px rgba(139, 92, 246, 0.8)" : "0 0 30px rgba(139, 92, 246, 0.6)",
                }}
              >
                Inside Games 022
              </motion.h1>

              {/* Subtitle - Smaller */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className={`text-lg sm:text-xl md:text-2xl mb-4 font-light ${
                  resolvedTheme === "dark" ? "text-white/90" : "text-gray-800/90"
                }`}
              >
                Your Ultimate Gaming Destination
              </motion.p>

              {/* Animated Underline - Smaller */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="h-1 mx-auto mb-6 rounded-full"
                style={{
                  width: "200px",
                  background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
                  boxShadow:
                    resolvedTheme === "dark" ? "0 0 15px rgba(139, 92, 246, 0.6)" : "0 0 15px rgba(139, 92, 246, 0.4)",
                }}
              />

              {/* Compact Feature Cards - 4 only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              >
                {[
                  { icon: "🎮", title: "Latest Games", desc: "New releases" },
                  { icon: "🏆", title: "Tournaments", desc: "Compete & win" },
                  { icon: "👥", title: "Community", desc: "Join gamers" },
                  { icon: "📰", title: "Gaming News", desc: "Stay updated" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                    className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(139, 92, 246, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${
                        resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(139, 92, 246, 0.2)"
                      }`,
                    }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3
                      className={`font-bold text-xs mb-1 ${resolvedTheme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-xs ${resolvedTheme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Compact Stats - 3 only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-6"
              >
                {[
                  { number: "50K+", label: "Gamers", icon: "👥" },
                  { number: "1000+", label: "Games", icon: "🎮" },
                  { number: "24/7", label: "Support", icon: "💬" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(139, 92, 246, 0.08)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${
                        resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(139, 92, 246, 0.15)"
                      }`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div
                      className={`text-lg font-bold mb-1 ${resolvedTheme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {stat.number}
                    </div>
                    <div className={`text-xs ${resolvedTheme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons - Compact */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row justify-center gap-3 mb-4"
              >
                <motion.button
                  className="px-6 py-3 rounded-full font-bold text-base transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    color: "white",
                    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.5)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 35px rgba(139, 92, 246, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open("https://insidegames022.com", "_blank")
                  }}
                >
                  🌐 Visit Website
                </motion.button>

                <motion.button
                  className="px-6 py-3 rounded-full font-bold text-base transition-all duration-300"
                  style={{
                    background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(139, 92, 246, 0.1)",
                    color: resolvedTheme === "dark" ? "white" : "#8b5cf6",
                    border: `2px solid ${resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.3)" : "#8b5cf6"}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  👥 Join Community
                </motion.button>
              </motion.div>

              {/* Close Instructions - Compact */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className={`text-xs text-center ${resolvedTheme === "dark" ? "text-white/60" : "text-gray-500"}`}
              >
                Click anywhere to close • Click buttons to interact
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Illustrator Art LK Showcase Overlay - Compact Version */}
      <AnimatePresence>
        {showIllustratorArtShowcase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => setShowIllustratorArtShowcase(false)}
          >
            {/* Compact Content Container */}
            <motion.div
              className="relative z-10 max-w-5xl mx-auto px-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Art Icons Header - Reduced */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex justify-center gap-3 mb-4"
              >
                {["🎨", "✏️", "🖌️", "🎭"].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="text-2xl sm:text-3xl"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Title - Smaller */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
                style={{
                  textShadow:
                    resolvedTheme === "dark"
                      ? "0 0 30px rgba(255, 107, 107, 0.8)"
                      : "0 0 30px rgba(255, 107, 107, 0.6)",
                }}
              >
                Illustrator Art LK
              </motion.h1>

              {/* Subtitle - Smaller */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className={`text-lg sm:text-xl md:text-2xl mb-4 font-light ${
                  resolvedTheme === "dark" ? "text-white/90" : "text-gray-800/90"
                }`}
              >
                Creative Design & Illustration Services
              </motion.p>

              {/* Animated Underline - Smaller */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="h-1 mx-auto mb-6 rounded-full"
                style={{
                  width: "250px",
                  background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1)",
                  boxShadow:
                    resolvedTheme === "dark"
                      ? "0 0 15px rgba(255, 107, 107, 0.6)"
                      : "0 0 15px rgba(255, 107, 107, 0.4)",
                }}
              />

              {/* Compact Service Cards - 4 only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              >
                {[
                  { icon: "🎨", title: "Logo Design", price: "From $50" },
                  { icon: "✏️", title: "Illustrations", price: "From $80" },
                  { icon: "🏷️", title: "Branding", price: "From $200" },
                  { icon: "🖼️", title: "Digital Art", price: "From $60" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                    className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 107, 107, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${
                        resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 107, 107, 0.2)"
                      }`,
                    }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3
                      className={`font-bold text-xs mb-1 ${resolvedTheme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs font-semibold ${
                        resolvedTheme === "dark" ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      {item.price}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Compact Stats - 4 only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="grid grid-cols-4 gap-3 mb-6"
              >
                {[
                  { number: "500+", label: "Artworks", icon: "🎨" },
                  { number: "200+", label: "Clients", icon: "😊" },
                  { number: "4.9★", label: "Rating", icon: "⭐" },
                  { number: "24h", label: "Delivery", icon: "⚡" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 107, 107, 0.08)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${
                        resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 107, 107, 0.15)"
                      }`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-lg mb-1">{stat.icon}</div>
                    <div
                      className={`text-sm font-bold mb-1 ${resolvedTheme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {stat.number}
                    </div>
                    <div className={`text-xs ${resolvedTheme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons - Compact */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row justify-center gap-3 mb-4"
              >
                <motion.button
                  className="px-6 py-3 rounded-full font-bold text-base transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
                    color: "white",
                    boxShadow: "0 8px 25px rgba(255, 107, 107, 0.5)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 35px rgba(255, 107, 107, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open("https://illustratorart.lk", "_blank")
                  }}
                >
                  🎨 Visit Portfolio
                </motion.button>

                <motion.button
                  className="px-6 py-3 rounded-full font-bold text-base transition-all duration-300"
                  style={{
                    background: resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 107, 107, 0.1)",
                    color: resolvedTheme === "dark" ? "white" : "#ff6b6b",
                    border: `2px solid ${resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.3)" : "#ff6b6b"}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Get Quote
                </motion.button>
              </motion.div>

              {/* Close Instructions - Compact */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className={`text-xs text-center ${resolvedTheme === "dark" ? "text-white/60" : "text-gray-500"}`}
              >
                Click anywhere to close • Click buttons to interact
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
