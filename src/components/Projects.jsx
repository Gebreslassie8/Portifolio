import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation()
  const [imageLoaded, setImageLoaded] = useState(false)

  const getPlatformBadge = (platform) => {
    const badges = {
      mobile: {
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
        icon: '📱',
        gradient: 'hover:from-purple-600 hover:to-pink-600'
      },
      desktop: {
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        icon: '💻',
        gradient: 'hover:from-blue-600 hover:to-cyan-600'
      },
      web: {
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
        icon: '🌐',
        gradient: 'hover:from-green-600 hover:to-emerald-600'
      }
    }
    return badges[platform] || badges.web
  }

  const platformBadge = getPlatformBadge(project.platform)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4">
            <span className={`${platformBadge.bgColor} text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1 backdrop-blur-sm`}>
              <span className="text-base">{platformBadge.icon}</span>
              <span className="capitalize hidden sm:inline">{project.platform}</span>
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white py-2 px-3 rounded-lg text-sm font-semibold text-center transition-colors hover:bg-white hover:dark:bg-gray-700 shadow-lg"
              >
                {t('projects.code')}
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-3 rounded-lg text-sm font-semibold text-center shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                {t('projects.liveDemo')}
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {project.category && (
          <div className="mb-4">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              <span className="mr-1.5">⬇️</span>
              {t('projects.download')}
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              <span className="mr-1.5">🍎</span>
              App Store
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              <span className="mr-1.5">🤖</span>
              Play Store
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { t } = useTranslation()
  const { projects } = portfolioData
  const [filter, setFilter] = useState('all')

  const filterOptions = [
    { key: 'all', label: t('projects.all'), count: projects.length },
    { key: 'mobile', label: t('projects.mobile'), count: projects.filter(p => p.platform === 'mobile').length },
    { key: 'desktop', label: t('projects.desktop'), count: projects.filter(p => p.platform === 'desktop').length },
    { key: 'web', label: t('projects.web'), count: projects.filter(p => p.platform === 'web').length }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.platform === filter)

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-secondary dark:text-light mb-6"
            >
              {t('projects.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {t('projects.description')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filterOptions.map((option) => (
              <motion.button
                key={option.key}
                onClick={() => setFilter(option.key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg ${filter === option.key
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-primary/25'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'
                  }`}
              >
                <span>{option.label}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${filter === option.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                  {option.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try selecting a different filter
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects