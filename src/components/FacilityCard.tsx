import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface FacilityCardProps {
  name: string;
  type: string;
  specifications: string;
  image?: string;
  icon: ReactNode;
  features: string[];
  index?: number;
  onClick?: () => void;
}

const FacilityCard = ({
  name,
  type,
  specifications,
  image,
  icon,
  features,
  index = 0,
  onClick,
}: FacilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative bg-white overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Navy accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary z-10" />

      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {image ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500">{image}</span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-primary text-6xl opacity-20">{icon}</div>
          </div>
        )}
        
        {/* Zoom effect overlay */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Navy border effect on hover */}
        <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon and Type */}
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {type}
          </span>
        </div>

        {/* Facility Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Specifications */}
        <p className="text-sm text-gray-600 mb-4 font-mono">
          {specifications}
        </p>

        {/* Features list */}
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* View Details hint */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-primary font-semibold group-hover:underline">
            Click for full details →
          </span>
        </div>
      </div>

      {/* Bottom accent line animation */}
      <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default FacilityCard;
