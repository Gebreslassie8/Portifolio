import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'

const PlatformShowcase = () => {
  const { t } = useTranslation()
  const { platformStats } = portfolioData

  const platforms = {
    mobile: {
      ...platformStats.mobile,
      title: t('platforms.mobile.title'),
      icon: "📱",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    desktop: {
      ...platformStats.desktop,
      title: t('platforms.desktop.title'), 
      icon: "🖥️",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    web: {
      ...platformStats.web,
      title: t('platforms.web.title'),
      icon: "🌐",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-secondary dark:text-light mb-4">
            {t('platforms.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            {t('platforms.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(platforms).map(([platformKey, platform], index) => (
              <motion.div
                key={platformKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${platform.bgGradient} rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:shadow-2xl dark:group-hover:shadow-gray-800/50 h-full flex flex-col`}>
                  {/* Platform Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center text-3xl text-white mb-6 mx-auto shadow-lg`}>
                    {platform.icon}
                  </div>
                  
                  {/* Platform Title */}
                  <h3 className="text-2xl font-semibold text-center text-secondary dark:text-light mb-4">
                    {platform.title}
                  </h3>
                  
                  {/* Platform Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed flex-grow">
                    {t(`platforms.${platformKey}.description`)}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center mb-6">
                    <div>
                      <div className="text-2xl font-bold text-secondary dark:text-light">
                        {platform.projects}+
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {t('platforms.projects')}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary dark:text-light">
                        {platform.experience}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {t('platforms.experience')}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {platform.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} rounded-3xl opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              {t('platforms.cta')}
            </p>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('platforms.startProject')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformShowcase