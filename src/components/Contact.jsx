import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaWhatsapp
} from 'react-icons/fa'

// ------------------------------------------------------------------
// Toast Popup
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

  const bgColor = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  }[type] || 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'

  const titleColor = {
    success: 'text-green-800 dark:text-green-200',
    error: 'text-red-800 dark:text-red-200',
    info: 'text-blue-800 dark:text-blue-200'
  }[type] || 'text-blue-800 dark:text-blue-200'

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration)
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
          <div className={`rounded-xl shadow-2xl border p-4 backdrop-blur-sm ${bgColor}`}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">{getIcon()}</div>
              <div className="flex-1">
                <h4 className={`font-bold text-sm ${titleColor}`}>{title}</h4>
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [popup, setPopup] = useState({ isOpen: false, type: 'success', title: '', message: '' })

  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const latitude = 9.0320
  const longitude = 38.7468
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`

  const socialLinks = [
    {
      name: 'GitHub',
      url: personal.socialLinks.github,
      icon: <FaGithub />,
      color: 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      url: personal.socialLinks.linkedin,
      icon: <FaLinkedin />,
      color: 'text-[#0077b5] hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/GD272727',
      icon: <FaTelegramPlane />,
      color: 'text-[#0088cc] hover:bg-sky-50 dark:hover:bg-sky-900/20'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/251902067211',
      icon: <FaWhatsapp />,
      color: 'text-[#25D366] hover:bg-green-50 dark:hover:bg-green-900/20'
    }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendTelegramMessage = async (message) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram bot not configured.')
    }
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      }
    )
    const data = await response.json()
    if (!data.ok) throw new Error(data.description || 'Failed to send message')
    return data
  }

  const showPopup = (type, title, message) => setPopup({ isOpen: true, type, title, message })
  const closePopup = () => setPopup({ ...popup, isOpen: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const telegramMessage = `
🚀 <b>New Project Collaboration Request!</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}

💬 <b>Message:</b>
${formData.message}

⏰ <b>Received:</b> ${new Date().toLocaleString()}
📍 <b>Location:</b> ${latitude}, ${longitude}
      `.trim()

      await sendTelegramMessage(telegramMessage)

      showPopup(
        'success',
        t('contact.popupSuccessTitle') || 'Message Sent! 🎉',
        t('contact.popupSuccessMessage') || 'Thank you for reaching out. I will get back to you soon.'
      )
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      showPopup(
        'error',
        t('contact.popupErrorTitle') || 'Delivery Failed ❌',
        error.message || 'Could not send message. Please try again.'
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

      <section
        id="contact"
        className="section-padding bg-white dark:bg-dark relative overflow-hidden"
      >
        {/* Subtle background accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-14">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-light mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('contact.heading') || "Let's build something great together"}
              </p>
            </div>

            {/* Two-column card */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 bg-gray-50 dark:bg-gray-800/40 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">

              {/* ===== Left Panel — Contact Info ===== */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-accent text-white p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t('contact.heading') || "Let's Talk"}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-8">
                    {t('contact.description')?.slice(0, 140) ||
                      'Have a project in mind or need a solution? I\'m always available for new opportunities.'}
                  </p>

                  {/* Contact items */}
                  <div className="space-y-5">
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition">
                        <FaEnvelope className="text-sm" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                          {t('contact.email') || 'Email'}
                        </p>
                        <p className="text-sm font-medium truncate">{personal.email}</p>
                      </div>
                    </a>

                    <a href={`tel:${personal.phone}`} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition">
                        <FaPhoneAlt className="text-sm" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                          {t('contact.phone') || 'Phone'}
                        </p>
                        <p className="text-sm font-medium truncate">{personal.phone}</p>
                      </div>
                    </a>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition">
                        <FaMapMarkerAlt className="text-sm" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                          {t('contact.location') || 'Location'}
                        </p>
                        <p className="text-sm font-medium truncate">{personal.location}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-10">
                  <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-3">
                    {t('contact.followMe') || 'Follow Me'}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {socialLinks.map((social) =>
                      social.url && (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.name}
                          className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/30 flex items-center justify-center text-lg transition-all hover:scale-110"
                        >
                          {social.icon}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* ===== Right Panel — Form ===== */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.name') || 'Your Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.namePlaceholder') || 'Your full name'}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.email') || 'Email Address'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.emailPlaceholder') || 'you@example.com'}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.message') || 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder={
                        t('contact.messagePlaceholder') ||
                        'Tell me about your project or idea...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t('contact.sending') || 'Sending...'}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        {t('contact.send') || 'Send Message'}
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    💡 {t('contact.replyTime') || "I'll get back to you within 24 hours"}
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact