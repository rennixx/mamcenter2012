import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  certifications?: string[];
  linkedIn?: string;
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  certifications = [],
  linkedIn,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
            👤
          </div>
        )}
        {/* Navy overlay on hover */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{role}</p>
          </div>
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;
