import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaPaperPlane } from 'react-icons/fa'

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

  // Vite environment variables
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const socialLinks = [
    {
      platform: 'github',
      url: personal.socialLinks.github,
      name: 'GitHub',
      icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      hoverBgColor: 'hover:bg-gray-200 dark:hover:bg-gray-600',
      textColor: 'text-gray-600 dark:text-gray-400',
      hoverTextColor: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      platform: 'linkedin',
      url: personal.socialLinks.linkedin,
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-[#0077b5]" />,
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      hoverBgColor: 'hover:bg-gray-200 dark:hover:bg-gray-600',
      textColor: 'text-[#0077b5]',
      hoverTextColor: 'hover:text-[#005885] dark:hover:text-[#00a0dc]'
    },
    {
      platform: 'twitter',
      url: personal.socialLinks.twitter,
      name: 'Twitter',
      icon: <FaTwitter className="text-[#1da1f2]" />,
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      hoverBgColor: 'hover:bg-gray-200 dark:hover:bg-gray-600',
      textColor: 'text-[#1da1f2]',
      hoverTextColor: 'hover:text-[#0d8bd9] dark:hover:text-[#8ecdf7]'
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
      throw new Error('Telegram bot not configured. Please check your environment variables.')
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      const data = await response.json();
      
      if (!data.ok) {
        console.error('Telegram API error:', data);
        throw new Error(data.description || 'Failed to send message');
      }
      
      return data;
    } catch (error) {
      console.error('Telegram API error:', error);
      throw error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Create formatted message for Telegram
      const telegramMessage = `
🚀 <b>New Project Inquiry!</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📋 <b>Subject:</b> ${formData.subject}

💬 <b>Message:</b>
${formData.message}

⏰ <b>Received:</b> ${new Date().toLocaleString()}

🔗 <b>Portfolio:</b> ${window.location.origin}
      `.trim()

      // Send to Telegram
      await sendTelegramMessage(telegramMessage)
      
      console.log('✅ Message sent to Telegram successfully!')
      alert('🎉 Message sent successfully! I will contact you soon via email.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('❌ Failed to send message:', error)
      alert('❌ Failed to send message. Please try again or contact me directly at ' + personal.email)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark">
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
            <div>
              <h3 className="text-2xl font-semibold text-secondary dark:text-light mb-6">
                {t('contact.heading')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {t('contact.description')}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-light">{t('contact.email')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{personal.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-light">{t('contact.phone')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{personal.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  social.url && (
                    <div key={social.platform} className="relative group">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          w-12 h-12 rounded-lg flex items-center justify-center
                          transition-all duration-300 ease-in-out
                          transform group-hover:scale-110
                          ${social.bgColor}
                          ${social.hoverBgColor}
                          ${social.textColor}
                          ${social.hoverTextColor}
                          shadow-md hover:shadow-lg
                          group-hover:-translate-y-1
                        `}
                      >
                        {social.icon}
                      </a>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                          {social.name}
                        </div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
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
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending to Telegram...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send via Telegram
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  💡 You'll get an instant notification on Telegram when someone submits a message
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact