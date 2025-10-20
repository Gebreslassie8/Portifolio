import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <span className="text-yellow-400 text-xs">🌙</span>
        ) : (
          <span className="text-orange-400 text-xs">☀️</span>
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle