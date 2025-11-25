import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface PageSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bgColor?: 'white' | 'gray' | 'navy';
  className?: string;
}

const PageSection = ({
  id,
  title,
  subtitle,
  children,
  bgColor = 'white',
  className = '',
}: PageSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-navy-900 text-white',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColors[bgColor]} ${className}`}
      ref={ref}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              bgColor === 'navy' ? 'text-white' : 'text-primary'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                bgColor === 'navy' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Section Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageSection;
