"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Play, RefreshCw, Copy, Check, Laptop, Server, Database, ChevronRight, ChevronLeft } from "lucide-react"
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
  const [isSmallMobile, setIsSmallMobile] = useState(false) // For iPhone-sized devices
  const [isEditing, setIsEditing] = useState(false)

  // Check if we're on mobile and specifically iPhone 14 size
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobileView(width < 768)
      setIsSmallMobile(width <= 390) // iPhone 14 width is approximately 390px
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
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

  return (
    <section id="code-playground" className="py-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Playground</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore and interact with code samples showcasing my development skills
          </p>
        </motion.div>

        {/* Mobile Snippet Selector */}
        {isMobileView && (
          <div className="mb-4 sm:mb-6">
            <div className="code-playground-mobile-selector">
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

          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={isMobileView ? "" : "lg:col-span-4"}
          >
            <div className="code-playground-editor">
              {/* Editor Header */}
              <div className="code-playground-header">
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
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="glass"
                    className="code-playground-button h-7 px-1.5 text-[10px] sm:text-xs"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "View" : "Edit"}
                  </Button>
                  <Button
                    size="sm"
                    variant="glass"
                    className="code-playground-button h-7 px-1.5 text-[10px] sm:text-xs"
                    onClick={handleRun}
                    disabled={isRunning}
                  >
                    {isRunning ? <RefreshCw className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    <span className={isSmallMobile ? "hidden" : "hidden sm:inline ml-1"}>Run</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="glass"
                    className="code-playground-button h-7 px-1.5 text-[10px] sm:text-xs"
                    onClick={handleCopy}
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span className={isSmallMobile ? "hidden" : "hidden sm:inline ml-1"}>
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </Button>
                  <Button
                    size="sm"
                    variant="glass"
                    className="code-playground-button h-7 px-1.5 text-[10px] sm:text-xs"
                    onClick={handleReset}
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span className={isSmallMobile ? "hidden" : "hidden sm:inline ml-1"}>Reset</span>
                  </Button>
                </div>
              </div>

              {/* Code Editor Area */}
              <div className="code-playground-content">
                {isEditing ? (
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="code-editor"
                    spellCheck="false"
                    style={{
                      height: isSmallMobile ? "180px" : isMobileView ? "200px" : "300px",
                      fontSize: isSmallMobile ? "11px" : isMobileView ? "12px" : "14px",
                    }}
                  />
                ) : (
                  <div
                    className="syntax-highlighter-container"
                    style={{
                      height: isSmallMobile ? "180px" : isMobileView ? "200px" : "300px",
                      overflow: "auto",
                      padding: isSmallMobile ? "0.5rem" : "1rem",
                      fontFamily: "monospace",
                      fontSize: isSmallMobile ? "11px" : isMobileView ? "12px" : "14px",
                      lineHeight: 1.5,
                      backgroundColor: resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.3)",
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

              {/* Output Area */}
              {showOutput && (
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inside Games 022 Animation Overlay */}
      <AnimatePresence>
        {showInsideGamesAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.98) 50%, rgba(0, 0, 0, 0.95) 100%)",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => setShowInsideGamesAnimation(false)}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Glass Orbs */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                  }}
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: [
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                    ],
                    y: [
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                    ],
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Main Content Container */}
            <motion.div
              className="relative z-10 max-w-5xl mx-auto px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Glass Container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent, rgba(59, 130, 246, 0.3), transparent)",
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 text-center"
                    style={{
                      textShadow: "0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)",
                      background: "linear-gradient(135deg, #ffffff, #e0e7ff, #c7d2fe)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Inside Games 022
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 text-center font-light"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    Your Ultimate Gaming Destination
                  </motion.p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="h-1 mx-auto mb-8 rounded-full"
                    style={{
                      width: "200px",
                      background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-8"
                  >
                    <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                      Discover the latest games, reviews, news, and gaming community. Join thousands of gamers in the
                      ultimate gaming experience with exclusive content, tournaments, and more!
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { icon: "🎮", label: "Latest Games", delay: 1.6 },
                        { icon: "🏆", label: "Tournaments", delay: 1.8 },
                        { icon: "👥", label: "Community", delay: 2.0 },
                        { icon: "📰", label: "Gaming News", delay: 2.2 },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
                          className="flex flex-col items-center gap-2 p-4 rounded-2xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                          whileHover={{
                            scale: 1.05,
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))",
                          }}
                        >
                          <motion.span
                            className="text-3xl"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: item.delay + 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="text-white text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center gap-6 mb-8"
                  >
                    {["🎮", "🕹️", "🎯", "🏆", "⚡", "🎪"].map((icon, index) => (
                      <motion.div
                        key={index}
                        className="text-4xl sm:text-5xl cursor-pointer"
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    <motion.button
                      className="relative overflow-hidden px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        color: "white",
                        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 15px 40px rgba(139, 92, 246, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://insidegames022.com", "_blank")
                      }}
                    >
                      {/* Button Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                      />
                      <span className="relative z-10">🌐 Visit Website</span>
                    </motion.button>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 3.2, duration: 0.5 }}
                      className="text-xs sm:text-sm mt-6 text-center text-white/60"
                    >
                      Click anywhere to close • Click button to visit website
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Illustrator Art LK Showcase Overlay */}
      <AnimatePresence>
        {showIllustratorArtShowcase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 15, 25, 0.95) 0%, rgba(30, 20, 40, 0.98) 50%, rgba(15, 15, 25, 0.95) 100%)",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => setShowIllustratorArtShowcase(false)}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Art Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    background: `linear-gradient(135deg, rgba(${255 - i * 20}, ${100 + i * 20}, ${200 + i * 10}, 0.1), rgba(${200 + i * 10}, ${150 + i * 15}, ${255 - i * 15}, 0.05))`,
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: i % 2 === 0 ? "50%" : "20px",
                    width: `${80 + i * 30}px`,
                    height: `${80 + i * 30}px`,
                  }}
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                    opacity: 0,
                    rotate: 0,
                  }}
                  animate={{
                    x: [
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                    ],
                    y: [
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                    ],
                    scale: [0, 1, 0.7, 1],
                    opacity: [0, 0.4, 0.1, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Creative Grid Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 100, 200, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(100, 200, 255, 0.3) 2px, transparent 2px)
            `,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Main Content Container */}
            <motion.div
              className="relative z-10 max-w-6xl mx-auto px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Glass Container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl p-6 sm:p-10"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))",
                  backdropFilter: "blur(25px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255, 100, 200, 0.3), transparent, rgba(100, 200, 255, 0.3), transparent, rgba(200, 100, 255, 0.3), transparent)",
                    backgroundSize: "600% 600%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 text-center"
                    style={{
                      textShadow: "0 0 30px rgba(255, 100, 200, 0.8), 0 0 60px rgba(100, 200, 255, 0.4)",
                      background: "linear-gradient(135deg, #ffffff, #ffeaa7, #fab1a0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Illustrator Art LK
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 text-center font-light"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    Creative Design & Illustration Services
                  </motion.p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="h-1 mx-auto mb-8 rounded-full"
                    style={{
                      width: "250px",
                      background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
                      boxShadow: "0 0 20px rgba(255, 107, 107, 0.6)",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-8"
                  >
                    <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                      Professional illustration and design services including logo design, digital art, branding
                      packages, and custom illustrations. Transform your ideas into stunning visual masterpieces with
                      our creative expertise!
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { icon: "🎨", label: "Logo Design", delay: 1.6, color: "from-red-400 to-pink-400" },
                        { icon: "✏️", label: "Illustrations", delay: 1.8, color: "from-blue-400 to-cyan-400" },
                        { icon: "🏷️", label: "Branding", delay: 2.0, color: "from-green-400 to-teal-400" },
                        { icon: "🖼️", label: "Digital Art", delay: 2.2, color: "from-purple-400 to-indigo-400" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
                          className="flex flex-col items-center gap-3 p-4 rounded-2xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                          whileHover={{
                            scale: 1.05,
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.09))",
                          }}
                        >
                          <motion.div
                            className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              delay: item.delay + 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          >
                            <span className="text-2xl">{item.icon}</span>
                          </motion.div>
                          <span className="text-white text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Portfolio Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
                      className="grid grid-cols-3 gap-6 mb-8"
                    >
                      {[
                        { number: "250+", label: "Artworks", icon: "🎨" },
                        { number: "100+", label: "Happy Clients", icon: "😊" },
                        { number: "4.9★", label: "Rating", icon: "⭐" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.6 + index * 0.2, duration: 0.6, ease: "easeOut" }}
                          className="text-center p-4 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                          <div className="text-sm text-white/70">{stat.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center gap-4 mb-8"
                  >
                    {["🎨", "✏️", "🖌️", "🎭", "🌈", "✨"].map((icon, index) => (
                      <motion.div
                        key={index}
                        className="text-3xl sm:text-4xl cursor-pointer"
                        animate={{
                          y: [0, -12, 0],
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          delay: index * 0.4,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.4,
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.6, duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    <motion.button
                      className="relative overflow-hidden px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)",
                        color: "white",
                        boxShadow: "0 10px 30px rgba(255, 107, 107, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 15px 40px rgba(255, 107, 107, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://illustratorart.lk", "_blank")
                      }}
                    >
                      {/* Button Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                      />
                      <span className="relative z-10">🎨 Visit Portfolio</span>
                    </motion.button>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 4.0, duration: 0.5 }}
                      className="text-xs sm:text-sm mt-6 text-center text-white/60"
                    >
                      Click anywhere to close • Click button to visit portfolio
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
