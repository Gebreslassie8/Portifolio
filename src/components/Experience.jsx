import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'
import { FaBriefcase, FaMapMarkerAlt, FaCode, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

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

  // Card variants for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  // Hover glow effect variants
  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 0.6,
      scale: 1.5,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary dark:text-accent text-sm font-semibold px-6 py-2 rounded-full border border-primary/20">
                {t('experience.subtitle') || 'Professional Journey'}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-light mb-4">
              {t('experience.title')}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            ></motion.div>

            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mt-6">
              {t('experience.description')}
            </p>
          </div>

          {/* Experience Cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl"
                ></motion.div>

                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                  {/* Gradient top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient"></div>

                  <div className="p-6 md:p-8">
                    {/* Header with timeline indicator */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2.5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                            <FaBriefcase className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-secondary dark:text-light group-hover:text-primary transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 mt-1">
                              <span className="font-semibold text-primary/80 dark:text-accent/80">
                                {exp.company}
                              </span>
                              {exp.location && (
                                <span className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                                  <FaMapMarkerAlt className="text-accent" size={12} />
                                  {exp.location}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      {exp.duration && (
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          <FaCalendarAlt className="text-primary" size={14} />
                          <span>{exp.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Platforms Tags */}
                    {exp.platforms && exp.platforms.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.platforms.map(platform => (
                          <motion.span
                            key={platform}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-1.5 text-sm bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 px-4 py-1.5 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 shadow-sm"
                          >
                            <span className="text-base">{getPlatformIcon(platform)}</span>
                            <span className="capitalize font-medium">{platform}</span>
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mr-2">
                            <FaCode size={14} className="text-primary" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Tech Stack</span>
                          </div>
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-600/50 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Animated arrow indicator on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 right-4 text-primary/20 group-hover:text-primary/60 transition-colors"
                    >
                      <FaArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Let's Work Together</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Add gradient animation keyframes to your CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Experience