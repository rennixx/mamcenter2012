import { motion } from 'framer-motion';
import { FaClock, FaUserGraduate, FaDollarSign, FaUsers } from 'react-icons/fa';

export interface ClassCardProps {
  className: string;
  type: 'beginner' | 'intermediate' | 'advanced';
  day: string;
  startTime: string;
  endTime: string;
  instructor: string;
  duration: string;
  availableSpots: number;
  totalSpots: number;
  pricePerClass: number;
  description?: string;
  index?: number;
  onEnroll?: () => void;
}

const ClassCard = ({
  className,
  type,
  day,
  startTime,
  endTime,
  instructor,
  duration,
  availableSpots,
  totalSpots,
  pricePerClass,
  description,
  index = 0,
  onEnroll,
}: ClassCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'beginner':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'intermediate':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'advanced':
        return 'bg-primary text-white border-primary';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getSpotsColor = () => {
    if (availableSpots === 0) return 'text-red-600';
    if (availableSpots <= 2) return 'text-orange-600';
    return 'text-green-600';
  };

  const isFullyBooked = availableSpots === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header with type badge */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
              {className}
            </h3>
            <span
              className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide border ${getTypeColor()}`}
            >
              {type}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary mb-1">
              ${pricePerClass}
            </div>
            <div className="text-xs text-gray-500">per class</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Day & Time */}
          <div className="flex items-start gap-3">
            <FaClock className="text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-gray-700">{day}</div>
              <div className="text-sm text-gray-600">
                {startTime} - {endTime}
              </div>
              <div className="text-xs text-gray-500">{duration}</div>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-start gap-3">
            <FaUserGraduate className="text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-gray-700">Instructor</div>
              <div className="text-sm text-gray-600">{instructor}</div>
            </div>
          </div>

          {/* Available spots */}
          <div className="flex items-start gap-3">
            <FaUsers className="text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-gray-700">Availability</div>
              <div className={`text-sm font-bold ${getSpotsColor()}`}>
                {isFullyBooked ? (
                  'Fully Booked'
                ) : (
                  <>
                    {availableSpots} {availableSpots === 1 ? 'spot' : 'spots'} left
                  </>
                )}
              </div>
              <div className="text-xs text-gray-500">
                {totalSpots - availableSpots}/{totalSpots} enrolled
              </div>
            </div>
          </div>

          {/* Price breakdown */}
          <div className="flex items-start gap-3">
            <FaDollarSign className="text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-gray-700">Pricing</div>
              <div className="text-sm text-gray-600">
                ${pricePerClass}/class
              </div>
              <div className="text-xs text-gray-500">Drop-in rate</div>
            </div>
          </div>
        </div>

        {/* Enroll button */}
        <button
          onClick={onEnroll}
          disabled={isFullyBooked}
          className={`w-full py-3 px-6 font-bold uppercase tracking-wide transition-all duration-300 ${
            isFullyBooked
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
          }`}
        >
          {isFullyBooked ? 'Fully Booked' : 'Enroll Now'}
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ClassCard;
