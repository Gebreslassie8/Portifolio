import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { FaBriefcase, FaMapMarkerAlt, FaCode } from 'react-icons/fa'

const Experience = () => {
  const { t } = useTranslation()
  const { experience } = portfolioData

  const getPlatformIcon = (platform) => {
    const icons = {
      mobile: '📱',
      desktop: '💻',
      web: '🌐',
      fullstack: '⚡',
      cloud: '☁️',
      ai: '🧠'
    }
    return icons[platform] || '💼'
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary dark:text-light mb-4">
              {t('experience.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              {t('experience.description')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaBriefcase className="text-primary text-xl" />
                        <h3 className="text-2xl font-bold text-secondary dark:text-light">
                          {exp.position}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-sm">
                            <FaMapMarkerAlt className="text-accent" size={12} />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {exp.platforms && exp.platforms.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.platforms.map(platform => (
                        <span
                          key={platform}
                          className="inline-flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-base">{getPlatformIcon(platform)}</span>
                          <span className="capitalize">{platform}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mr-2">
                        <FaCode size={14} />
                        <span className="text-xs font-medium">Tech stack:</span>
                      </div>
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full transition-all hover:bg-primary/10 dark:hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience