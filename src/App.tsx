import { useState } from 'react'
import TechStack from './components/TechStack'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <div>
      Portfolio
      <Hero />
      <TechStack />
      <WorkExperience />
    </div>
  )
}

export default App
