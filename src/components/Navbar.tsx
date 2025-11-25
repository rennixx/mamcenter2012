import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

export interface NavLink {
  label: string;
  href: string; // Now using anchor links like #home, #about, etc.
}

export interface NavbarProps {
  logo?: string;
  logoText?: string;
  links: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const Navbar = ({
  logo,
  logoText = 'MAM Center',
  links,
  ctaText = 'Contact Us',
  ctaHref = '#contact',
  onCtaClick,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently in view
      const current = sections.find(
        (section) => section && section.top <= 100 && section.bottom > 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <nav
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 md:h-10 transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <span className="text-2xl md:text-3xl font-bold text-primary transition-colors duration-300 group-hover:text-primary-light">
                {logoText}
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-primary relative ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-navy-900'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            {ctaText && (
              <a
                href={ctaHref}
                onClick={(e) => {
                  e.preventDefault();
                  if (onCtaClick) {
                    onCtaClick();
                  } else {
                    scrollToSection(ctaHref);
                  }
                }}
              >
                <Button variant="primary" size="sm">
                  {ctaText}
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-navy-900 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/5 border-l-4 border-primary'
                      : 'text-navy-900 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {ctaText && (
                <div className="mt-2 px-4">
                  <a
                    href={ctaHref}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCtaClick) {
                        onCtaClick();
                      } else {
                        scrollToSection(ctaHref);
                      }
                    }}
                  >
                    <Button variant="primary" size="md" fullWidth>
                      {ctaText}
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
