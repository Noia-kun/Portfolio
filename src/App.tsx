import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RevealOnScroll from './components/RevealOnScroll'


function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px]">
        <Hero />
        <RevealOnScroll><TechStack /></RevealOnScroll>
        <RevealOnScroll><WorkExperience /></RevealOnScroll>
        <RevealOnScroll><Projects /></RevealOnScroll>
        <RevealOnScroll><Education /></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
        <Footer />
      </div>
    </div>
  )
}

export default App
