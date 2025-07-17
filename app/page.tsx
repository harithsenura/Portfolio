"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import CodePlaygroundSimple from "@/components/code-playground-simple"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import SelfAppShowcase from "@/components/self-app-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Hero />
      <About />
      <Skills />
      <CodePlaygroundSimple />
      <Projects />
      <SelfAppShowcase />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}