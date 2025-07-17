import Link from "next/link"
import { Code } from "lucide-react"
import { GlassyIcon } from "@/components/ui/glassy-icon"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <div className="flex items-center gap-2">
                <GlassyIcon icon={Code} size={20} color="primary" className="p-2" />
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  DevPortfolio
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Combining web and mobile development expertise to build responsive, user-friendly, and innovative digital
              solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.58 1.87-.92 2.98-.92 1.04 0 1.99.29 2.81.77l1.29-1.29c-1.15-.66-2.48-1.04-3.9-1.04-2.18 0-4.16.88-5.6 2.31L9.7 11.02c.57-.66 1.25-1.21 2.01-1.63zM8.99 12c0-.54.09-1.07.23-1.57l-1.7-1.7c-.45.85-.72 1.84-.72 2.88 0 1.56.58 2.98 1.52 4.07l1.42-1.42c-.45-.59-.75-1.31-.75-2.08zm2.25 3.91c.64.38 1.39.59 2.18.59 1.19 0 2.28-.42 3.13-1.1l-1.42-1.42c-.51.36-1.13.57-1.8.57-.53 0-1.03-.11-1.49-.32l-1.57 1.57c.89.28 1.83.43 2.8.43 2.38 0 4.51-.96 6.06-2.52l-1.42-1.42c-1.06 1.06-2.53 1.71-4.15 1.71-.83 0-1.6-.18-2.3-.51z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Android Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  iOS Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Cross-Platform Apps
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Made by Harith Divarathna</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
