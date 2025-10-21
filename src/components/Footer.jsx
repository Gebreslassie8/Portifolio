import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()

  // Platform name mapping for display
  const platformNames = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    website: 'Website',
    portfolio: 'Portfolio'
  }

  // Platform icon mapping
 const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'github':
        return <FaGithub className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" />
      case 'linkedin':
        return <FaLinkedin className="text-[#0077b5] hover:text-[#005885] dark:text-[#0077b5] dark:hover:text-[#00a0dc] transition-colors" />
      case 'twitter':
        return <FaTwitter className="text-[#1da1f2] hover:text-[#0d8bd9] dark:text-[#1da1f2] dark:hover:text-[#8ecdf7] transition-colors" />
      case 'website':
        return <FaGlobe className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors" />
      default:
        return null
    }
  }

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-secondary to-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">
              {personal.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {Object.entries(personal.socialLinks).map(([platform, url]) => (
                <div key={platform} className="relative group">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-lg">
                      {getPlatformIcon(platform)}
                    </span>
                  </a>
                  {/* Tooltip - Positioned below the icon */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      {platformNames[platform] || platform}
                    </div>
                    {/* Tooltip arrow - positioned above the tooltip */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleQuickLinkClick(link.href)
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('footer.getInTouch')}</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📧</span>
                <a 
                  href={`mailto:${personal.email}`} 
                  className="hover:text-white transition-colors duration-300"
                >
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📱</span>
                <a 
                  href={`tel:${personal.phone}`} 
                  className="hover:text-white transition-colors duration-300"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📍</span>
                <span>{personal.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} {personal.name}. {t('footer.rights')}
            </p>
           <div className="flex items-center space-x-2">
           <span className="text-lg">👨‍💻</span>
          <span className="text-accent font-semibold">Made by Gebreslassie Dessie</span>
         </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-40"
          title="Back to Top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer