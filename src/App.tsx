import { useState } from 'react'
import TechStack from './components/TechStack'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      Portfolio
      <Hero />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
