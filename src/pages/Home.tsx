import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaHorse,
  FaTrophy,
  FaAward,
  FaHeart,
  FaUsers,
  FaStar,
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaWarehouse,
  FaMountain,
  FaParking,
  FaCoffee,
  FaTree,
  FaRoad,
  FaChess,
  FaRunning,
  FaHiking,
  FaMedal,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from 'react-icons/fa';
import {
  Hero,
  Footer,
  Button,
  ScrollProgress,
  BackToTop,
  PageSection,
  TeamMember,
  ValueCard,
  ServiceDetailCard,
  FacilityCard,
  FacilityModal,
  HorseProfileCard,
  HorseModal,
  FeaturedHorsesCarousel,
  ClassCard,
  CalendarView,
  EventCard,
  EventModal,
  PricingCard,
  PricingFAQ,
} from '../components';
import type { FacilityDetails, HorseDetails, ClassCardProps, EventCardProps, PricingCardProps, PricingFAQProps } from '../components';
import NavbarAlt from '../components/NavbarAlt';
import backgroundVideo from '../assets/background.mp4';

const Home = () => {
  // Modal state for facility details
  const [selectedFacility, setSelectedFacility] = useState<FacilityDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFacilityClick = (facility: FacilityDetails) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFacility(null), 300);
  };

  // Facilities data
  const facilities: FacilityDetails[] = [
    {
      name: 'Indoor Arena',
      type: 'Training Facility',
      specifications: '60m x 40m | Climate Controlled | All-Weather',
      icon: <FaWarehouse />,
      features: [
        'Climate-controlled environment for year-round training',
        'Professional-grade footing with excellent drainage',
        'High-quality lighting system for evening sessions',
        'Sound system for dressage and freestyle performances',
        'Mirrors along one wall for training feedback',
        'Viewing gallery for spectators and coaches',
      ],
      description:
        'Our state-of-the-art indoor arena provides the perfect environment for training and competitions regardless of weather conditions. The climate-controlled facility ensures comfort for both horses and riders year-round.',
      dimensions: '60m x 40m',
      capacity: '50 spectators',
      surface: 'Premium sand and fiber mix',
      amenities: [
        'Heated in winter, cooled in summer',
        'LED lighting throughout',
        'Professional sound system',
        'Wall-mounted mirrors',
      ],
    },
    {
      name: 'Outdoor Arena',
      type: 'Competition Facility',
      specifications: '100m x 60m | Sand Footing | Competition Ready',
      icon: <FaMountain />,
      features: [
        'Regulation-size competition arena',
        'Premium sand and fiber footing',
        'Professional jump equipment',
        'Permanent dressage markers',
        'Spectator seating for 200+',
        'Excellent natural drainage system',
      ],
      description:
        'Our expansive outdoor arena meets international competition standards and hosts regular shows and events. The premium footing provides excellent cushioning and traction for all disciplines.',
      dimensions: '100m x 60m',
      capacity: '200+ spectators',
      surface: 'Sand and synthetic fiber blend',
      amenities: [
        'Professional jump equipment',
        'Permanent dressage arena',
        'Stadium lighting',
        'Announcer booth',
      ],
    },
    {
      name: 'Cross-Country Course',
      type: 'Eventing Facility',
      specifications: '2.5km | Multiple Levels | Natural Obstacles',
      icon: <FaMountain />,
      features: [
        'Multiple course levels (Beginner to Advanced)',
        'Natural and constructed obstacles',
        'Water complex with multiple options',
        'Bank complexes and ditches',
        'Regular course updates and maintenance',
        'Safety features including breakaway fences',
      ],
      description:
        'Our cross-country course winds through beautiful natural terrain, featuring a variety of obstacles suitable for all levels. The course is meticulously maintained and regularly updated with new challenges.',
      dimensions: '2.5km total length',
      capacity: 'Multiple riders',
      surface: 'Natural grass terrain',
      amenities: [
        'Water complex',
        'Bank obstacles',
        'Ditch combinations',
        'Corner fences',
      ],
    },
    {
      name: 'Stable Facilities',
      type: 'Boarding',
      specifications: '40 Stalls | Climate Controlled | Premium Care',
      icon: <FaWarehouse />,
      features: [
        '40 spacious 12x12 stalls',
        'Climate-controlled barn',
        'Individual feed and water systems',
        'Rubber matting with premium bedding',
        'Tack storage for each boarder',
        '24/7 security and monitoring',
      ],
      description:
        'Our modern stable facilities provide a safe, comfortable home for your horse. Each stall is designed with the horse\'s well-being in mind, featuring excellent ventilation and natural light.',
      dimensions: '12x12 per stall',
      capacity: '40 horses',
      surface: 'Rubber mats with premium bedding',
      amenities: [
        'Individual tack lockers',
        'Heated water in winter',
        'Fly control system',
        'Security cameras',
      ],
    },
    {
      name: 'Paddocks & Grazing Areas',
      type: 'Turnout',
      specifications: '50+ Acres | Lush Pastures | Secure Fencing',
      icon: <FaTree />,
      features: [
        'Over 50 acres of lush pastures',
        'Individual and group turnout options',
        'Secure board fencing throughout',
        'Automatic water systems',
        'Shelters in each paddock',
        'Rotational grazing management',
      ],
      description:
        'Extensive turnout areas provide horses with plenty of room to exercise and graze naturally. Our pasture management program ensures healthy grass year-round.',
      dimensions: '50+ acres total',
      capacity: 'Multiple paddocks',
      surface: 'Natural grass pastures',
      amenities: [
        'Run-in shelters',
        'Automatic waterers',
        'Safe board fencing',
        'Regular pasture rotation',
      ],
    },
    {
      name: 'Training Grounds',
      type: 'Specialized Training',
      specifications: 'Multiple Areas | Various Surfaces | Expert Design',
      icon: <FaRoad />,
      features: [
        'Dedicated lunging arena',
        'Round pen for groundwork',
        'Trail obstacle course',
        'Practice jumping grid area',
        'Flat work training spaces',
        'Young horse development area',
      ],
      description:
        'Specialized training areas designed for various aspects of horse development and rider education. Each area is specifically designed for its intended purpose.',
      dimensions: 'Multiple dedicated areas',
      capacity: 'Various',
      surface: 'Mixed surfaces as appropriate',
      amenities: [
        'Round pen',
        'Lunging ring',
        'Trail obstacles',
        'Jump grids',
      ],
    },
    {
      name: 'Parking Facilities',
      type: 'Visitor Amenities',
      specifications: 'Large Lot | Trailer Parking | Easy Access',
      icon: <FaParking />,
      features: [
        'Ample paved parking',
        'Dedicated trailer parking area',
        'Easy access for large vehicles',
        'Well-lit for evening events',
        'Close proximity to facilities',
        'Disabled parking spaces',
      ],
      description:
        'Our extensive parking facilities can accommodate both daily visitors and large events, with dedicated areas for horse trailers and large vehicles.',
      dimensions: '200+ spaces',
      capacity: '50+ trailers',
      surface: 'Paved',
      amenities: [
        'Trailer turnaround area',
        'Lighting',
        'Disabled access',
        'Event parking zones',
      ],
    },
    {
      name: 'Viewing Areas & Café',
      type: 'Spectator Facilities',
      specifications: 'Covered Seating | Café | Comfortable Viewing',
      icon: <FaCoffee />,
      features: [
        'Covered viewing gallery',
        'Comfortable seating for 100+',
        'Full-service café',
        'Restroom facilities',
        'Climate-controlled lounge area',
        'Free Wi-Fi throughout',
      ],
      description:
        'Our spectator facilities ensure comfort for visitors and families. The café serves refreshments while the viewing areas provide excellent sightlines to all arenas.',
      dimensions: 'Multiple viewing areas',
      capacity: '100+ seated',
      surface: 'Indoor/Outdoor seating',
      amenities: [
        'Full café with seating',
        'Restrooms',
        'Wi-Fi access',
        'Comfortable seating',
      ],
    },
  ];

  // Horse modal state
  const [selectedHorse, setSelectedHorse] = useState<HorseDetails | null>(null);
  const [isHorseModalOpen, setIsHorseModalOpen] = useState(false);
  const [horseFilter, setHorseFilter] = useState('all');

  const handleHorseClick = (horse: HorseDetails) => {
    setSelectedHorse(horse);
    setIsHorseModalOpen(true);
  };

  const closeHorseModal = () => {
    setIsHorseModalOpen(false);
    setTimeout(() => setSelectedHorse(null), 300);
  };

  // Discipline icons mapping
  const disciplineIcons: { [key: string]: React.ReactNode } = {
    Dressage: <FaChess />,
    'Show Jumping': <FaTrophy />,
    'Trail Riding': <FaHiking />,
    Eventing: <FaMedal />,
    'Western Riding': <FaHorse />,
    'Beginner Lessons': <FaStar />,
    'Therapeutic Riding': <FaHeart />,
    'Advanced Training': <FaRunning />,
  };

  // Horse data
  const horses: HorseDetails[] = [
    {
      name: 'Thunder',
      breed: 'Thoroughbred',
      age: 8,
      color: 'Bay',
      height: '16.2 hands',
      weight: '1,200 lbs',
      image: '[Thunder Photo]',
      specialties: [
        'Excellent for intermediate to advanced riders',
        'Responsive to leg aids and voice commands',
        'Thrives in competitive environments',
        'Patient with nervous riders',
      ],
      personality:
        'Thunder is a spirited and athletic horse with a gentle heart. Despite his imposing size, he is incredibly patient and forgiving with riders.',
      fullDescription:
        'Thunder is a stunning bay Thoroughbred with exceptional movement and a willingness to please. Originally off the track, he has been retrained for show jumping and dressage, excelling in both disciplines. His athletic ability combined with his gentle temperament makes him a favorite among our advanced students. Thunder loves to work and enjoys the challenge of new obstacles and movements.',
      disciplines: ['Dressage', 'Show Jumping', 'Eventing'],
      experienceLevel: 'Intermediate to Advanced',
      available: true,
      temperament: 'Spirited yet Gentle',
      training: [
        'FEI-level dressage movements',
        'Jumping up to 3\'6"',
        'Cross-country experienced',
        'Lateral movements mastered',
        'Flying lead changes',
        'Collection and extension',
      ],
      achievements: [
        'Multiple show jumping wins at 3\' level',
        'Dressage scores consistently above 65%',
        'Successfully completed Training level eventing',
        'Champion at local dressage shows',
      ],
      idealFor: [
        'Riders looking to advance their skills',
        'Competition preparation',
        'Students working on collection',
        'Those wanting to learn advanced movements',
      ],
      disciplineIcons,
    },
    {
      name: 'Bella',
      breed: 'Quarter Horse',
      age: 12,
      color: 'Chestnut',
      height: '15.1 hands',
      weight: '1,100 lbs',
      image: '[Bella Photo]',
      specialties: [
        'Perfect for beginner riders',
        'Calm and steady temperament',
        'Great with children',
        'Excellent trail horse',
      ],
      personality:
        'Bella is a sweet, patient mare who loves people and is always eager to please. She has a calm demeanor that puts nervous riders at ease.',
      fullDescription:
        'Bella is the quintessential beginner horse - calm, reliable, and incredibly forgiving. With over 10 years of teaching experience, she knows her job well and takes excellent care of her riders. Bella has taught hundreds of students the basics of riding and continues to be one of our most requested lesson horses. Her smooth gaits and predictable behavior make her perfect for building confidence in new riders.',
      disciplines: ['Beginner Lessons', 'Trail Riding', 'Western Riding'],
      experienceLevel: 'Beginner to Intermediate',
      available: true,
      temperament: 'Calm and Patient',
      training: [
        'Walk, trot, canter basics',
        'Neck reining',
        'Trail obstacles',
        'Ground manners',
        'Loading and trailering',
        'Bathing and grooming patience',
      ],
      achievements: [
        'Taught over 300 students',
        'Perfect safety record',
        'Trail ride champion (most reliable)',
        'Student favorite award winner',
      ],
      idealFor: [
        'First-time riders',
        'Children learning to ride',
        'Nervous adults',
        'Trail riding enthusiasts',
      ],
      disciplineIcons,
    },
    {
      name: 'Duke',
      breed: 'Warmblood',
      age: 10,
      color: 'Dark Bay',
      height: '17.0 hands',
      weight: '1,350 lbs',
      image: '[Duke Photo]',
      specialties: [
        'Advanced dressage movements',
        'Powerful and elegant',
        'Shows great promise in upper levels',
        'Excellent temperament for a stallion',
      ],
      personality:
        'Duke is a magnificent warmblood with powerful movement and an elegant presence. He is intelligent and willing, making him a joy to work with.',
      fullDescription:
        'Duke is our premier dressage horse, with natural talent for collection and extension. His powerful hindquarters and uphill build make him ideal for upper-level dressage work. Despite being a stallion, Duke has impeccable ground manners and is remarkably focused during training sessions. He has competed successfully through Prix St. Georges level and continues to develop his Grand Prix movements.',
      disciplines: ['Dressage', 'Advanced Training'],
      experienceLevel: 'Advanced',
      available: true,
      temperament: 'Focused and Willing',
      training: [
        'Prix St. Georges level dressage',
        'Piaffe and passage (in training)',
        'Tempi changes up to twos',
        'Half-pass at all gaits',
        'Pirouettes',
        'Extended gaits',
      ],
      achievements: [
        'USDF Bronze Medal scores',
        'Regional dressage champion',
        'Multiple 70%+ scores at Third Level',
        'Qualified for regional championships',
      ],
      idealFor: [
        'Advanced dressage riders',
        'Those preparing for competition',
        'Students learning upper-level movements',
        'Experienced riders seeking a challenge',
      ],
      disciplineIcons,
    },
    {
      name: 'Rosie',
      breed: 'Welsh Cob',
      age: 15,
      color: 'Grey',
      height: '14.2 hands',
      weight: '950 lbs',
      image: '[Rosie Photo]',
      specialties: [
        'Excellent with therapeutic riding',
        'Extremely gentle and intuitive',
        'Perfect size for children',
        'Sensitive to rider needs',
      ],
      personality:
        'Rosie is incredibly intuitive and gentle, with a special gift for therapeutic work. She seems to understand when riders need extra patience and care.',
      fullDescription:
        'Rosie is our star therapeutic riding horse, with years of experience working with riders of all abilities. Her calm, patient nature and smooth gaits make her ideal for therapeutic programs. Rosie has an uncanny ability to sense when riders need extra support and adjusts her behavior accordingly. She has helped countless students build confidence and achieve their riding goals.',
      disciplines: ['Therapeutic Riding', 'Beginner Lessons', 'Trail Riding'],
      experienceLevel: 'All Levels',
      available: true,
      temperament: 'Gentle and Intuitive',
      training: [
        'Therapeutic riding certified',
        'Desensitization to equipment',
        'Smooth, steady gaits',
        'Excellent ground manners',
        'Works well with sidewalkers',
        'Mounting block trained',
      ],
      achievements: [
        'PATH Intl. certified therapy horse',
        '10+ years therapeutic riding experience',
        'Helped 100+ therapeutic riders',
        'Zero incidents in therapy program',
      ],
      idealFor: [
        'Therapeutic riding students',
        'Young children',
        'Riders with special needs',
        'Anyone building confidence',
      ],
      disciplineIcons,
    },
    {
      name: 'Apollo',
      breed: 'Andalusian',
      age: 9,
      color: 'Grey',
      height: '16.0 hands',
      weight: '1,250 lbs',
      image: '[Apollo Photo]',
      specialties: [
        'Classical dressage specialist',
        'Stunning movement',
        'High school movements',
        'Performance experience',
      ],
      personality:
        'Apollo is a proud and elegant horse with a regal bearing. He loves to perform and has a natural flair for classical dressage movements.',
      fullDescription:
        'Apollo is a breathtaking Andalusian with the breed\'s characteristic elegance and power. He excels in classical dressage and has been trained in some of the traditional "airs above the ground" movements. Apollo\'s presence in the arena is commanding, and he seems to enjoy the attention his performances bring. He is both a teaching horse for advanced students and a demonstration horse for special events.',
      disciplines: ['Dressage', 'Advanced Training'],
      experienceLevel: 'Advanced',
      available: true,
      temperament: 'Proud and Elegant',
      training: [
        'Classical dressage movements',
        'Spanish walk and trot',
        'Levade (in training)',
        'Piaffe and passage',
        'Collection specialist',
        'Performance trained',
      ],
      achievements: [
        'Featured in multiple exhibitions',
        'Classical dressage demonstrations',
        'High scores in freestyle competitions',
        'Crowd favorite at shows',
      ],
      idealFor: [
        'Advanced dressage students',
        'Those interested in classical riding',
        'Experienced riders',
        'Performance preparation',
      ],
      disciplineIcons,
    },
    {
      name: 'Charlie',
      breed: 'Appaloosa',
      age: 7,
      color: 'Leopard Spotted',
      height: '15.3 hands',
      weight: '1,150 lbs',
      image: '[Charlie Photo]',
      specialties: [
        'Versatile in multiple disciplines',
        'Great for intermediate riders',
        'Natural jumper',
        'Willing and eager',
      ],
      personality:
        'Charlie is friendly, curious, and always ready for adventure. His willing attitude and versatility make him a favorite for riders looking to try different disciplines.',
      fullDescription:
        'Charlie is a stunning leopard Appaloosa with a personality as colorful as his coat. He is one of our most versatile horses, equally comfortable in the dressage arena, over jumps, or out on the trail. Charlie\'s willingness to try anything makes him perfect for riders who want to explore different aspects of riding. He has a natural jumping ability and genuinely seems to enjoy the challenge of new obstacles.',
      disciplines: ['Show Jumping', 'Trail Riding', 'Western Riding', 'Dressage'],
      experienceLevel: 'Intermediate',
      available: true,
      temperament: 'Willing and Versatile',
      training: [
        'Jumping up to 2\'9"',
        'Basic dressage movements',
        'Trail obstacle expert',
        'Western and English',
        'Barrel racing basics',
        'Easy to handle and trailer',
      ],
      achievements: [
        'Multiple discipline competitor',
        'Trail challenge winner',
        'Consistent clear rounds jumping',
        'Versatility award recipient',
      ],
      idealFor: [
        'Riders exploring different disciplines',
        'Intermediate students',
        'Those learning to jump',
        'Versatile riding programs',
      ],
      disciplineIcons,
    },
  ];

  // Featured horses (subset of all horses)
  const featuredHorses = [horses[0], horses[2], horses[4]]; // Thunder, Duke, Apollo

  // Filter horses based on selected filter
  const filteredHorses = horseFilter === 'all'
    ? horses
    : horses.filter((horse) =>
        horse.disciplines.some((d) =>
          d.toLowerCase().includes(horseFilter.toLowerCase())
        ) ||
        horse.experienceLevel.toLowerCase().includes(horseFilter.toLowerCase())
      );

  // Classes & Schedule state
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');
  const [classFilter, setClassFilter] = useState('all');
  const [instructorFilter, setInstructorFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  // Class schedule data
  const classSchedule: ClassCardProps[] = [
    // Monday Classes
    {
      className: 'Beginner Riding Basics',
      type: 'beginner',
      day: 'Monday',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      instructor: 'Sarah Johnson',
      duration: '1 hour',
      availableSpots: 3,
      totalSpots: 8,
      pricePerClass: 60,
      description: 'Perfect for first-time riders. Learn basic horsemanship, safety, and fundamental riding skills.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Intermediate Dressage',
      type: 'intermediate',
      day: 'Monday',
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      instructor: 'Michael Chen',
      duration: '1 hour',
      availableSpots: 2,
      totalSpots: 6,
      pricePerClass: 75,
      description: 'Develop collection, extension, and lateral movements. Focus on rhythm and balance.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Advanced Show Jumping',
      type: 'advanced',
      day: 'Monday',
      startTime: '5:00 PM',
      endTime: '6:30 PM',
      instructor: 'Emily Rodriguez',
      duration: '1.5 hours',
      availableSpots: 1,
      totalSpots: 4,
      pricePerClass: 95,
      description: 'Technical jumping course work for experienced riders. Focus on precision and timing.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Tuesday Classes
    {
      className: 'Kids Riding Club',
      type: 'beginner',
      day: 'Tuesday',
      startTime: '4:00 PM',
      endTime: '5:00 PM',
      instructor: 'Sarah Johnson',
      duration: '1 hour',
      availableSpots: 0,
      totalSpots: 10,
      pricePerClass: 55,
      description: 'Fun and educational riding program for children ages 7-12. Safety-focused environment.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Trail Riding Techniques',
      type: 'intermediate',
      day: 'Tuesday',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      instructor: 'David Thompson',
      duration: '1.5 hours',
      availableSpots: 5,
      totalSpots: 8,
      pricePerClass: 70,
      description: 'Learn safe trail riding practices, navigation, and handling various terrain challenges.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Wednesday Classes
    {
      className: 'Western Riding Basics',
      type: 'beginner',
      day: 'Wednesday',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      instructor: 'David Thompson',
      duration: '1 hour',
      availableSpots: 4,
      totalSpots: 8,
      pricePerClass: 60,
      description: 'Introduction to Western riding style, neck reining, and Western horsemanship.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Dressage Fundamentals',
      type: 'intermediate',
      day: 'Wednesday',
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      instructor: 'Michael Chen',
      duration: '1 hour',
      availableSpots: 3,
      totalSpots: 6,
      pricePerClass: 75,
      description: 'Build a solid foundation in classical dressage principles and movements.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Competition Prep',
      type: 'advanced',
      day: 'Wednesday',
      startTime: '6:00 PM',
      endTime: '7:30 PM',
      instructor: 'Emily Rodriguez',
      duration: '1.5 hours',
      availableSpots: 2,
      totalSpots: 4,
      pricePerClass: 95,
      description: 'Intensive training for upcoming competitions. Strategy, practice, and mental preparation.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Thursday Classes
    {
      className: 'Adult Beginner Class',
      type: 'beginner',
      day: 'Thursday',
      startTime: '6:00 PM',
      endTime: '7:00 PM',
      instructor: 'Sarah Johnson',
      duration: '1 hour',
      availableSpots: 2,
      totalSpots: 6,
      pricePerClass: 65,
      description: 'Designed for adult beginners. Patient, supportive environment to learn riding basics.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Jumping Fundamentals',
      type: 'intermediate',
      day: 'Thursday',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      instructor: 'Emily Rodriguez',
      duration: '1 hour',
      availableSpots: 4,
      totalSpots: 6,
      pricePerClass: 75,
      description: 'Learn proper jumping position, approach, and basic grid work over small fences.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Friday Classes
    {
      className: 'Young Riders Program',
      type: 'beginner',
      day: 'Friday',
      startTime: '4:00 PM',
      endTime: '5:00 PM',
      instructor: 'Sarah Johnson',
      duration: '1 hour',
      availableSpots: 3,
      totalSpots: 8,
      pricePerClass: 55,
      description: 'Youth riding program focusing on horse care, safety, and riding skills for ages 8-14.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Cross-Country Training',
      type: 'advanced',
      day: 'Friday',
      startTime: '2:00 PM',
      endTime: '3:30 PM',
      instructor: 'Michael Chen',
      duration: '1.5 hours',
      availableSpots: 2,
      totalSpots: 5,
      pricePerClass: 90,
      description: 'Navigate our cross-country course. Build confidence over natural obstacles and terrain.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Saturday Classes
    {
      className: 'Family Riding Session',
      type: 'beginner',
      day: 'Saturday',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      instructor: 'David Thompson',
      duration: '1 hour',
      availableSpots: 4,
      totalSpots: 10,
      pricePerClass: 50,
      description: 'Perfect for families to ride together. All ages and skill levels welcome.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Eventing Clinic',
      type: 'advanced',
      day: 'Saturday',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
      instructor: 'Emily Rodriguez',
      duration: '2 hours',
      availableSpots: 1,
      totalSpots: 6,
      pricePerClass: 110,
      description: 'Comprehensive eventing training covering dressage, show jumping, and cross-country.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Sunday Classes
    {
      className: 'Therapeutic Riding',
      type: 'beginner',
      day: 'Sunday',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      instructor: 'Sarah Johnson',
      duration: '1 hour',
      availableSpots: 2,
      totalSpots: 4,
      pricePerClass: 70,
      description: 'Specialized program for riders with special needs. Certified therapeutic instructors.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      className: 'Sunday Trail Ride',
      type: 'intermediate',
      day: 'Sunday',
      startTime: '11:00 AM',
      endTime: '12:30 PM',
      instructor: 'David Thompson',
      duration: '1.5 hours',
      availableSpots: 6,
      totalSpots: 8,
      pricePerClass: 65,
      description: 'Relaxing guided trail ride through scenic routes. Enjoy nature on horseback.',
      onEnroll: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  // Get unique instructors for filter
  const instructors = Array.from(new Set(classSchedule.map((c) => c.instructor)));

  // Filter classes
  const filteredClasses = classSchedule.filter((classItem) => {
    const matchesDifficulty =
      classFilter === 'all' || classItem.type === classFilter;
    const matchesInstructor =
      instructorFilter === 'all' || classItem.instructor === instructorFilter;
    
    let matchesTime = true;
    if (timeFilter === 'morning') {
      const hour = parseInt(classItem.startTime.split(':')[0]);
      const isPM = classItem.startTime.includes('PM');
      matchesTime = !isPM || hour === 12;
    } else if (timeFilter === 'afternoon') {
      const hour = parseInt(classItem.startTime.split(':')[0]);
      const isPM = classItem.startTime.includes('PM');
      matchesTime = isPM && hour >= 12 && hour < 5;
    } else if (timeFilter === 'evening') {
      const hour = parseInt(classItem.startTime.split(':')[0]);
      const isPM = classItem.startTime.includes('PM');
      matchesTime = isPM && hour >= 5;
    }

    return matchesDifficulty && matchesInstructor && matchesTime;
  });

  // Events state
  const [selectedEvent, setSelectedEvent] = useState<EventCardProps | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [eventMonthFilter, setEventMonthFilter] = useState('all');
  const [showPastEvents, setShowPastEvents] = useState(false);

  const handleEventClick = (event: EventCardProps) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  // Events data
  const events: EventCardProps[] = [
    // November 2025
    {
      eventName: 'Fall Championship Show',
      eventType: 'show',
      date: new Date('2025-11-15'),
      endDate: new Date('2025-11-16'),
      time: '8:00 AM - 5:00 PM',
      location: 'MAM Center Main Arena',
      description: 'Our premier fall show featuring dressage, show jumping, and hunter classes. Open to all levels with divisions for beginners through advanced riders. Professional judges and fantastic prizes!',
      entryFee: 85,
      spectatorInfo: 'Free admission',
      isFeatured: true,
      registrationDeadline: new Date('2025-11-08'),
      spotsAvailable: 12,
      onLearnMore: () => handleEventClick(events[0]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Dressage Clinic with Emma Thompson',
      eventType: 'clinic',
      date: new Date('2025-11-22'),
      time: '9:00 AM - 4:00 PM',
      location: 'Indoor Arena',
      description: 'Learn from international dressage coach Emma Thompson. This full-day clinic covers training level through Grand Prix movements. Limited spots available!',
      entryFee: 150,
      spectatorInfo: 'Spectators welcome - $10',
      registrationDeadline: new Date('2025-11-15'),
      spotsAvailable: 3,
      onLearnMore: () => handleEventClick(events[1]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Thanksgiving Trail Ride',
      eventType: 'social',
      date: new Date('2025-11-27'),
      time: '10:00 AM - 12:00 PM',
      location: 'Trail System',
      description: 'Join us for a festive trail ride through our beautiful cross-country course. All levels welcome. Hot cocoa and cookies provided after the ride!',
      entryFee: 0,
      spectatorInfo: 'Family welcome',
      spotsAvailable: 15,
      onLearnMore: () => handleEventClick(events[2]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // December 2025
    {
      eventName: 'Winter Eventing Competition',
      eventType: 'competition',
      date: new Date('2025-12-07'),
      endDate: new Date('2025-12-08'),
      time: '7:00 AM - 6:00 PM',
      location: 'All Facilities',
      description: 'USEA recognized eventing competition featuring Beginner Novice through Preliminary levels. Two days of dressage, show jumping, and cross-country.',
      entryFee: 125,
      spectatorInfo: 'Free admission - Food vendors on site',
      isFeatured: true,
      registrationDeadline: new Date('2025-11-30'),
      spotsAvailable: 8,
      onLearnMore: () => handleEventClick(events[3]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Holiday Fundraiser & Open House',
      eventType: 'fundraiser',
      date: new Date('2025-12-14'),
      time: '2:00 PM - 6:00 PM',
      location: 'Entire Facility',
      description: 'Annual holiday celebration with barn tours, pony rides for kids, hot chocolate bar, and silent auction. All proceeds support our therapeutic riding program.',
      entryFee: 0,
      spectatorInfo: 'Everyone welcome!',
      spotsAvailable: 100,
      onLearnMore: () => handleEventClick(events[4]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Jumping Fundamentals Workshop',
      eventType: 'clinic',
      date: new Date('2025-12-20'),
      time: '10:00 AM - 2:00 PM',
      location: 'Outdoor Arena',
      description: 'Half-day workshop focusing on grid work, proper jumping position, and course riding. Perfect for intermediate riders looking to improve their jumping skills.',
      entryFee: 95,
      spectatorInfo: 'Spectators welcome - Free',
      registrationDeadline: new Date('2025-12-13'),
      spotsAvailable: 6,
      onLearnMore: () => handleEventClick(events[5]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // January 2026
    {
      eventName: 'New Year Schooling Show',
      eventType: 'show',
      date: new Date('2026-01-11'),
      time: '9:00 AM - 4:00 PM',
      location: 'Indoor Arena',
      description: 'Low-key schooling show perfect for preparing for the competition season. All disciplines welcome. Great opportunity for young horses and green riders.',
      entryFee: 45,
      spectatorInfo: 'Free admission',
      registrationDeadline: new Date('2026-01-04'),
      spotsAvailable: 18,
      onLearnMore: () => handleEventClick(events[6]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Winter Training Series - Week 1',
      eventType: 'clinic',
      date: new Date('2026-01-18'),
      time: '9:00 AM - 12:00 PM',
      location: 'Indoor Arena',
      description: 'First session of our 4-week winter training series. Focus on fitness, conditioning, and basic flatwork. Enroll in the full series and save 20%!',
      entryFee: 75,
      spectatorInfo: 'Spectators welcome',
      spotsAvailable: 10,
      onLearnMore: () => handleEventClick(events[7]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // February 2026
    {
      eventName: 'Valentine\'s Day Couples Ride',
      eventType: 'social',
      date: new Date('2026-02-14'),
      time: '11:00 AM - 1:00 PM',
      location: 'Trail System',
      description: 'Romantic trail ride for couples followed by a catered lunch. Perfect Valentine\'s Day activity for horse-loving partners!',
      entryFee: 120,
      spectatorInfo: 'Couples only',
      registrationDeadline: new Date('2026-02-07'),
      spotsAvailable: 5,
      onLearnMore: () => handleEventClick(events[8]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      eventName: 'Regional Dressage Championship',
      eventType: 'competition',
      date: new Date('2026-02-21'),
      endDate: new Date('2026-02-22'),
      time: '8:00 AM - 5:00 PM',
      location: 'Indoor Arena',
      description: 'USDF recognized dressage competition. Training level through Grand Prix. Qualify for regional and national championships!',
      entryFee: 95,
      spectatorInfo: 'Free admission',
      isFeatured: true,
      registrationDeadline: new Date('2026-02-14'),
      spotsAvailable: 0,
      onLearnMore: () => handleEventClick(events[9]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },

    // Past Events (for demonstration)
    {
      eventName: 'Fall Harvest Show',
      eventType: 'show',
      date: new Date('2025-10-05'),
      time: '9:00 AM - 4:00 PM',
      location: 'Outdoor Arena',
      description: 'Our annual fall show featuring hunter, jumper, and equitation classes. Beautiful weather and great competition!',
      entryFee: 75,
      spectatorInfo: 'Free admission',
      onLearnMore: () => handleEventClick(events[10]),
      onRegister: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  // Fix event callbacks (they reference events array which needs to be defined first)
  events.forEach((event, index) => {
    event.onLearnMore = () => handleEventClick(events[index]);
  });

  // Filter events
  const now = new Date();
  const filteredEvents = events.filter((event) => {
    const matchesType = eventTypeFilter === 'all' || event.eventType === eventTypeFilter;
    
    let matchesMonth = true;
    if (eventMonthFilter !== 'all') {
      const eventMonth = event.date.getMonth();
      matchesMonth = eventMonth === parseInt(eventMonthFilter);
    }

    const isPast = event.date < now;
    const matchesTimeframe = showPastEvents ? isPast : !isPast;

    return matchesType && matchesMonth && matchesTimeframe;
  });

  // Get upcoming events 
  const upcomingEvents = events.filter((e) => e.date >= now).sort((a, b) => a.date.getTime() - b.date.getTime());

  // Featured event (next featured upcoming event)
  const featuredEvent = upcomingEvents.find((e) => e.isFeatured);

  // Pricing state
  const [pricingCategory, setPricingCategory] = useState<'lessons' | 'membership' | 'boarding' | 'special'>('lessons');

  // Pricing data
  const lessonPackages: PricingCardProps[] = [
    {
      packageName: 'Single Lesson',
      tier: 'basic',
      price: 75,
      duration: 'per lesson',
      features: [
        '1 hour private lesson',
        'Beginner to intermediate level',
        'Horse provided',
        'Basic equipment included',
        'Flexible scheduling',
      ],
      notIncluded: [
        'Priority booking',
        'Advanced instruction',
        'Competition access',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: '5 Lesson Package',
      tier: 'standard',
      price: 325,
      duration: '5 lessons',
      isRecommended: true,
      discount: 13,
      features: [
        '5 hours of private lessons',
        'All experience levels',
        'Horse selection priority',
        'Equipment included',
        'Valid for 3 months',
        'One free group clinic',
        'Progress tracking',
      ],
      notIncluded: [
        'Competition entry fees',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: '10 Lesson Package',
      tier: 'premium',
      price: 600,
      duration: '10 lessons',
      discount: 20,
      features: [
        '10 hours of private lessons',
        'All experience levels',
        'Premium horse selection',
        'All equipment included',
        'Valid for 6 months',
        'Two free group clinics',
        'Video analysis sessions',
        'Priority booking',
        'Competition preparation',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const membershipPackages: PricingCardProps[] = [
    {
      packageName: 'Monthly Unlimited',
      tier: 'standard',
      price: 450,
      duration: 'month',
      features: [
        'Unlimited group lessons',
        '2 private lessons per month',
        'Access to all facilities',
        'Free equipment rental',
        'Newsletter & updates',
        '10% off events',
      ],
      notIncluded: [
        'Boarding services',
        'Competition entry fees',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Quarterly Membership',
      tier: 'standard',
      price: 1200,
      duration: '3 months',
      isRecommended: true,
      discount: 11,
      features: [
        'Unlimited group lessons',
        '8 private lessons per quarter',
        'Access to all facilities',
        'Free equipment rental',
        'Newsletter & updates',
        '15% off events',
        'Free guest passes (2/month)',
        'Priority event registration',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Annual Membership',
      tier: 'premium',
      price: 4200,
      duration: 'year',
      discount: 22,
      features: [
        'Unlimited group lessons',
        '40 private lessons per year',
        'Access to all facilities',
        'Free equipment rental',
        'Newsletter & updates',
        '20% off all events',
        'Free guest passes (4/month)',
        'Priority event registration',
        'Free competition entries (2/year)',
        'Annual awards dinner invitation',
        'Personalized training plan',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const boardingPackages: PricingCardProps[] = [
    {
      packageName: 'Pasture Board',
      tier: 'basic',
      price: 350,
      duration: 'month',
      features: [
        'Daily turnout in group paddock',
        'Grain 2x daily',
        'Hay provided',
        'Water & shelter access',
        'Weekly stall cleaning',
        'Basic health monitoring',
      ],
      notIncluded: [
        'Private stall',
        'Individual turnout',
        'Training services',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Full Board',
      tier: 'standard',
      price: 650,
      duration: 'month',
      isRecommended: true,
      features: [
        '12x12 climate-controlled stall',
        'Daily individual turnout',
        'Grain 2x daily (customized)',
        'Premium hay provided',
        'Daily stall cleaning',
        'Health monitoring & reporting',
        'Blanketing service',
        'Tack storage',
      ],
      notIncluded: [
        'Training included',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Training Board',
      tier: 'premium',
      price: 1100,
      duration: 'month',
      features: [
        'Everything in Full Board',
        '5 training sessions per week',
        'Professional trainer',
        'Video analysis',
        'Progress reports',
        'Competition preparation',
        'Customized feed program',
        'Supplements included',
        'Priority farrier & vet scheduling',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const specialPackages: PricingCardProps[] = [
    {
      packageName: 'Summer Camp (Week)',
      tier: 'basic',
      price: 450,
      duration: 'week',
      features: [
        'Monday-Friday, 9AM-3PM',
        'Daily riding lessons',
        'Horse care education',
        'Lunch provided',
        'Ages 8-16',
        'End-of-week showcase',
      ],
      notIncluded: [
        'Overnight camping',
        'Competition entry',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Private Event Package',
      tier: 'standard',
      price: 800,
      duration: '4 hours',
      features: [
        'Facility rental for 4 hours',
        'Pony rides (up to 20 kids)',
        'Professional staff supervision',
        'Party area with tables',
        'Basic refreshments',
        'Up to 30 guests',
      ],
      notIncluded: [
        'Catering services',
        'Extended hours',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      packageName: 'Group Lessons (5+)',
      tier: 'basic',
      price: 40,
      duration: 'per person',
      features: [
        '1 hour group lesson',
        'Minimum 5 participants',
        'All skill levels',
        'Horses provided',
        'Equipment included',
        'Perfect for corporate events',
      ],
      onChoosePlan: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  // Pricing FAQs
  const pricingFAQs: PricingFAQProps[] = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, cash, and checks. For boarding and memberships, we also offer automatic monthly billing for your convenience.',
    },
    {
      question: 'Are there any additional fees not included in the pricing?',
      answer: 'Our pricing is transparent and includes most services. Additional costs may include competition entry fees, specialized equipment purchases, veterinary services, farrier services (for boarding), and optional add-ons like video analysis or private clinics with guest instructors.',
    },
    {
      question: 'Can I try a lesson before committing to a package?',
      answer: 'Absolutely! We encourage new riders to book a single lesson first to experience our facility and instruction style. You can then upgrade to a package at any time, and we\'ll credit your first lesson toward the package price.',
    },
    {
      question: 'What is your cancellation and refund policy?',
      answer: 'For lessons, we require 24-hour notice for cancellations or rescheduling. Unused lessons in packages can be transferred to another rider or credited toward future services within the validity period. Memberships require 30-day notice for cancellation. Boarding requires 60-day notice.',
    },
    {
      question: 'Do you offer discounts for multiple family members?',
      answer: 'Yes! We offer a 10% discount when two family members enroll, and 15% when three or more family members have active memberships or lesson packages. Military families and first responders receive an additional 5% discount.',
    },
    {
      question: 'Are lesson packages transferable?',
      answer: 'Lesson packages are tied to the individual who purchased them, but can be transferred to an immediate family member with prior approval. Corporate or group packages can be shared among designated team members.',
    },
    {
      question: 'What happens if my horse gets injured while boarding?',
      answer: 'All boarding clients are required to have emergency veterinary authorization on file. We monitor all horses daily and will contact you immediately if any health concerns arise. You are responsible for veterinary costs, and we recommend equine insurance for comprehensive coverage.',
    },
    {
      question: 'Can I upgrade or downgrade my package mid-term?',
      answer: 'Yes! You can upgrade your package at any time, and we\'ll credit your unused portion toward the new package. Downgrades are processed at the end of your current billing cycle to ensure you get full value from your purchase.',
    },
  ];

  // Navigation links for all sections
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Our Horses', href: '#horses' },
    { label: 'Classes', href: '#classes' },
    { label: 'Events', href: '#events' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  // Contact form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Contact form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Footer sections
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Our Horses', href: '#horses' },
        { label: 'Classes & Schedule', href: '#classes' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { label: 'Facilities', href: '#facilities' },
        { label: 'Events', href: '#events' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Gallery', href: '#gallery' },
      ],
    },
  ];

  // Contact information
  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@mamcenter.com',
    address: '123 Equestrian Way, Horse City, HC 12345',
  };

  // Social media links
  const socialLinks = [
    { platform: 'facebook' as const, href: 'https://facebook.com' },
    { platform: 'twitter' as const, href: 'https://twitter.com' },
    { platform: 'instagram' as const, href: 'https://instagram.com' },
    { platform: 'linkedin' as const, href: 'https://linkedin.com' },
  ];

  // Legal links
  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy', external: false },
    { label: 'Terms of Service', href: '#terms', external: false },
    { label: 'Cookie Policy', href: '#cookies', external: false },
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <NavbarAlt links={navLinks} ctaText="Contact Us" ctaHref="#contact" />

      {/* Hero Section */}
      <div id="home">
        <Hero
          title="Welcome to MAM Center"
          subtitle="Premier Equestrian Excellence - Experience world-class training, care, and facilities for you and your horse"
          height="full"
          backgroundVideo={backgroundVideo}
          overlay={true}
          overlayOpacity={50}
          showScrollIndicator={true}
          parallax={true}
        >
          <div className="flex gap-4 justify-center flex-wrap mt-4">
            <Button variant="primary" size="lg" onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book Your Lesson
            </Button>
            <Button variant="tertiary" size="lg" onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Learn More
            </Button>
          </div>
        </Hero>
      </div>

      {/* About Us Section */}
      <PageSection
        id="about"
        title="About MAM Center"
        subtitle="Building Excellence in Equestrian Sports Since 2003"
        bgColor="white"
      >
        {/* Two-Column Layout: Image & Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image Carousel Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 h-96 flex items-center justify-center shadow-lg"
          >
            <span className="text-gray-400 text-lg">
              [Facility Image Carousel]
            </span>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Founding Story */}
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2003, MAM Center began as a small riding school with a
              big vision: to create a premier equestrian facility where riders
              of all levels could pursue their passion in a safe, professional,
              and welcoming environment.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over two decades later, we've grown into one of the region's most
              respected equestrian centers, serving thousands of riders and
              caring for hundreds of horses with the same dedication and
              excellence that defined our founding.
            </p>

            {/* Mission Statement */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 mb-6">
              <h4 className="text-lg font-bold text-primary mb-2">
                Our Mission
              </h4>
              <p className="text-gray-700 font-medium italic leading-relaxed">
                To foster a deep connection between horses and riders while
                promoting safety, skill development, and a lifelong love for
                equestrian sports through world-class instruction, facilities,
                and care.
              </p>
            </div>

            {/* Vision */}
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold text-primary">Our Vision:</span> To be
              the leading equestrian center recognized for excellence in
              training, innovation in horse care, and creating champions both in
              and out of the arena.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-4">
            Our Core Values
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These principles guide everything we do at MAM Center
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={<FaStar className="text-5xl" />}
              title="Excellence"
              description="We strive for the highest standards in everything we do, from training to facility maintenance."
              index={0}
            />
            <ValueCard
              icon={<FaShieldAlt className="text-5xl" />}
              title="Safety First"
              description="The safety and well-being of our riders and horses is our top priority at all times."
              index={1}
            />
            <ValueCard
              icon={<FaHeart className="text-5xl" />}
              title="Compassion"
              description="We treat every horse and rider with respect, kindness, and understanding."
              index={2}
            />
            <ValueCard
              icon={<FaHandshake className="text-5xl" />}
              title="Community"
              description="Building lasting relationships and a supportive equestrian family."
              index={3}
            />
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-4">
            Meet Our Team
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to your success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Head Instructor & Owner"
              bio="With over 25 years of experience in equestrian training and a passion for developing riders of all levels, Sarah brings expertise and dedication to every lesson."
              certifications={['USDF Gold Medalist', 'CHA Master Instructor', 'USEF R Judge']}
            />
            <TeamMember
              name="Michael Chen"
              role="Stable Manager"
              bio="Michael ensures our horses receive the best possible care with his 15 years of experience in equine health and facility management."
              certifications={['Certified Equine Manager', 'First Aid Certified']}
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Assistant Instructor"
              bio="A former competitive show jumper, Emily specializes in helping young riders build confidence and skill in the saddle."
              certifications={['CHA Certified Instructor', 'PATH Intl. Certified']}
            />
            <TeamMember
              name="David Martinez"
              role="Farrier"
              bio="Our resident farrier with 20 years of expertise ensures every horse has perfectly fitted shoes and healthy hooves."
              certifications={['AFA Certified Journeyman Farrier']}
            />
            <TeamMember
              name="Dr. Lisa Thompson"
              role="Veterinary Consultant"
              bio="Dr. Thompson provides expert veterinary care and ensures the health and wellness of all our horses."
              certifications={['DVM', 'AAEP Member', 'Equine Sports Medicine']}
            />
            <TeamMember
              name="James Wilson"
              role="Youth Program Director"
              bio="James creates engaging programs that teach horsemanship, responsibility, and leadership to young riders."
              certifications={['CHA Instructor', 'Youth Development Specialist']}
            />
          </div>
        </div>

        {/* Certifications & Credentials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-4">
            Certifications & Credentials
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recognized for excellence by leading equestrian organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaAward />, name: 'USEF Member' },
              { icon: <FaTrophy />, name: 'CHA Certified' },
              { icon: <FaLeaf />, name: 'Eco-Certified Stable' },
              { icon: <FaUsers />, name: 'PATH Intl. Premier' },
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-6 bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl text-primary">{badge.icon}</div>
                <p className="text-sm font-semibold text-center text-gray-700">
                  {badge.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-4">
            What Our Clients Say
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our community
          </p>
        </div>
      </PageSection>

      {/* Services Section */}
      <PageSection
        id="services"
        title="Our Services"
        subtitle="Comprehensive equestrian services tailored to your needs"
        bgColor="gray"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceDetailCard
            icon={<FaHorse className="text-4xl" />}
            title="Riding Lessons"
            description="Professional instruction for all skill levels, from first-time riders to experienced equestrians seeking to refine their technique."
            pricing="From $60/lesson"
            duration="45-60 minutes"
            features={[
              'Private and group lessons available',
              'Beginner to advanced instruction',
              'English and Western styles',
              'Certified instructors',
              'All equipment provided',
            ]}
            category="lessons"
            index={0}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaTrophy className="text-4xl" />}
            title="Horse Training"
            description="Expert training programs designed to develop your horse's skills, behavior, and performance in various disciplines."
            pricing="From $500/month"
            duration="Customized schedule"
            features={[
              'Behavioral training',
              'Discipline-specific training',
              'Competition preparation',
              'Exercise and conditioning',
              'Regular progress reports',
            ]}
            category="care"
            index={1}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaUsers className="text-4xl" />}
            title="Event Hosting"
            description="Professional event management for equestrian competitions, shows, and special occasions at our premium facilities."
            pricing="Custom pricing"
            duration="Full day or multi-day"
            features={[
              'Competition hosting',
              'Show management',
              'Facility rental',
              'Event coordination',
              'Catering options available',
            ]}
            category="events"
            index={2}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaHorse className="text-4xl" />}
            title="Horse Boarding"
            description="Premium care and accommodation for your equine companion with daily turnout, feeding, and professional attention."
            pricing="From $800/month"
            duration="Monthly packages"
            features={[
              'Daily turnout in spacious paddocks',
              'Premium feed and hay',
              '24/7 monitoring',
              'Climate-controlled stalls',
              'Personalized care plans',
            ]}
            category="care"
            index={3}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaLeaf className="text-4xl" />}
            title="Trail Rides"
            description="Guided trail rides through scenic routes, perfect for riders of all levels looking to connect with nature."
            pricing="$75 per ride"
            duration="90 minutes"
            features={[
              'Experienced trail guides',
              'Scenic natural routes',
              'Well-trained trail horses',
              'Small group sizes',
              'Photo opportunities',
            ]}
            category="programs"
            index={4}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaStar className="text-4xl" />}
            title="Summer Camps"
            description="Exciting week-long day camps for young riders, combining riding instruction with horse care education and fun activities."
            pricing="$450/week"
            duration="Full day, Mon-Fri"
            features={[
              'Ages 7-16 welcome',
              'Daily riding lessons',
              'Horse care education',
              'Arts and crafts',
              'Lunch and snacks included',
            ]}
            category="programs"
            index={5}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaAward className="text-4xl" />}
            title="Birthday Parties"
            description="Unforgettable birthday celebrations with pony rides, horse activities, and special experiences for children of all ages."
            pricing="From $350"
            duration="2 hours"
            features={[
              'Pony rides for all guests',
              'Party room included',
              'Horse grooming activities',
              'Professional supervision',
              'Customizable packages',
            ]}
            category="events"
            index={6}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <ServiceDetailCard
            icon={<FaHeart className="text-4xl" />}
            title="Therapeutic Riding"
            description="Specialized equine-assisted therapy programs designed to improve physical, emotional, and cognitive abilities."
            pricing="From $70/session"
            duration="45 minutes"
            features={[
              'Certified therapy instructors',
              'Individualized programs',
              'Physical therapy benefits',
              'Emotional well-being focus',
              'Specially trained therapy horses',
            ]}
            category="programs"
            index={7}
            onLearnMore={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-primary text-white p-12"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and schedule your first visit. Our team is here to help you begin your equestrian journey.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us Today
          </Button>
        </motion.div>
      </PageSection>

      {/* Facilities Section */}
      <PageSection
        id="facilities"
        title="World-Class Facilities"
        subtitle="State-of-the-art amenities designed for excellence in equestrian training and care"
        bgColor="white"
      >
        {/* Masonry-style grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.name}
              name={facility.name}
              type={facility.type}
              specifications={facility.specifications}
              icon={facility.icon}
              features={facility.features}
              index={index}
              onClick={() => handleFacilityClick(facility)}
            />
          ))}
        </div>

        {/* Statistics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Acres
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Stalls
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Arenas
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5km</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                XC Course
              </div>
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* Facility Modal */}
      <FacilityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        facility={selectedFacility}
      />

      {/* Our Horses Section */}
      <PageSection
        id="horses"
        title="Meet Our Horses"
        subtitle="Get to know our beautiful and well-trained equine companions"
        bgColor="gray"
      >
        {/* Featured Horses Carousel */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 mb-16">
          <FeaturedHorsesCarousel horses={featuredHorses} onHorseClick={handleHorseClick} />
        </div>

        {/* Section heading with Navy underline */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            All Our Horses
          </h3>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { label: 'All Horses', value: 'all' },
            { label: 'Dressage', value: 'dressage' },
            { label: 'Show Jumping', value: 'jumping' },
            { label: 'Trail Riding', value: 'trail' },
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' },
            { label: 'Therapeutic', value: 'therapeutic' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setHorseFilter(filter.value)}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                horseFilter === filter.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Horse grid with animation */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredHorses.map((horse, index) => (
              <motion.div
                key={horse.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <HorseProfileCard
                  name={horse.name}
                  breed={horse.breed}
                  age={horse.age}
                  color={horse.color}
                  image={horse.image}
                  specialties={horse.specialties}
                  personality={horse.personality}
                  disciplines={horse.disciplines}
                  experienceLevel={horse.experienceLevel}
                  available={horse.available}
                  disciplineIcons={disciplineIcons}
                  index={index}
                  onClick={() => handleHorseClick(horse)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results message */}
        {filteredHorses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600 mb-4">
              No horses found matching your criteria.
            </p>
            <button
              onClick={() => setHorseFilter('all')}
              className="text-primary font-semibold hover:underline"
            >
              View all horses
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white p-12 mt-16 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Meet Our Horses in Person?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Schedule a visit to our facility and meet our wonderful horses. Our team will help you find the perfect match for your riding goals.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule a Visit
          </Button>
        </motion.div>
      </PageSection>

      {/* Horse Modal */}
      <HorseModal
        isOpen={isHorseModalOpen}
        onClose={closeHorseModal}
        horse={selectedHorse}
      />

      {/* Classes & Schedule Section */}
      <PageSection
        id="classes"
        title="Classes & Schedule"
        subtitle="Find the perfect class for your skill level and schedule"
        bgColor="white"
      >
        {/* View toggle and filters */}
        <div className="mb-12">
          {/* View mode toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-200 p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-300'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  viewMode === 'calendar'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-300'
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Filter Classes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Difficulty level filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Difficulty Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'All Levels', value: 'all' },
                    { label: 'Beginner', value: 'beginner' },
                    { label: 'Intermediate', value: 'intermediate' },
                    { label: 'Advanced', value: 'advanced' },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setClassFilter(filter.value)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        classFilter === filter.value
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructor filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Instructor
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setInstructorFilter('all')}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      instructorFilter === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    All Instructors
                  </button>
                  {instructors.map((instructor) => (
                    <button
                      key={instructor}
                      onClick={() => setInstructorFilter(instructor)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        instructorFilter === instructor
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      {instructor.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time of day filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Time of Day
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Any Time', value: 'all' },
                    { label: 'Morning', value: 'morning' },
                    { label: 'Afternoon', value: 'afternoon' },
                    { label: 'Evening', value: 'evening' },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setTimeFilter(filter.value)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        timeFilter === filter.value
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active filters summary */}
            {(classFilter !== 'all' || instructorFilter !== 'all' || timeFilter !== 'all') && (
              <div className="mt-6 pt-6 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing {filteredClasses.length} of {classSchedule.length} classes
                  </p>
                  <button
                    onClick={() => {
                      setClassFilter('all');
                      setInstructorFilter('all');
                      setTimeFilter('all');
                    }}
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* View content */}
        <AnimatePresence mode="wait">
          {viewMode === 'calendar' ? (
            <CalendarView
              key="calendar"
              classes={filteredClasses}
              onEnroll={(classItem) => {
                if (classItem.onEnroll) classItem.onEnroll();
              }}
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredClasses.map((classItem, index) => (
                <ClassCard key={`${classItem.className}-${classItem.day}`} {...classItem} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        {filteredClasses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600 mb-4">
              No classes found matching your criteria.
            </p>
            <button
              onClick={() => {
                setClassFilter('all');
                setInstructorFilter('all');
                setTimeFilter('all');
              }}
              className="text-primary font-semibold hover:underline"
            >
              View all classes
            </button>
          </motion.div>
        )}

        {/* Download schedule and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-white p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Riding Journey?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enroll in a class today or download our complete schedule to plan your lessons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Enroll Now
            </Button>
            <button
              onClick={() => alert('PDF download feature coming soon!')}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg font-bold transition-all duration-300 border-2 border-white"
            >
              Download Full Schedule (PDF)
            </button>
          </div>
        </motion.div>
      </PageSection>

      {/* Events Section */}
      <PageSection
        id="events"
        title="Events & Competitions"
        subtitle="Join us for exciting competitions, clinics, shows, and community gatherings"
        bgColor="navy"
      >
        {/* Featured Event */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm p-1 border-2 border-yellow-400">
              <div className="bg-primary p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaTrophy className="text-4xl text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Featured Event</h3>
                </div>
                <EventCard {...featuredEvent} index={0} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Event Type Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Event Type
                </label>
                <select
                  value={eventTypeFilter}
                  onChange={(e) => setEventTypeFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="all" className="text-gray-900">All Events</option>
                  <option value="competition" className="text-gray-900">Competitions</option>
                  <option value="show" className="text-gray-900">Shows</option>
                  <option value="clinic" className="text-gray-900">Clinics</option>
                  <option value="fundraiser" className="text-gray-900">Fundraisers</option>
                  <option value="social" className="text-gray-900">Social Events</option>
                </select>
              </div>

              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Month
                </label>
                <select
                  value={eventMonthFilter}
                  onChange={(e) => setEventMonthFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="all" className="text-gray-900">All Months</option>
                  <option value="9" className="text-gray-900">October</option>
                  <option value="10" className="text-gray-900">November</option>
                  <option value="11" className="text-gray-900">December</option>
                  <option value="0" className="text-gray-900">January</option>
                  <option value="1" className="text-gray-900">February</option>
                </select>
              </div>

              {/* Past Events Toggle */}
              <div className="flex items-end">
                <button
                  onClick={() => setShowPastEvents(!showPastEvents)}
                  className={`w-full px-4 py-2 font-medium transition-all ${
                    showPastEvents
                      ? 'bg-white text-primary'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {showPastEvents ? 'Show Upcoming' : 'Show Past Events'}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <p className="text-white/80">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <FaTrophy className="text-6xl text-white/30 mx-auto mb-4" />
              <p className="text-xl text-white/60">No events found</p>
              <p className="text-white/40 mt-2">Try adjusting your filters</p>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Host an Event?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our facility is available for clinics, shows, and private events. 
              Contact us to discuss your requirements and availability.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us About Events
            </Button>
          </div>
        </motion.div>

        {/* Event Modal */}
        {selectedEvent && (
          <EventModal
            isOpen={isEventModalOpen}
            onClose={closeEventModal}
            event={selectedEvent}
          />
        )}
      </PageSection>

      {/* Pricing Section */}
      <PageSection
        id="pricing"
        title="Pricing & Packages"
        subtitle="Flexible options to fit your needs and budget"
        bgColor="white"
      >
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: 'lessons' as const, label: 'Lesson Packages', icon: <FaHorse /> },
              { key: 'membership' as const, label: 'Memberships', icon: <FaUsers /> },
              { key: 'boarding' as const, label: 'Boarding', icon: <FaWarehouse /> },
              { key: 'special' as const, label: 'Special Packages', icon: <FaStar /> },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setPricingCategory(category.key)}
                className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
                  pricingCategory === category.key
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pricingCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {pricingCategory === 'lessons' &&
              lessonPackages.map((pkg, index) => (
                <PricingCard key={pkg.packageName} {...pkg} index={index} />
              ))}
            {pricingCategory === 'membership' &&
              membershipPackages.map((pkg, index) => (
                <PricingCard key={pkg.packageName} {...pkg} index={index} />
              ))}
            {pricingCategory === 'boarding' &&
              boardingPackages.map((pkg, index) => (
                <PricingCard key={pkg.packageName} {...pkg} index={index} />
              ))}
            {pricingCategory === 'special' &&
              specialPackages.map((pkg, index) => (
                <PricingCard key={pkg.packageName} {...pkg} index={index} />
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 border-2 border-gray-200 p-12 text-center mb-16"
        >
          <FaEnvelope className="text-5xl text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
            Looking for something specific? We offer customized packages for corporate groups,
            large families, therapeutic programs, and special events. Contact us to discuss
            your unique requirements.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact for Custom Pricing
          </Button>
        </motion.div>

        {/* Download Price List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-8 text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-4">Download Our Complete Price List</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get a detailed PDF with all our pricing, package details, and terms & conditions.
          </p>
          <button
            onClick={() => alert('PDF download feature coming soon!')}
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <FaDownload />
            Download Price List (PDF)
          </button>
        </motion.div>

        {/* Pricing FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-primary mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Common questions about our pricing and packages
          </p>
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg">
            {pricingFAQs.map((faq, index) => (
              <PricingFAQ key={index} {...faq} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-3xl text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              No Hidden Fees
            </h4>
            <p className="text-gray-600">
              Transparent pricing with all costs clearly outlined upfront. What you see is what you pay.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-3xl text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Best Value Guarantee
            </h4>
            <p className="text-gray-600">
              Premium facilities and expert instruction at competitive prices. We match our value to your investment.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-3xl text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Flexible Terms
            </h4>
            <p className="text-gray-600">
              No long-term commitments required. Cancel or modify packages with reasonable notice periods.
            </p>
          </div>
        </motion.div>
      </PageSection>

      {/* Contact Section */}
      <PageSection
        id="contact"
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out to us today!"
        bgColor="white"
      >
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-l-4 border-green-500 p-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-4 border-red-500 p-4 mb-6"
              >
                <p className="text-red-800">{submitError}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message as string}</p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:border-primary focus:outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      pattern: {
                        value: /^[\d\s()+-]+$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={`w-full px-4 py-3 border-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:border-primary focus:outline-none transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message as string}</p>
                  )}
                </div>
              </div>

              {/* Service Interest Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  {...register('service')}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="riding-lessons">Riding Lessons</option>
                  <option value="horse-training">Horse Training</option>
                  <option value="boarding">Boarding Services</option>
                  <option value="events">Events & Competitions</option>
                  <option value="trail-rides">Trail Rides</option>
                  <option value="summer-camps">Summer Camps</option>
                  <option value="birthday-parties">Birthday Parties</option>
                  <option value="therapeutic-riding">Therapeutic Riding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors resize-none`}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message as string}</p>
                )}
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="newsletter"
                  type="checkbox"
                  {...register('newsletter')}
                  className="mt-1 w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our newsletter for updates on events, promotions, and equestrian tips
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-bold uppercase text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 mt-1">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Equestrian Way<br />
                      Horse City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 mt-1">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 mt-1">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@mamcenter.com" className="text-primary hover:underline">
                      info@mamcenter.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 mt-1">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hours of Operation</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex justify-between gap-8">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>7:00 AM - 7:00 PM</span>
                      </p>
                      <p className="flex justify-between gap-8">
                        <span className="font-medium">Saturday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex justify-between gap-8">
                        <span className="font-medium">Sunday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 w-full bg-white border-2 border-primary text-primary px-6 py-4 font-bold uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaPhone />
                Call Us Now
              </a>
              <a
                href="mailto:info@mamcenter.com"
                className="flex items-center justify-center gap-3 w-full bg-white border-2 border-primary text-primary px-6 py-4 font-bold uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaEnvelope />
                Email Us
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center gap-3 w-full bg-primary text-white px-6 py-4 font-bold uppercase text-sm tracking-wide hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaTrophy />
                Book a Lesson Now
              </button>
            </div>

            {/* Map */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Find Us</h4>
              <div className="aspect-video w-full border-4 border-primary shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAM Center Location"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600 text-center">
                <a
                  href="https://maps.google.com/?q=123+Equestrian+Way+Horse+City+HC+12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Get Directions →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </PageSection>

      {/* Footer */}
      <Footer
        description="Excellence in equestrian care and services. Join our community of passionate horse lovers."
        sections={footerSections}
        contactInfo={contactInfo}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
      />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Home;

