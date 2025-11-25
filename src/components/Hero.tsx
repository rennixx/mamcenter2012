import { type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Button from './Button';

export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: ReactNode;
  primaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  height?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
  showScrollIndicator?: boolean;
  parallax?: boolean;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  overlayOpacity = 50,
  children,
  primaryCta,
  secondaryCta,
  height = 'large',
  alignment = 'center',
  showScrollIndicator = false,
  parallax = false,
}: HeroProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const heightClasses = {
    small: 'min-h-[50vh]',
    medium: 'min-h-[70vh]',
    large: 'min-h-[90vh]',
    full: 'min-h-screen',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: parallax ? y : 0,
          }}
        />
      )}

      {/* Background Video */}
      {backgroundVideo && (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: parallax ? y : 0 }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </motion.video>
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-navy-900"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`flex flex-col gap-6 md:gap-8 ${alignmentClasses[alignment]}`}
        >
          <h1 className="hero-title">{title}</h1>
          
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}

          {children}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={primaryCta.onClick}
                >
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={secondaryCta.onClick}
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
        >
          <span className="text-sm font-medium tracking-wider uppercase">
            Scroll
          </span>
          <FaChevronDown className="text-2xl animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
