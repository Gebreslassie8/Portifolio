import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  const { experience } = portfolioData

  const getPlatformIcons = (platforms) => {
    const platformIcons = {
      mobile: { icon: '📱', label: 'Mobile Development' },
      desktop: { icon: '💻', label: 'Desktop Applications' },
      web: { icon: '🌐', label: 'Web Development' },
      fullstack: { icon: '⚡', label: 'Full Stack' },
      cloud: { icon: '☁️', label: 'Cloud & DevOps' },
      ai: { icon: '🧠', label: 'AI/ML' }
    }
    
    return platforms.map(platform => (
      <motion.span
        key={platform}
        whileHover={{ scale: 1.1, y: -2 }}
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-base shadow-lg ${
          platform === 'mobile' ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' :
          platform === 'desktop' ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white' :
          platform === 'web' ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white' :
          platform === 'fullstack' ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white' :
          platform === 'cloud' ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white' :
          'bg-gradient-to-br from-teal-500 to-blue-500 text-white'
        }`}
        title={platformIcons[platform]?.label || platform}
      >
        {platformIcons[platform]?.icon}
      </motion.span>
    ))
  }

  const getJourneyInsights = (exp) => {
    const insights = {
      mobile: "My journey in mobile development began with native Android and evolved into cross-platform solutions using React Native and Flutter. I've focused on creating performant, user-friendly applications that leverage device capabilities while maintaining code reusability.",
      desktop: "Desktop application development taught me the importance of system integration and performance optimization. From traditional WinForms to modern Electron apps, I've worked on solutions that bridge the gap between web technologies and native desktop experiences.",
      web: "Web development has been a constant evolution - from jQuery to modern React/Next.js ecosystems. I specialize in building scalable, responsive web applications with focus on performance, accessibility, and user experience across all devices.",
      fullstack: "Full-stack development allowed me to understand the complete product lifecycle. I've architected systems from database design to frontend implementation, ensuring seamless integration between different technology stacks.",
      cloud: "Cloud technologies transformed how I approach scalability and deployment. My experience includes containerization, microservices architecture, and implementing CI/CD pipelines for efficient development workflows.",
      ai: "Exploring AI/ML integration opened new possibilities for intelligent applications. I've worked on implementing machine learning models and AI features to enhance user experiences and automate complex processes."
    }
    
    return exp.platforms.map(platform => insights[platform]).filter(Boolean).join(' ')
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
            >
              {t('experience.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {t('experience.description')}
            </motion.p>
            
            {/* Journey Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-secondary dark:text-light mb-4 flex items-center justify-center">
                <span className="mr-3">🚀</span>
                My Development Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                My journey through cross-platform development spans mobile, desktop, and web technologies, 
                focusing on creating seamless user experiences across all platforms. From native applications 
                to progressive web apps, I've embraced the evolution of technology stacks while maintaining 
                a user-centric approach to software development.
              </p>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col lg:flex-row gap-8 mb-16 last:mb-0"
              >
                {/* Timeline Line - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary/30 z-0" />
                
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full z-10 shadow-lg border-4 border-white dark:border-gray-900" />

                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:order-2'
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Company & Position */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} mb-6`}>
                      <h3 className="text-2xl font-bold text-secondary dark:text-light mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                        {exp.company}
                      </p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 space-x-4">
                        <span className="flex items-center">
                          <span className="mr-2">📍</span>
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">🕐</span>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Platform Icons */}
                    <div className={`flex space-x-3 mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      {getPlatformIcons(exp.platforms)}
                    </div>

                    {/* Main Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Journey Insights */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl p-6 mb-6 border border-primary/10 dark:border-primary/20"
                    >
                      <h4 className="font-semibold text-secondary dark:text-light mb-3 flex items-center">
                        <span className="mr-2">🎯</span>
                        Development Focus
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {getJourneyInsights(exp)}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          className="bg-white dark:bg-gray-700 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Date Indicator - Mobile */}
                <div className="lg:hidden bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg mx-auto -mt-4 z-10">
                  {exp.period.split(' - ')[0]}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Career Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 inline-block">
              <h4 className="text-2xl font-bold text-secondary dark:text-light mb-8 flex items-center justify-center">
                <span className="mr-3">📊</span>
                {t('experience.highlights')}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {experience.length}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {t('experience.companies')}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {experience.reduce((total, exp) => total + (exp.technologies?.length || 0), 0)}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {t('experience.technologies')}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {new Date().getFullYear() - parseInt(experience[experience.length - 1]?.period?.split(' - ')[0] || new Date().getFullYear())}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {t('experience.yearsExp')}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {Array.from(new Set(experience.flatMap(exp => exp.platforms || []))).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {t('experience.platformsCount')}
                  </div>
                </motion.div>
              </div>
              
              {/* Additional Journey Insights */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
                  Throughout my career, I've embraced the challenge of mastering multiple technology stacks, 
                  always focusing on how different platforms can work together to create comprehensive solutions 
                  that serve users wherever they are.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience