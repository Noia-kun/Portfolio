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
import { useLenis } from "./hooks/useLenis";


function App() {
  useLenis();
  return (
    <div>
      <Navbar />
      <div className="pt-[64px]">
        <Hero />
        <RevealOnScroll direction="left"><TechStack /></RevealOnScroll>
        <RevealOnScroll direction="right"><WorkExperience /></RevealOnScroll>
        <RevealOnScroll direction="left"><Projects /></RevealOnScroll>
        <RevealOnScroll direction="right"><Education /></RevealOnScroll>
        <RevealOnScroll direction="left"><Contact /></RevealOnScroll>
        <Footer />
      </div>
    </div>
  )
}

export default App
