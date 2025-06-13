"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-sm">
      <div>Current theme: {theme}</div>
      <div>Resolved theme: {resolvedTheme}</div>
      <div className="flex gap-2 mt-2">
        <button onClick={() => setTheme("light")} className="px-2 py-1 bg-blue-500 text-white rounded">
          Light
        </button>
        <button onClick={() => setTheme("dark")} className="px-2 py-1 bg-gray-700 text-white rounded">
          Dark
        </button>
        <button onClick={() => setTheme("system")} className="px-2 py-1 bg-green-500 text-white rounded">
          System
        </button>
      </div>
    </div>
  )
}
