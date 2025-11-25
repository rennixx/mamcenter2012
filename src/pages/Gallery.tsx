import { motion } from 'framer-motion';
import { FaImages, FaHorse, FaBuilding, FaTrophy, FaGraduationCap, FaUsers } from 'react-icons/fa';
import {
  Hero,
  Footer,
  ScrollProgress,
  BackToTop,
  PageSection,
} from '../components';
import NavbarAlt from '../components/NavbarAlt';
import backgroundVideo from '../assets/background.mp4';

const Gallery = () => {
  // Navigation links
  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Facilities', href: '/#facilities' },
    { label: 'Our Horses', href: '/#horses' },
    { label: 'Classes', href: '/#classes' },
    { label: 'Events', href: '/#events' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/#contact' },
  ];

  // Footer sections
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '/#about' },
        { label: 'Services', href: '/#services' },
        { label: 'Our Horses', href: '/#horses' },
        { label: 'Classes & Schedule', href: '/#classes' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { label: 'Facilities', href: '/#facilities' },
        { label: 'Events', href: '/#events' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Get In Touch', href: '/#contact' },
        { label: 'Visit Us', href: '/#contact' },
      ],
    },
  ];

  const socialLinks = [
    { platform: 'facebook' as const, url: '#', href: '#' },
    { platform: 'instagram' as const, url: '#', href: '#' },
    { platform: 'twitter' as const, url: '#', href: '#' },
  ];

  // Gallery categories
  const categories = [
    'All',
    'Horses',
    'Facilities',
    'Events',
    'Training',
    'Community',
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <NavbarAlt 
        links={navLinks} 
        ctaText="Contact Us" 
        ctaHref="/#contact" 
        currentPage="/gallery"
      />

      {/* Hero Section */}
      <section id="hero" style={{ backgroundColor: '#001F3F' }}>
        <Hero
          title="Gallery"
          subtitle="Explore our facility, horses, and community moments"
          height="medium"
          backgroundVideo={backgroundVideo}
          overlay={true}
          overlayOpacity={50}
        />
      </section>

      {/* Gallery Categories Filter */}
      <PageSection
        id="gallery-filters"
        title="Browse Our Collection"
        subtitle="Filter by category to find what you're looking for"
        bgColor="white"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Albums */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Our Horses', count: 45, Icon: FaHorse },
            { title: 'Facilities & Grounds', count: 32, Icon: FaBuilding },
            { title: 'Events & Competitions', count: 28, Icon: FaTrophy },
            { title: 'Training Sessions', count: 38, Icon: FaGraduationCap },
            { title: 'Community Moments', count: 52, Icon: FaUsers },
          ].map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <FaImages className="text-6xl text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                <album.Icon className="text-8xl text-primary/30 absolute group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {album.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {album.count} photos
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-primary font-semibold hover:underline">
                    View Album →
                  </button>
                  <span className="text-sm text-gray-500">Click to explore</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* Featured Collections Section */}
      <PageSection
        id="featured"
        title="Featured Collections"
        subtitle="Highlighted moments from our community"
        bgColor="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {['Championship Events', 'Training Sessions', 'Community Gatherings'].map(
            (collection, index) => (
              <motion.div
                key={collection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="bg-gray-300 h-64 flex items-center justify-center overflow-hidden">
                  <FaImages className="text-6xl text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">
                    {collection}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A curated collection of memorable moments from our {collection.toLowerCase()}.
                  </p>
                  <button className="text-primary font-semibold hover:underline">
                    View Collection →
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </PageSection>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer
        sections={footerSections}
        socialLinks={socialLinks}
        copyright="© 2025 MAM Center. All rights reserved."
      />
    </div>
  );
};

export default Gallery;
