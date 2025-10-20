import { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-gradient">
            {portfolioData.personal.name.split(' ')[0]}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-secondary dark:text-light hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact" className="btn-primary text-sm">
              {t('nav.hireMe')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-secondary dark:bg-light transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'
                }`} />
                <span className={`block h-0.5 bg-secondary dark:bg-light transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'w-4'
                }`} />
                <span className={`block h-0.5 bg-secondary dark:bg-light transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 dark:bg-dark/95 backdrop-blur-lg rounded-2xl p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-3 px-4 text-secondary dark:text-light hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.hireMe')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar