import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PlatformShowcase from './components/PlatformShowcase'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/globals.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <PlatformShowcase />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App