import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export interface HorseDetails {
  name: string;
  breed: string;
  age: number;
  color: string;
  height?: string;
  weight?: string;
  image?: string;
  specialties: string[];
  personality: string;
  fullDescription: string;
  disciplines: string[];
  experienceLevel: string;
  available: boolean;
  temperament?: string;
  training?: string[];
  achievements?: string[];
  idealFor?: string[];
  disciplineIcons?: { [key: string]: ReactNode };
}

interface HorseModalProps {
  isOpen: boolean;
  onClose: () => void;
  horse: HorseDetails | null;
}

const HorseModal = ({ isOpen, onClose, horse }: HorseModalProps) => {
  if (!horse) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-primary text-white p-3 hover:bg-primary-dark transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Header with image */}
              <div className="relative h-96 bg-gray-400 flex items-center justify-center">
                {horse.image ? (
                  <span className="text-white text-2xl font-semibold">{horse.image}</span>
                ) : (
                  <span className="text-white text-8xl opacity-50">🐴</span>
                )}
                
                {/* Availability badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wide ${
                      horse.available
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {horse.available ? 'Available for Lessons' : 'Currently Unavailable'}
                  </span>
                </div>

                {/* Navy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-5xl font-bold mb-3">{horse.name}</h2>
                  <div className="flex items-center gap-4 text-lg">
                    <span className="font-semibold">{horse.breed}</span>
                    <span>•</span>
                    <span>{horse.age} years old</span>
                    <span>•</span>
                    <span>{horse.color}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Experience level and disciplines */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-2 text-sm font-bold bg-primary text-white uppercase tracking-wide">
                    {horse.experienceLevel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {horse.disciplines.map((discipline) => (
                      <div
                        key={discipline}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                      >
                        {horse.disciplineIcons && horse.disciplineIcons[discipline] && (
                          <span className="text-base text-primary">
                            {horse.disciplineIcons[discipline]}
                          </span>
                        )}
                        <span className="font-semibold">{discipline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical stats */}
                {(horse.height || horse.weight || horse.temperament) && (
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {horse.height && (
                      <div className="bg-gray-50 p-6 border-l-4 border-primary">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                          Height
                        </h4>
                        <p className="text-xl font-bold text-gray-900">{horse.height}</p>
                      </div>
                    )}
                    {horse.weight && (
                      <div className="bg-gray-50 p-6 border-l-4 border-primary">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                          Weight
                        </h4>
                        <p className="text-xl font-bold text-gray-900">{horse.weight}</p>
                      </div>
                    )}
                    {horse.temperament && (
                      <div className="bg-gray-50 p-6 border-l-4 border-primary">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                          Temperament
                        </h4>
                        <p className="text-xl font-bold text-gray-900">{horse.temperament}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Full description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About {horse.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{horse.fullDescription}</p>
                </div>

                {/* Two-column layout for details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Specialties */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h3>
                    <div className="space-y-3">
                      {horse.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal for */}
                  {horse.idealFor && horse.idealFor.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For</h3>
                      <div className="space-y-3">
                        {horse.idealFor.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <FaCheck className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Training */}
                {horse.training && horse.training.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Skills</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {horse.training.map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {horse.achievements && horse.achievements.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h3>
                    <div className="space-y-3">
                      {horse.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-primary text-white p-6 text-center">
                <p className="text-lg mb-4">
                  {horse.available
                    ? `Interested in riding ${horse.name}? Contact us to schedule your lesson!`
                    : `${horse.name} is currently unavailable for lessons. Please contact us for more information.`}
                </p>
                <button
                  onClick={onClose}
                  className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HorseModal;
