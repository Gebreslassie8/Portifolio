import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGlobe,
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle
} from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'

// ------------------------------------------------------------------
// Professional Popup Component (Toast)
// ------------------------------------------------------------------
const PopupMessage = ({ isOpen, onClose, type, title, message, duration = 4000 }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500 text-2xl" />
      case 'error':
        return <FaExclamationCircle className="text-red-500 text-2xl" />
      default:
        return <FaInfoCircle className="text-blue-500 text-2xl" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
    }
  }

  const getTitleColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800 dark:text-green-200'
      case 'error':
        return 'text-red-800 dark:text-red-200'
      default:
        return 'text-blue-800 dark:text-blue-200'
    }
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, duration, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed top-24 right-4 z-50 max-w-sm w-full"
        >
          <div className={`rounded-xl shadow-2xl border p-4 backdrop-blur-sm ${getBgColor()}`}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">{getIcon()}</div>
              <div className="flex-1">
                <h4 className={`font-bold text-sm ${getTitleColor()}`}>{title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ------------------------------------------------------------------
// Main Contact Component
// ------------------------------------------------------------------
const Contact = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [popup, setPopup] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  })

  // Telegram credentials (set in .env)
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  // GPS coordinates
  const latitude = 9.0320
  const longitude = 38.7468
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`

  const socialLinks = [
    {
      platform: 'github',
      url: personal.socialLinks.github,
      name: 'GitHub',
      icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl" />,
      color: 'text-gray-800 dark:text-gray-200',
      hoverColor: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      platform: 'linkedin',
      url: personal.socialLinks.linkedin,
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-[#0077b5] text-2xl" />,
      color: 'text-[#0077b5]',
      hoverColor: 'hover:text-[#005885]'
    },
    {
      platform: 'twitter',
      url: personal.socialLinks.twitter,
      name: 'Twitter',
      icon: <FaTwitter className="text-[#1da1f2] text-2xl" />,
      color: 'text-[#1da1f2]',
      hoverColor: 'hover:text-[#0d8bd9]'
    },
    {
      platform: 'telegram',
      url: 'https://t.me/gebreslassie',
      name: 'Telegram',
      icon: <FaTelegramPlane className="text-[#0088cc] text-2xl" />,
      color: 'text-[#0088cc]',
      hoverColor: 'hover:text-[#006699]'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendTelegramMessage = async (message) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram bot not configured.')
    }
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })
    const data = await response.json()
    if (!data.ok) throw new Error(data.description || 'Failed to send message')
    return data
  }

  const showPopup = (type, title, message) => {
    setPopup({ isOpen: true, type, title, message })
  }

  const closePopup = () => setPopup({ ...popup, isOpen: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const telegramMessage = `
🚀 <b>New Project Inquiry!</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📋 <b>Subject:</b> ${formData.subject}

💬 <b>Message:</b>
${formData.message}

⏰ <b>Received:</b> ${new Date().toLocaleString()}
📍 <b>Location:</b> ${latitude}, ${longitude}
      `.trim()

      await sendTelegramMessage(telegramMessage)

      showPopup(
        'success',
        'Message Sent Successfully! 🎉',
        'Thank you for reaching out. I will get back to you soon.'
      )
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      showPopup(
        'error',
        'Delivery Failed ❌',
        error.message || 'Could not send message. Please try again or email me directly.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PopupMessage
        isOpen={popup.isOpen}
        onClose={closePopup}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        duration={5000}
      />

      <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-dark dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-secondary dark:text-light mb-16">
              {t('contact.title')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-secondary dark:text-light mb-6">
                    {t('contact.heading')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                    {t('contact.description')}
                  </p>

                  <div className="space-y-5 mb-10">
                    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mr-4">
                        <FaEnvelope className="text-red-500 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.email')}</p>
                        <a href={`mailto:${personal.email}`} className="font-medium text-gray-800 dark:text-white hover:text-primary transition">
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4">
                        <FaPhoneAlt className="text-green-500 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.phone')}</p>
                        <a href={`tel:${personal.phone}`} className="font-medium text-gray-800 dark:text-white hover:text-primary transition">
                          {personal.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                        <GiPositionMarker className="text-blue-500 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.location')}</p>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gray-800 dark:text-white hover:text-primary transition flex items-center gap-1"
                        >
                          {personal.location}
                          <FaGlobe className="text-xs" />
                        </a>
                        <p className="text-xs text-gray-400 mt-1">
                          📍 {latitude}, {longitude}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Connect with me</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        social.url && (
                          <div key={social.platform} className="relative group">
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block transition-all duration-300 transform hover:scale-110 ${social.color} ${social.hoverColor}`}
                            >
                              {social.icon}
                            </a>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                {social.name}
                              </div>
                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.name')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder={t('contact.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder={t('contact.emailPlaceholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.subject')}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.subjectPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`btn-primary w-full flex items-center justify-center gap-2 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending via Telegram...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      💡 You'll receive a notification on Telegram as soon as I get your message.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact