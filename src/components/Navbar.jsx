import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaStar,
  FaRocket,
  FaBolt,
  FaChartLine
} from 'react-icons/fa'

const Navbar = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const getActiveFromPath = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/skills') return 'skills'
    if (pathname === '/projects') return 'projects'
    if (pathname === '/experience') return 'experience'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }
  const activeSection = getActiveFromPath()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), path: '/', icon: <FaStar className="text-lg" />, activeIcon: <FaHome className="text-lg" /> },
    { name: t('nav.about'), path: '/about', icon: <FaUser className="text-lg" />, activeIcon: <FaUser className="text-lg" /> },
    { name: t('nav.skills'), path: '/skills', icon: <FaTools className="text-lg" />, activeIcon: <FaBolt className="text-lg" /> },
    { name: t('nav.projects'), path: '/projects', icon: <FaProjectDiagram className="text-lg" />, activeIcon: <FaRocket className="text-lg" /> },
    { name: t('nav.experience'), path: '/experience', icon: <FaBriefcase className="text-lg" />, activeIcon: <FaChartLine className="text-lg" /> },
    { name: t('nav.contact'), path: '/contact', icon: <FaEnvelope className="text-lg" />, activeIcon: <FaEnvelope className="text-lg" /> }
  ]

  const mobileNavItems = [
    { name: t('nav.home'), path: '/', icon: <FaStar className="text-xl" /> },
    { name: t('nav.about'), path: '/about', icon: <FaUser className="text-xl" /> },
    { name: t('nav.skills'), path: '/skills', icon: <FaTools className="text-xl" /> },
    { name: t('nav.projects'), path: '/projects', icon: <FaProjectDiagram className="text-xl" /> },
    { name: t('nav.experience'), path: '/experience', icon: <FaBriefcase className="text-xl" /> },
    { name: t('nav.contact'), path: '/contact', icon: <FaEnvelope className="text-xl" /> }
  ]

  const sidebarVariants = {
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  const containerVariants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl py-2 border-b border-gray-200/50 dark:border-gray-700/50'
        : 'bg-transparent py-4'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* LEFT SIDE: Hamburger (only visible on mobile/tablet) */}
            <div className="flex items-center lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="block w-5 h-0.5 bg-secondary dark:bg-light transition-all duration-300"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-4 h-0.5 bg-secondary dark:bg-light transition-all duration-300"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="block w-5 h-0.5 bg-secondary dark:bg-light transition-all duration-300"
                  />
                </div>
              </motion.button>
            </div>

            {/* LOGO: centered on mobile, left on desktop */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center space-x-2 cursor-pointer"
              >
                <FaRocket className="text-primary" />
                <span>{portfolioData.personal.name.split(' ')[0]}</span>
              </motion.div>
            </Link>

            {/* DESKTOP NAVIGATION (visible only on large screens) */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${activeSection === item.name.toLowerCase()
                      ? 'text-primary bg-primary/10 shadow-lg'
                      : 'text-secondary dark:text-light hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    <span>{activeSection === item.name.toLowerCase() ? item.activeIcon : item.icon}</span>
                    <span>{item.name}</span>
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE: Language & Theme toggles (always visible) */}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (unchanged, slides from left) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden border-r border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    <FaRocket className="text-sm" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary dark:text-light">
                      {portfolioData.personal.name.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Portfolio</div>
                  </div>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  <span className="text-xl">✕</span>
                </motion.button>
              </div>

              <div className="p-6">
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                >
                  {mobileNavItems.map((item) => (
                    <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-4 p-4 rounded-2xl text-lg font-medium transition-all duration-300 ${activeSection === item.name.toLowerCase()
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                          : 'text-secondary dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                      >
                        <span className="flex items-center justify-center w-6">{item.icon}</span>
                        <span className="flex-1">{item.name}</span>
                        {activeSection === item.name.toLowerCase() && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl border border-primary/10 dark:border-primary/20"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <FaRocket className="text-2xl text-primary" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Ready to create something amazing?
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Let's connect and build the future together
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar