import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const { testimonials } = portfolioData

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
      >
        ⭐
      </span>
    ))
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
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 card-hover"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{t(`testimonials.items.${testimonial.id}.content`)}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-light">
                      {t(`testimonials.items.${testimonial.id}.name`)}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {t(`testimonials.items.${testimonial.id}.position`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials