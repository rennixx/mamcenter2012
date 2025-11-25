import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean; // For external links that open in new tab
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  href: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
}

export interface FooterProps {
  logo?: string;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  copyright?: string;
  legalLinks?: FooterLink[];
}

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

const Footer = ({
  logo,
  logoText = 'MAM Center',
  description = 'Excellence in equestrian care and services.',
  sections = [],
  contactInfo,
  socialLinks = [],
  copyright = `© ${new Date().getFullYear()} MAM Center. All rights reserved.`,
  legalLinks = [],
}: FooterProps) => {
  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block"
            >
              {logo ? (
                <img src={logo} alt={logoText} className="h-10 mb-4" />
              ) : (
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                  {logoText}
                </h3>
              )}
            </a>
            <p className="text-gray-300 mb-6">{description}</p>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={social.platform}
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          {contactInfo && (
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                {contactInfo.phone && (
                  <li className="flex items-start gap-3">
                    <FaPhone className="text-primary mt-1 flex-shrink-0" />
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                )}
                {contactInfo.email && (
                  <li className="flex items-start gap-3">
                    <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                )}
                {contactInfo.address && (
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {copyright}
            </p>
            {legalLinks.length > 0 && (
              <div className="flex gap-4 flex-wrap justify-center">
                {legalLinks.map((link, index) => (
                  <span key={link.href} className="flex items-center gap-4">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (!link.external) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">|</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
