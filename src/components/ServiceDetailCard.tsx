import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import Button from './Button';

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  pricing?: string;
  duration?: string;
  features?: string[];
  category?: string;
  index?: number;
  onLearnMore?: () => void;
}

const ServiceCard = ({
  icon,
  title,
  description,
  pricing,
  duration,
  features = [],
  index = 0,
  onLearnMore,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
    >
      {/* Navy Blue Header with Icon */}
      <div className="bg-primary p-6 text-white flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
        <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col group-hover:bg-gray-50 transition-colors duration-300">
        {/* Title */}
        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="mb-4 space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Pricing & Duration */}
        <div className="border-t border-gray-200 pt-4 mb-4">
          {pricing && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Pricing
              </span>
              <span className="text-lg font-bold text-primary">{pricing}</span>
            </div>
          )}
          {duration && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Duration
              </span>
              <span className="text-gray-700 font-medium">{duration}</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="md"
          onClick={onLearnMore}
          className="w-full"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
