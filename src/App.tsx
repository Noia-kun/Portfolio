import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'
import GitHubActivity from "./components/GitHubActivity";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const unmountTimer = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => clearTimeout(unmountTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader && <Loader isFadingOut={isFadingOut} />}
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
