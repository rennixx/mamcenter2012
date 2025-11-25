import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export type CardVariant = 'default' | 'service' | 'testimonial' | 'horse';

export interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  image?: string;
  imageAlt?: string;
}

const Card = ({
  variant = 'default',
  children,
  className = '',
  hoverable = true,
  image,
  imageAlt = '',
}: CardProps) => {
  const variantClasses = {
    default: 'card-base',
    service: 'card-service',
    testimonial: 'card-testimonial',
    horse: 'card-horse',
  };

  const hoverClass = hoverable ? 'card-hover' : '';

  const combinedClasses = `
    ${variantClasses[variant]}
    ${hoverClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={combinedClasses}
    >
      {image && (
        <div className="overflow-hidden rounded-t-xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={imageAlt}
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
      )}
      <div className={image ? 'p-6' : ''}>{children}</div>
    </motion.div>
  );
};

// Service Card Component
export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  className = '',
}: ServiceCardProps) => {
  return (
    <Card variant="service" className={className}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

// Testimonial Card Component
export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className = '',
}: TestimonialCardProps) => {
  return (
    <Card variant="testimonial" hoverable={false} className={className}>
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 italic text-lg leading-relaxed">
          "{quote}"
        </p>
        <div className="flex items-center gap-3 mt-2">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-navy-900">{author}</p>
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Horse Card Component
export interface HorseCardProps {
  image: string;
  name: string;
  breed?: string;
  description: string;
  className?: string;
}

export const HorseCard = ({
  image,
  name,
  breed,
  description,
  className = '',
}: HorseCardProps) => {
  return (
    <Card variant="horse" image={image} imageAlt={name} className={className}>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{name}</h3>
      {breed && <p className="text-sm text-primary font-semibold mb-3">{breed}</p>}
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default Card;
