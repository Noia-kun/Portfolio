import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'
import GitHubActivity from "./components/GitHubActivity";
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLenis } from "./hooks/useLenis";


function App() {
  useLenis();
  return (
    <div>
      <Navbar />
      <div className="pt-[64px]">
        <Hero />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Education />
        <GitHubActivity />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
