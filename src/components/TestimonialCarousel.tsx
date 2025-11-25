import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

export interface TestimonialItem {
  clientName: string;
  clientRole: string;
  reviewText: string;
  clientPhoto?: string;
  rating?: number;
  date?: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative bg-gray-50 p-8 md:p-12 shadow-lg">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-6xl text-primary/20 absolute top-8 left-8" />

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Testimonial Quote */}
            <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed max-w-3xl mx-auto">
              "{current.reviewText}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-4">
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 border-4 border-primary/20">
                {current.clientPhoto ? (
                  <img
                    src={current.clientPhoto}
                    alt={current.clientName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl">
                    👤
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <div>
                <p className="font-bold text-primary text-lg">{current.clientName}</p>
                <p className="text-gray-600 text-sm">{current.clientRole}</p>
              </div>

              {/* Rating Stars */}
              {current.rating && (
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < current.rating! ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center"
        aria-label="Previous testimonial"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center"
        aria-label="Next testimonial"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
