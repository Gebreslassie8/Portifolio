import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaTelegram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCode,
  FaWhatsapp
} from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()

  // Platform names for tooltips
  const platformNames = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    website: 'Website',
    portfolio: 'Portfolio',
    telegram: 'Telegram',
    tiktok: 'TikTok',
    whatsapp: 'WhatsApp'
  }

  // Social icons with EXACT brand colors
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github':
        // GitHub brand color: #181717
        return <FaGithub className="text-[#181717] hover:text-[#2b2b2b] dark:text-white dark:hover:text-gray-300 transition-colors text-3xl" />
      case 'linkedin':
        return <FaLinkedin className="text-[#0077b5] hover:text-[#005885] transition-colors text-3xl" />
      case 'website':
        return <FaGlobe className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors text-3xl" />
      case 'telegram':
        return <FaTelegram className="text-[#0088cc] hover:text-[#006699] transition-colors text-3xl" />
      case 'tiktok':
        // TikTok brand color: #000000 (black) with #25F4EE (cyan) accent
        return <FaTiktok className="text-[#000000] hover:text-[#25F4EE] dark:text-white dark:hover:text-[#25F4EE] transition-colors text-3xl" />
      case 'whatsapp':
        return <FaWhatsapp className="text-[#25D366] hover:text-[#1da851] transition-colors text-3xl" />
      default:
        return null
    }
  }

  // Contact info icons - larger and more specialized
  const contactIcons = {
    email: <FaEnvelope className="text-red-500 text-2xl" />,
    phone: <FaPhoneAlt className="text-green-500 text-2xl" />,
    location: <FaMapMarkerAlt className="text-blue-500 text-2xl" />
  }

  const githubProfileUrl = 'https://github.com/Gebreslassie8'

  // Quick links using React Router paths
  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.skills'), href: '/skills' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.experience'), href: '/experience' },
    { name: t('nav.contact'), href: '/contact' }
  ]

  // Social links with WhatsApp added
  const socialLinks = {
    ...personal.socialLinks,
    github: githubProfileUrl,
    telegram: personal.socialLinks?.telegram || 'https://t.me/GD272727',
    tiktok: personal.socialLinks?.tiktok || 'https://tiktok.com/@gebreslassie27',
    whatsapp: personal.socialLinks?.whatsapp || 'https://wa.me/251906995513'
  }

  // Split phone numbers
  const phoneNumbers = personal.phone ? personal.phone.split('/') : ['+251906995513']

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
            {/* Social Icons - pure brand colors */}
            <div className="flex flex-wrap gap-5">
              {Object.entries(socialLinks).map(([platform, url]) => (
                url && (
                  <div key={platform} className="relative group">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-110 duration-300"
                    >
                      {getSocialIcon(platform)}
                    </a>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                      <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        {platformNames[platform] || platform}
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </div>
                  </div>
                )
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
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
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
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300">
                {contactIcons.email}
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {personal.email}
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-3 text-gray-300">
                {contactIcons.phone}
                <div className="flex flex-col">
                  {phoneNumbers.map((num, idx) => (
                    <a
                      key={idx}
                      href={`tel:${num.trim()}`}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {num.trim()}
                    </a>
                  ))}
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3 text-gray-300">
                {contactIcons.location}
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="flex items-center gap-2"
            >
              <FaCode className="text-accent text-2xl" />
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline transition"
              >
                Made by Gebreslassie Dessie
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-40 text-2xl"
          title="Back to Top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer