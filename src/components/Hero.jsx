import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

const Hero = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData

  // Platform name mapping for display
  const platformNames = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    website: 'Website'
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark dark:to-gray-800 section-padding">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1">
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

          <h2 className="text-2xl md:text-3xl text-primary mb-2">
            {t('hero.title')}
          </h2>

          <p className="text-xl text-accent font-medium mb-6">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {personal.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#projects" className="btn-primary">
              {t('hero.viewWork')}
            </a>
            <a href="#contact" className="btn-secondary">
              {t('hero.getInTouch')}
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {Object.entries(personal.socialLinks).map(([platform, url]) => (
              <div key={platform} className="relative group">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 transform hover:scale-110 block"
                >
                  <span className="text-2xl">
                    {getPlatformIcon(platform)}
                  </span>
                </a>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    {platformNames[platform] || platform}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero