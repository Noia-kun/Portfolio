import { useState } from 'react'
import TechStack from './components/TechStack'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <div>
      Portfolio
      <Hero />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Education />
    </div>
  )
}

export default App
