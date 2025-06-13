"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Play, RefreshCw, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassyIcon } from "@/components/ui/glassy-icon"
import { useTheme } from "next-themes"

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

interface CodePlaygroundProps {
  initialCode?: string
  language?: string
}

export default function CodePlayground({ initialCode = "", language = "javascript" }: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [isRunning, setIsRunning] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [copied, setCopied] = useState(false)
  const { resolvedTheme } = useTheme()
  const [isMobileView, setIsMobileView] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setShowOutput(true)
    }, 1000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setCode(initialCode)
    setShowOutput(false)
    setIsEditing(false)
  }

  return (
    <div className="code-playground-editor">
      {/* Editor Header */}
      <div className="code-playground-header">
        <div className="flex items-center">
          <GlassyIcon icon={Code} size={16} color="primary" className="p-2 mr-2 hidden sm:flex" />
          <span className="font-medium text-sm">{language.toUpperCase()}</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="glass" className="code-playground-button" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "View" : "Edit"}
          </Button>
          <Button size="sm" variant="glass" className="code-playground-button" onClick={handleRun} disabled={isRunning}>
            {isRunning ? <RefreshCw className="h-4 w-4 mr-1 animate-spin" /> : <Play className="h-4 w-4 mr-1" />}
            <span className="hidden sm:inline">Run</span>
          </Button>
          <Button size="sm" variant="glass" className="code-playground-button" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
          </Button>
          <Button size="sm" variant="glass" className="code-playground-button" onClick={handleReset}>
            <RefreshCw className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="code-playground-content">
        {isEditing ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
            spellCheck="false"
            style={{ height: isMobileView ? "200px" : "300px" }}
          />
        ) : (
          <div
            className="syntax-highlighter-container"
            style={{
              height: isMobileView ? "200px" : "300px",
              overflow: "auto",
              padding: "1rem",
              fontFamily: "monospace",
              fontSize: isMobileView ? "0.75rem" : "0.875rem",
              lineHeight: 1.5,
              backgroundColor: resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.3)",
              color: resolvedTheme === "dark" ? "#e2e8f0" : "#1a202c",
            }}
          >
            <pre
              dangerouslySetInnerHTML={{
                __html: highlightCode(code, language),
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
          <div className="flex items-center mb-2">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm font-medium">Output</span>
          </div>
          <div className="code-output">
            <pre>
              <code>
                {/* Output would be shown here in a real implementation */}
                {`> ${code.split("\n")[0]}`}
              </code>
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  )
}
