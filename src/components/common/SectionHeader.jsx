import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, description }) => {
  return (
    <motion.div 
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative top divider */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-20 h-1 bg-red-600 mx-auto mb-2" />
        <div className="w-10 h-1 bg-red-600 mx-auto" />
      </motion.div>

      {/* Badge */}
      <motion.div
        className="inline-block p-2 px-4 rounded-full bg-red-600 text-white font-medium text-sm mb-4"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {badge}
      </motion.div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;