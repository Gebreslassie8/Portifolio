import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import {
  FaDownload
} from 'react-icons/fa'
import { generateResumePDF } from '../utils/pdfGenerator'

const Hero = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData

  // Typing animation state
  const roles = [
    t('hero.title'),           // e.g., "Full Stack Developer"
    'Mobile App Developer',
    'Desktop App Developer',
    'Web App Developer',
    'UI/UX Enthusiast'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        if (displayText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }, 80)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev => currentRole.slice(0, prev.length + 1))
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }, 120)
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles])

  // Handle PDF download with loading state
  const handleDownloadResume = async () => {
    setIsDownloading(true)
    try {
      await generateResumePDF(portfolioData)
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to generate resume. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden section-padding">
      {/* Floating Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"
        />
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          {/* Avatar with glow effect */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-1">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-secondary dark:text-light mb-4">
            {personal.name}
          </h1>

          {/* Typing effect for role */}
          <div className="h-16 mb-2">
            <h2 className="text-2xl md:text-3xl text-primary font-mono">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>

          <p className="text-xl text-accent font-medium mb-6">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t('hero.viewWork')} ✨
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary dark:text-light rounded-xl font-semibold hover:bg-primary/10 transition-all"
              >
                {t('hero.getInTouch')} 💬
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-900 transition-all flex items-center gap-2 ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <FaDownload className="text-sm" /> Download Resume
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero