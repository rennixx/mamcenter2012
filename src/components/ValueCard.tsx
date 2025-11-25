import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ValueCard = ({ icon, title, description, index = 0 }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-center mb-3 text-primary group-hover:text-primary-dark transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="mt-4 h-1 bg-primary/10 group-hover:bg-primary transition-colors w-0 group-hover:w-full mx-auto duration-300" />
    </motion.div>
  );
};

export default ValueCard;
