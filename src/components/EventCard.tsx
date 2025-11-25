import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaUsers, FaTrophy } from 'react-icons/fa';

export interface EventCardProps {
  eventName: string;
  eventType: 'show' | 'competition' | 'clinic' | 'fundraiser' | 'social';
  date: Date;
  endDate?: Date;
  time: string;
  location: string;
  description: string;
  entryFee?: number;
  spectatorInfo: string;
  isFeatured?: boolean;
  registrationDeadline?: Date;
  spotsAvailable?: number;
  index?: number;
  onLearnMore?: () => void;
  onRegister?: () => void;
}

const EventCard = ({
  eventName,
  eventType,
  date,
  endDate,
  time,
  location,
  description,
  entryFee,
  spectatorInfo,
  isFeatured = false,
  registrationDeadline,
  spotsAvailable,
  index = 0,
  onLearnMore,
  onRegister,
}: EventCardProps) => {
  const getTypeColor = () => {
    switch (eventType) {
      case 'competition':
        return 'bg-primary text-white';
      case 'show':
        return 'bg-blue-500 text-white';
      case 'clinic':
        return 'bg-green-500 text-white';
      case 'fundraiser':
        return 'bg-purple-500 text-white';
      case 'social':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = () => {
    switch (eventType) {
      case 'competition':
      case 'show':
        return <FaTrophy />;
      default:
        return <FaCalendarAlt />;
    }
  };

  const formatDate = (dateObj: Date) => {
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatMonth = (dateObj: Date) => {
    return dateObj.toLocaleDateString('en-US', { month: 'short' });
  };

  const formatDay = (dateObj: Date) => {
    return dateObj.getDate();
  };

  const isPastEvent = date < new Date();
  const isRegistrationClosed = registrationDeadline && registrationDeadline < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative bg-white border-l-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
        isFeatured ? 'border-l-8 border-primary ring-2 ring-primary/20' : 'border-primary'
      }`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-wide">
          Featured Event
        </div>
      )}

      {/* Past event overlay */}
      {isPastEvent && (
        <div className="absolute top-0 left-0 bg-gray-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide z-10">
          Past Event
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex gap-6 flex-1">
          {/* Calendar icon box */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-primary text-white flex flex-col items-center justify-center">
              <div className="text-xs font-bold uppercase">{formatMonth(date)}</div>
              <div className="text-3xl font-bold">{formatDay(date)}</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            {/* Event type badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wide ${getTypeColor()}`}>
                {getTypeIcon()}
                {eventType}
              </span>
              {spotsAvailable !== undefined && spotsAvailable > 0 && (
                <span className="text-xs font-semibold text-green-600">
                  {spotsAvailable} spots left
                </span>
              )}
              {spotsAvailable === 0 && (
                <span className="text-xs font-semibold text-red-600">
                  Fully Booked
                </span>
              )}
            </div>

            {/* Event name */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
              {eventName}
            </h3>

            {/* Date and time */}
            <div className="flex items-start gap-3 mb-2">
              <FaCalendarAlt className="text-primary mt-1 flex-shrink-0" />
              <div className="text-sm">
                <div className="font-semibold text-gray-700">
                  {formatDate(date)}
                  {endDate && ` - ${formatDate(endDate)}`}
                </div>
                <div className="text-gray-600">{time}</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 mb-3">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-700">{location}</div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

            {/* Info row */}
            <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-gray-200">
              {/* Entry fee */}
              {entryFee !== undefined && (
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-primary" />
                  <span className="text-sm font-semibold text-gray-700">
                    {entryFee === 0 ? 'Free' : `$${entryFee}`}
                  </span>
                </div>
              )}

              {/* Spectator info */}
              <div className="flex items-center gap-2">
                <FaUsers className="text-primary" />
                <span className="text-sm text-gray-600">{spectatorInfo}</span>
              </div>
            </div>

            {/* Spacer to push buttons to bottom */}
            <div className="flex-1"></div>

            {/* Registration deadline */}
            {registrationDeadline && !isPastEvent && (
              <div className="mb-4">
                <span className={`text-xs font-semibold ${
                  isRegistrationClosed ? 'text-red-600' : 'text-orange-600'
                }`}>
                  Registration {isRegistrationClosed ? 'closed' : `deadline: ${formatDate(registrationDeadline)}`}
                </span>
              </div>
            )}

            {/* Action buttons - now at the bottom */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {!isPastEvent && (
                <button
                  onClick={onRegister}
                  disabled={spotsAvailable === 0 || isRegistrationClosed}
                  className={`px-6 py-2 font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
                    spotsAvailable === 0 || isRegistrationClosed
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                  }`}
                >
                  {spotsAvailable === 0 ? 'Fully Booked' : isRegistrationClosed ? 'Registration Closed' : 'Register Now'}
                </button>
              )}
              <button
                onClick={onLearnMore}
                className="px-6 py-2 font-bold uppercase text-sm tracking-wide bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line animation */}
      <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default EventCard;
