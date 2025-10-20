import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'

const SkillCategory = ({ title, skills, delay, color }) => {
  const { t } = useTranslation()
  
  const colorClasses = {
    purple: 'from-purple-500 to-pink-500',
    blue: 'from-blue-500 to-cyan-500', 
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold text-secondary dark:text-light mb-6 text-center">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center text-white text-sm`}>
                {skill.icon}
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-200 block">{skill.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t(`skills.items.${skill.id}.description`)}
                </span>
              </div>
            </div>
            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                className={`h-2.5 rounded-full bg-gradient-to-r ${colorClasses[color]}`}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 w-8 text-right">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const { t } = useTranslation()
  const { skills } = portfolioData

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-secondary dark:text-light mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            {t('skills.description')}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <SkillCategory
                title={t('skills.mobile')}
                skills={skills.mobile}
                delay={0.1}
                color="purple"
              />
              <SkillCategory
                title={t('skills.desktop')}
                skills={skills.desktop}
                delay={0.3}
                color="blue"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <SkillCategory
                title={t('skills.frontend')}
                skills={skills.web.frontend}
                delay={0.5}
                color="green"
              />
              <SkillCategory
                title={t('skills.backend')}
                skills={skills.web.backend}
                delay={0.7}
                color="orange"
              />
              <SkillCategory
                title={t('skills.tools')}
                skills={skills.tools}
                delay={0.9}
                color="purple"
              />
            </div>
          </div>

          {/* Platform Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl p-8 border border-primary/20 dark:border-primary/30">
              <h4 className="text-xl font-semibold text-secondary dark:text-light mb-6">
                {t('skills.philosophy')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                {t('skills.philosophyText')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills