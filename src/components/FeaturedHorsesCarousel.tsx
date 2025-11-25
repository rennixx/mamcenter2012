import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { HorseDetails } from './HorseModal';

interface FeaturedHorsesCarouselProps {
  horses: HorseDetails[];
  onHorseClick: (horse: HorseDetails) => void;
}

const FeaturedHorsesCarousel = ({ horses, onHorseClick }: FeaturedHorsesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % horses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [horses.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + horses.length) % horses.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % horses.length);
  };

  const currentHorse = horses[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative bg-primary text-white overflow-hidden mb-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative h-96 md:h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer"
                onClick={() => onHorseClick(currentHorse)}
              >
                {currentHorse.image ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">{currentHorse.image}</span>
                  </div>
                ) : (
                  <span className="text-white text-9xl opacity-50">🐴</span>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary p-4 hover:bg-gray-100 transition-colors duration-200 z-10"
              aria-label="Previous horse"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary p-4 hover:bg-gray-100 transition-colors duration-200 z-10"
              aria-label="Next horse"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Content side */}
          <div>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
              >
                <div className="mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider opacity-90">
                    Featured Horse
                  </span>
                </div>

                <h2 className="text-5xl font-bold mb-4">{currentHorse.name}</h2>

                <div className="flex items-center gap-4 mb-6 text-lg opacity-90">
                  <span className="font-semibold">{currentHorse.breed}</span>
                  <span>•</span>
                  <span>{currentHorse.age} years old</span>
                  <span>•</span>
                  <span>{currentHorse.color}</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-2 bg-white text-primary text-sm font-bold uppercase tracking-wide">
                    {currentHorse.experienceLevel}
                  </span>
                  <span
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wide ${
                      currentHorse.available
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {currentHorse.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>

                <p className="text-xl mb-6 leading-relaxed opacity-90">
                  {currentHorse.personality}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-3 opacity-90">
                    Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentHorse.disciplines.map((discipline) => (
                      <div
                        key={discipline}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white"
                      >
                        {currentHorse.disciplineIcons &&
                          currentHorse.disciplineIcons[discipline] && (
                            <span className="text-base">
                              {currentHorse.disciplineIcons[discipline]}
                            </span>
                          )}
                        <span className="font-semibold">{discipline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onHorseClick(currentHorse)}
                  className="bg-white text-primary px-8 py-4 font-bold hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  View Full Profile
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {horses.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-12'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to horse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHorsesCarousel;
