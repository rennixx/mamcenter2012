import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaUsers, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLink } from 'react-icons/fa';
import type { EventCardProps } from './EventCard';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventCardProps | null;
}

const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  if (!event) return null;

  const formatDate = (dateObj: Date) => {
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTypeColor = () => {
    switch (event.eventType) {
      case 'competition':
        return 'bg-primary';
      case 'show':
        return 'bg-blue-500';
      case 'clinic':
        return 'bg-green-500';
      case 'fundraiser':
        return 'bg-purple-500';
      case 'social':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const isPastEvent = event.date < new Date();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${event.eventName} at MAM Center!`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        alert('Copy this link to share on Instagram: ' + url);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
  };

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

              {/* Header */}
              <div className={`${getTypeColor()} text-white p-8`}>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-sm font-bold uppercase tracking-wide">
                    {event.eventType}
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">{event.eventName}</h2>
                <div className="flex flex-wrap items-center gap-6 text-lg opacity-90">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>
                      {formatDate(event.date)}
                      {event.endDate && ` - ${formatDate(event.endDate)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Quick info grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 border-l-4 border-primary">
                    <div className="flex items-center gap-3 mb-2">
                      <FaMapMarkerAlt className="text-primary text-xl" />
                      <h4 className="text-sm font-semibold text-gray-500 uppercase">Location</h4>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{event.location}</p>
                  </div>

                  {event.entryFee !== undefined && (
                    <div className="bg-gray-50 p-6 border-l-4 border-primary">
                      <div className="flex items-center gap-3 mb-2">
                        <FaDollarSign className="text-primary text-xl" />
                        <h4 className="text-sm font-semibold text-gray-500 uppercase">Entry Fee</h4>
                      </div>
                      <p className="text-lg font-bold text-gray-900">
                        {event.entryFee === 0 ? 'Free' : `$${event.entryFee}`}
                      </p>
                    </div>
                  )}

                  <div className="bg-gray-50 p-6 border-l-4 border-primary">
                    <div className="flex items-center gap-3 mb-2">
                      <FaUsers className="text-primary text-xl" />
                      <h4 className="text-sm font-semibold text-gray-500 uppercase">Spectators</h4>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{event.spectatorInfo}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Join us for an exciting event at MAM Center! This {event.eventType} is designed to bring together riders of all levels and celebrate our equestrian community. 
                    Whether you're competing, learning, or just watching, there's something for everyone.
                  </p>
                </div>

                {/* Additional info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">
                        All participants must sign a waiver before the event
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">
                        Please arrive 30 minutes before your scheduled time
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">
                        Parking is available on-site with dedicated trailer spaces
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">
                        Refreshments will be available at our café
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">
                        Event times are in {Intl.DateTimeFormat().resolvedOptions().timeZone} timezone
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Registration deadline */}
                {event.registrationDeadline && !isPastEvent && (
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                    <h4 className="font-bold text-orange-900 mb-2">Registration Deadline</h4>
                    <p className="text-orange-800">
                      Please register by {formatDate(event.registrationDeadline)} to secure your spot.
                    </p>
                  </div>
                )}

                {/* Spots availability */}
                {event.spotsAvailable !== undefined && !isPastEvent && (
                  <div className={`border-l-4 p-6 mb-8 ${
                    event.spotsAvailable === 0
                      ? 'bg-red-50 border-red-500'
                      : event.spotsAvailable <= 5
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-green-50 border-green-500'
                  }`}>
                    <h4 className={`font-bold mb-2 ${
                      event.spotsAvailable === 0
                        ? 'text-red-900'
                        : event.spotsAvailable <= 5
                        ? 'text-yellow-900'
                        : 'text-green-900'
                    }`}>
                      {event.spotsAvailable === 0 ? 'Event Full' : 'Spots Available'}
                    </h4>
                    <p className={
                      event.spotsAvailable === 0
                        ? 'text-red-800'
                        : event.spotsAvailable <= 5
                        ? 'text-yellow-800'
                        : 'text-green-800'
                    }>
                      {event.spotsAvailable === 0
                        ? 'This event is currently fully booked. Contact us to join the waitlist.'
                        : `Only ${event.spotsAvailable} spots remaining! Register soon to secure your place.`}
                    </p>
                  </div>
                )}

                {/* Share section */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Share This Event</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      <FaFacebook className="text-xl" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors duration-200"
                    >
                      <FaTwitter className="text-xl" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors duration-200"
                    >
                      <FaInstagram className="text-xl" />
                      Instagram
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-colors duration-200"
                    >
                      <FaLink className="text-xl" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`${getTypeColor()} text-white p-6 text-center`}>
                {!isPastEvent ? (
                  <>
                    <p className="text-lg mb-4">
                      Ready to join this event? Register now or contact us for more information!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {event.onRegister && (
                        <button
                          onClick={() => {
                            if (event.onRegister) event.onRegister();
                            onClose();
                          }}
                          disabled={event.spotsAvailable === 0}
                          className={`px-8 py-3 font-bold ${
                            event.spotsAvailable === 0
                              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                              : 'bg-white text-primary hover:bg-gray-100'
                          } transition-colors duration-200`}
                        >
                          {event.spotsAvailable === 0 ? 'Fully Booked' : 'Register Now'}
                        </button>
                      )}
                      <button
                        onClick={onClose}
                        className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 font-bold transition-colors duration-200 border-2 border-white"
                      >
                        Close
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-lg mb-4">
                      This event has already taken place. Check out our upcoming events!
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
