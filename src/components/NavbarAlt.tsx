import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import logoImage from '../assets/logo.png';

export interface NavLink {
  label: string;
  href: string; // Anchor links like #home, #about, etc.
}

export interface NavbarAltProps {
  logo?: string;
  logoText?: string;
  links: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  currentPage?: string; // Current page route for active state (e.g., '/gallery')
}

const NavbarAlt = ({
  logo = logoImage,
  logoText = 'MAM Center',
  links,
  ctaText = 'Contact Us',
  ctaHref = '#contact',
  onCtaClick,
  currentPage,
}: NavbarAltProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Calculate initial dark background state to prevent flash
  const getInitialDarkBackground = () => {
    if (typeof window === 'undefined') return false;
    
    // Check if we're at the top of the page
    if (window.scrollY < 100) {
      // Look for hero section
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const bgColor = window.getComputedStyle(heroElement).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const [r, g, b] = rgb.map(Number);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          return luminance < 0.5;
        }
      }
    }
    return false;
  };
  
  const [isDarkBackground, setIsDarkBackground] = useState(getInitialDarkBackground);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect scroll for navbar shadow and check background color
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // If active section is hero, always use dark background (white logo)
      if (activeSection === 'hero') {
        setIsDarkBackground(true);
        return;
      }
      
      // Detect if we're over a dark background
      // Check the active section's background color
      let currentSection = document.getElementById(activeSection);
      
      // If no active section yet, check for hero section
      if (!currentSection) {
        currentSection = document.getElementById('hero');
      }
      
      if (currentSection) {
        const bgColor = window.getComputedStyle(currentSection).backgroundColor;
        // Check if background is dark (navy blue or similar)
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const [r, g, b] = rgb.map(Number);
          // Calculate luminance - if it's low, it's a dark background
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsDarkBackground(luminance < 0.5);
        }
      } else {
        // If at top or no section detected, assume light background
        setIsDarkBackground(false);
      }
    };

    // Check immediately on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check for hero section first (common on all pages)
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Hero is active when its bottom is still visible in the upper portion
        // Use 300px threshold for faster response when scrolling back up
        if (rect.top <= 100 && rect.bottom > 300) {
          setActiveSection('hero');
          return;
        }
      }

      // Check all sections from navigation links
      const sections = links.map((link) => {
        const id = link.href.replace('#', '').replace(/^\//, '');
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
      } else {
        // If no navigation section found, look for any section on the page
        const allSections = document.querySelectorAll('section[id], div[id]');
        for (const section of allSections) {
          // Skip root and other container elements
          if (section.id === 'root' || section.id === 'hero') continue;
          
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section.id);
            return;
          }
        }
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
    // If we're on a specific page (like /gallery), only that page link should be active
    if (currentPage && currentPage !== '/') {
      // For page routes like /gallery, check against currentPage
      if (href.startsWith('/') && !href.includes('#')) {
        return currentPage === href;
      }
      // On a non-home page, no anchor links should be active
      return false;
    }
    
    // On home page, check anchor links for active section
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      return activeSection === id;
    }
    
    // For page routes on home, check if it matches
    if (href.startsWith('/')) {
      return currentPage === href;
    }
    
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Logo/Brand - Outside the container on the left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group flex-shrink-0 -my-4 md:-my-6 lg:-my-8"
          >
            <img
              src={logo}
              alt={logoText}
              className={`h-28 md:h-36 lg:h-44 w-auto transition-all duration-100 group-hover:scale-105 ${
                isDarkBackground ? 'brightness-0 invert' : ''
              }`}
            />
          </a>

          {/* Navigation Container - Rounded background */}
          <div
            className={`bg-white shadow-lg transition-all duration-300 flex-grow ${
              isScrolled ? 'shadow-xl' : 'shadow-md'
            }`}
          >
            <div className="flex items-center justify-between px-6 md:px-8 h-12 md:h-14">
              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center gap-8 mx-auto">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      // Only prevent default and scroll for anchor links
                      if (link.href.startsWith('#') || link.href.includes('/#')) {
                        e.preventDefault();
                        if (link.href.includes('/#')) {
                          // Handle cross-page anchor links (e.g., /#about)
                          window.location.href = link.href;
                        } else {
                          scrollToSection(link.href);
                        }
                      }
                      // For regular page routes (e.g., /gallery), let the browser handle it
                    }}
                    className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-primary relative py-2 ${
                      isActive(link.href) ? 'text-primary' : 'text-navy-900'
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Right Side - CTA Button (Desktop) */}
              <div className="hidden lg:flex items-center gap-4">
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
                className="lg:hidden p-2 text-navy-900 hover:text-primary transition-colors ml-auto"
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
        </div>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-40 pt-24"
          >
            <div className="container-custom h-full overflow-y-auto pb-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      // Only prevent default and scroll for anchor links
                      if (link.href.startsWith('#') || link.href.includes('/#')) {
                        e.preventDefault();
                        if (link.href.includes('/#')) {
                          // Handle cross-page anchor links (e.g., /#about)
                          window.location.href = link.href;
                        } else {
                          scrollToSection(link.href);
                        }
                      }
                      // For regular page routes (e.g., /gallery), let the browser handle it
                    }}
                    className={`text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/5 border-l-4 border-primary'
                        : 'text-navy-900 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                {ctaText && (
                  <div className="mt-4 px-6">
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
                      <Button variant="primary" size="lg" fullWidth>
                        {ctaText}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarAlt;
