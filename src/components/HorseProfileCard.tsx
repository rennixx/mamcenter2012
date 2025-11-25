import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';

export interface HorseProfileCardProps {
  name: string;
  breed: string;
  age: number;
  color: string;
  image?: string;
  specialties: string[];
  personality: string;
  disciplines: string[];
  experienceLevel: string;
  available: boolean;
  disciplineIcons?: { [key: string]: ReactNode };
  index?: number;
  onClick?: () => void;
}

const HorseProfileCard = ({
  name,
  breed,
  age,
  color,
  image,
  specialties,
  personality,
  disciplines,
  experienceLevel,
  available,
  disciplineIcons,
  index = 0,
  onClick,
}: HorseProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative bg-white overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      {/* Availability badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            available
              ? 'bg-green-500 text-white'
              : 'bg-gray-400 text-white'
          }`}
        >
          {available ? 'Available' : 'Unavailable'}
        </span>
      </div>

      {/* Horse image */}
      <div className="relative h-80 overflow-hidden bg-gray-300">
        {image ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-400">
            <span className="text-white text-lg font-semibold">{image}</span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-400">
            <span className="text-white text-6xl opacity-50">🐴</span>
          </div>
        )}
        
        {/* Navy border effect on hover */}
        <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Horse name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Basic info */}
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
          <span className="font-semibold">{breed}</span>
          <span>•</span>
          <span>{age} years old</span>
          <span>•</span>
          <span>{color}</span>
        </div>

        {/* Experience level badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-bold bg-primary text-white uppercase tracking-wide">
            {experienceLevel}
          </span>
        </div>

        {/* Personality */}
        <p className="text-gray-700 mb-4 line-clamp-2">{personality}</p>

        {/* Disciplines with icons */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Disciplines
          </h4>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
              <div
                key={discipline}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300"
              >
                {disciplineIcons && disciplineIcons[discipline] && (
                  <span className="text-base">{disciplineIcons[discipline]}</span>
                )}
                <span>{discipline}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties */}
        {specialties.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Specialties
            </h4>
            <ul className="space-y-1">
              {specialties.slice(0, 3).map((specialty, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <FaCheck className="text-primary mt-1 flex-shrink-0 text-xs" />
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View details hint */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-primary font-semibold group-hover:underline">
            View Full Profile →
          </span>
        </div>
      </div>

      {/* Bottom accent line animation */}
      <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default HorseProfileCard;
