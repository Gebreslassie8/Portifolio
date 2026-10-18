import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { generateResumePDF } from '../utils/pdfGenerator'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa'

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

  // ✅ FIXED: direct gradient colors (no more fragile .split().replace())
  const platformStats = [
    {
      icon: '📱',
      label: 'Mobile Applications',
      description: 'React Native • Flutter',
      gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: '🌐',
      label: 'Web Applications',
      description: 'React • Next.js • Node.js',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      textColor: 'text-blue-600 dark:text-blue-400'
    }
  ]

  const itSolutions = [
    {
      icon: '🛠️',
      title: 'Software Troubleshooting',
      description: 'Diagnosing bugs, performance bottlenecks, and runtime errors in web and mobile applications.',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: '🌐',
      title: 'Network & Deployment Issues',
      description: 'Resolving API integration failures, CORS errors, DNS configurations, and cloud deployment problems.',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: '🗄️',
      title: 'Database & Query Optimization',
      description: 'Fixing slow queries, schema mismatches, and data integrity issues in SQL and NoSQL databases.',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: '🔐',
      title: 'Security & Authentication',
      description: 'Debugging JWT, OAuth, RBAC permissions, and identifying common vulnerabilities in web systems.',
      color: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: '⚙️',
      title: 'System Setup & ICT Support',
      description: 'Installing, configuring, and maintaining software systems, development environments, and ICT infrastructure.',
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: '💡',
      title: 'Performance & Bug Fixing',
      description: 'Profiling applications, reducing load times, and providing permanent fixes rather than temporary patches.',
      color: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ]

  const githubProfileUrl = 'https://github.com/Gebreslassie8'

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
      platform: 'whatsapp',
      url: 'https://wa.me/251902067211',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      name: 'WhatsApp',
      bgColor: 'bg-green-500',
      hoverBgColor: 'hover:bg-green-600',
      textColor: 'text-white'
    },
    {
      platform: 'telegram',
      url: 'https://t.me/GD272727',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      name: 'Telegram',
      bgColor: 'bg-blue-400',
      hoverBgColor: 'hover:bg-blue-500',
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
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"
            ></motion.div>

            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-light">
                <span className="relative">
                  {t('about.title')}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  ></motion.span>
                </span>
              </h2>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {[0.6, 0.7, 0.8, 0.9, 1.0].map((delay, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay }}
                  viewport={{ once: true }}
                  className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                ></motion.div>
              ))}
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '40px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-4"
            ></motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
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
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                  🚀 Full Stack Software Engineer
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Full Stack Software Engineer specializing in building high-performance web and mobile applications. I craft clean, scalable, and production-ready solutions using modern technologies — from responsive React interfaces to robust Node.js backends and cross-platform React Native apps. Beyond development, I provide complete <strong className="text-primary dark:text-accent">ICT solutions</strong> and <strong className="text-primary dark:text-accent">technical troubleshooting</strong> for businesses and individuals.
                </p>
              </motion.div>

              {/* ✅ FIXED Platform Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8"
              >
                {platformStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl p-[1.5px] hover:shadow-2xl transition-all duration-300"
                    style={{ background: stat.gradient }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center transition-all duration-300 group-hover:scale-[0.98]">
                      <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                        {stat.icon}
                      </div>
                      <div className={`text-sm font-semibold uppercase tracking-wider ${stat.textColor} mb-1`}>
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic text-center sm:text-left"
              >
                Continuously expanding into new technologies with a strong focus on delivering production-quality code.
              </motion.p>
            </div>

            {/* Right Column - Profile Photo */}
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
                    <FaEnvelope className="text-primary text-xl mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">{personal.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-primary text-xl mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">{personal.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-primary text-xl mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">{personal.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCode className="text-primary text-xl mr-4" />
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Full Stack Software Engineer</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                  <div className="flex justify-center space-x-3 flex-wrap gap-2">
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

          {/* IT Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold text-secondary dark:text-light mb-2">
                IT Solutions & Troubleshooting
              </h4>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Beyond development, I provide end-to-end ICT support — diagnosing problems, delivering practical solutions, and helping businesses and individuals keep their systems running smoothly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {itSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-xl ${solution.bg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h5 className={`text-lg font-semibold ${solution.color} mb-2`}>
                    {solution.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl p-6 border-l-4 border-primary"
            >
              <h5 className="font-semibold text-secondary dark:text-light mb-2 flex items-center gap-2">
                <span>💬</span> How I Approach Troubleshooting
              </h5>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every technical problem has a root cause. My approach is simple: <strong>listen carefully</strong>, <strong>reproduce the issue</strong>, <strong>identify the source</strong>, and <strong>deliver a permanent fix</strong> — not a temporary workaround. Whether it's a broken deployment, a slow database, a failing login system, or setting up an entire ICT environment from scratch, I focus on solutions that save time, reduce downtime, and prevent the same issue from returning.
              </p>
            </motion.div>
          </motion.div>

          {/* Journey Section */}
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
                <p>
                  I'm a passionate Full Stack Software Engineer dedicated to creating impactful digital experiences. My journey began with a strong foundation in Software Engineering from Mizan-Tepi University, where I graduated with distinction (3.74/4.00 CGPA).
                </p>
                <p>
                  Today, I focus on building complete applications — from pixel-perfect frontends to reliable, well-architected backends. Alongside development, I solve real-world ICT problems: troubleshooting software issues, fixing deployment failures, securing systems, and helping organizations adopt the right technology. I believe great engineering is a balance of clean code, thoughtful design, and practical problem solving.
                </p>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-secondary dark:text-light mb-2 flex items-center justify-center gap-2">
                  <span>🚀</span> Full Stack Development Focus
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS<br />
                  <strong>Backend:</strong> Node.js, Python, Express, Django<br />
                  <strong>Mobile:</strong> React Native, Flutter<br />
                  <strong>Database & DevOps:</strong> MongoDB, PostgreSQL, Firebase, Docker, AWS, CI/CD
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