import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { generateResumePDF } from '../utils/pdfGenerator'

const About = () => {
  const { t } = useTranslation()
  const { personal } = portfolioData

  const handleDownloadPDF = async () => {
    try {
      await generateResumePDF(portfolioData)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }

  // Professional platform stats (only these three)
  const platformStats = [
    { value: '5', label: 'Mobile Apps', icon: '📱', bgColor: 'from-green-500 to-emerald-500' },
    { value: '8', label: 'Desktop Apps', icon: '💻', bgColor: 'from-purple-500 to-pink-500' },
    { value: '24', label: 'Web Apps', icon: '🌐', bgColor: 'from-teal-500 to-cyan-500' }
  ]

  // GitHub profile URL
  const githubProfileUrl = 'https://github.com/Gebreslassie8'

  // Social links (including GitHub)
  const socialLinks = [
    {
      platform: 'github',
      url: githubProfileUrl,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      name: 'GitHub',
      bgColor: 'bg-gray-800',
      hoverBgColor: 'hover:bg-gray-900',
      textColor: 'text-white'
    },
    {
      platform: 'linkedin',
      url: personal.socialLinks.linkedin,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      name: 'LinkedIn',
      bgColor: 'bg-blue-600',
      hoverBgColor: 'hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      platform: 'twitter',
      url: personal.socialLinks.twitter,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      name: 'Twitter',
      bgColor: 'bg-sky-500',
      hoverBgColor: 'hover:bg-sky-600',
      textColor: 'text-white'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-secondary dark:text-light mb-16">
            {t('about.title')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-3xl font-semibold text-secondary dark:text-light mb-4">
                  Hi, I'm {personal.name} 👋
                </h3>
                <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🚀 Full Stack Developer
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {t('personal.bio')}
                </p>
              </motion.div>

              {/* Only Platform Stats - Professional Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8"
              >
                {platformStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl bg-gradient-to-br p-[1px] hover:shadow-xl transition-all"
                    style={{ background: `linear-gradient(135deg, ${stat.bgColor.split(' ')[1]}, ${stat.bgColor.split(' ')[3]})` }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center transition-all group-hover:scale-[0.97]">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* GitHub CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 text-center"
              >
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Visit my GitHub Profile
                </a>
              </motion.div>
            </div>

            {/* Right Column - Profile Photo (Professionally animated) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-8 relative"
              >
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative z-10">
                  <img
                    src="/im2.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-30 animate-ping pointer-events-none"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent rounded-full animate-pulse delay-1000"></div>
              </motion.div>

              {/* Personal Info Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow">
                <h4 className="text-xl font-semibold text-secondary dark:text-light mb-6 text-center">
                  {t('about.personalInfo')}
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-primary mr-4">📧</span>
                    <span className="text-gray-600 dark:text-gray-300">{personal.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-4">📱</span>
                    <span className="text-gray-600 dark:text-gray-300">{personal.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-4">📍</span>
                    <span className="text-gray-600 dark:text-gray-300">{personal.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-4">🎓</span>
                    <span className="text-gray-600 dark:text-gray-300">MTU Software Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-4">💻</span>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</span>
                  </div>
                </div>

                {/* Social Links (including GitHub) */}
                <div className="mb-6">
                  <div className="flex justify-center space-x-3">
                    {socialLinks.map((social) => (
                      social.url && (
                        <div key={social.platform} className="relative group">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                              flex items-center justify-center
                              w-12 h-12 rounded-xl
                              transition-all duration-300 ease-in-out
                              transform group-hover:scale-110
                              ${social.bgColor}
                              ${social.hoverBgColor}
                              ${social.textColor}
                              shadow-md hover:shadow-lg
                              group-hover:-translate-y-1
                            `}
                          >
                            {social.icon}
                          </a>
                          <div className="
                            absolute -top-10 left-1/2 transform -translate-x-1/2
                            bg-gray-800 text-white text-xs px-2 py-1 rounded-md
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            pointer-events-none whitespace-nowrap shadow-lg z-10
                          ">
                            {social.name}
                            <div className="
                              absolute top-full left-1/2 transform -translate-x-1/2
                              border-4 border-transparent border-t-gray-800
                            "></div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* PDF Button */}
                <button
                  onClick={handleDownloadPDF}
                  className="btn-primary w-full text-center block group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('about.downloadResume')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Detailed Bio Section (kept unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl p-8 border border-primary/20">
              <h4 className="text-xl font-semibold text-secondary dark:text-light mb-4">
                About My Journey
              </h4>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('personal.detailedBio', { returnObjects: true }).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-secondary dark:text-light mb-2 flex items-center justify-center gap-2">
                  <span>🚀</span> Full Stack Development Focus
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS<br />
                  <strong>Backend:</strong> Node.js, Python, Express, Django<br />
                  <strong>Database:</strong> MongoDB, PostgreSQL, Firebase<br />
                  <strong>DevOps:</strong> Docker, AWS, CI/CD, Cloud Deployment
                </p>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-secondary dark:text-light mb-2 flex items-center justify-center gap-2">
                  <span>🎓</span> Education
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>MTU - Master of Technology in Software Engineering</strong> (2022-2024)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Specialized in Cloud Computing, AI Integration, and Distributed Systems
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About