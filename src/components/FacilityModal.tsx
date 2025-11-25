import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export interface FacilityDetails {
  name: string;
  type: string;
  specifications: string;
  image?: string;
  icon: ReactNode;
  features: string[];
  description: string;
  capacity?: string;
  dimensions?: string;
  surface?: string;
  amenities?: string[];
}

interface FacilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  facility: FacilityDetails | null;
}

const FacilityModal = ({ isOpen, onClose, facility }: FacilityModalProps) => {
  if (!facility) return null;

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
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
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
              <div className="relative h-80 bg-gray-300 flex items-center justify-center">
                {facility.image ? (
                  <span className="text-gray-500 text-lg">{facility.image}</span>
                ) : (
                  <div className="text-primary text-8xl opacity-30">{facility.icon}</div>
                )}
                {/* Navy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{facility.icon}</div>
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {facility.type}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{facility.name}</h2>
                  <p className="text-lg font-mono opacity-90">{facility.specifications}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{facility.description}</p>
                </div>

                {/* Specifications grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {facility.dimensions && (
                    <div className="bg-gray-50 p-6 border-l-4 border-primary">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Dimensions
                      </h4>
                      <p className="text-xl font-bold text-gray-900">{facility.dimensions}</p>
                    </div>
                  )}
                  {facility.capacity && (
                    <div className="bg-gray-50 p-6 border-l-4 border-primary">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Capacity
                      </h4>
                      <p className="text-xl font-bold text-gray-900">{facility.capacity}</p>
                    </div>
                  )}
                  {facility.surface && (
                    <div className="bg-gray-50 p-6 border-l-4 border-primary">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Surface
                      </h4>
                      <p className="text-xl font-bold text-gray-900">{facility.surface}</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                {facility.amenities && facility.amenities.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Amenities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {facility.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-primary text-white p-6 text-center">
                <p className="text-lg mb-4">
                  Interested in using this facility? Contact us to schedule a tour or book your visit.
                </p>
                <button
                  onClick={onClose}
                  className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FacilityModal;
