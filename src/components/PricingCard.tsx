import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';

export interface PricingCardProps {
  packageName: string;
  tier: 'basic' | 'standard' | 'premium';
  price: number;
  duration: string;
  isRecommended?: boolean;
  discount?: number;
  features: string[];
  notIncluded?: string[];
  index?: number;
  onChoosePlan?: () => void;
}

const PricingCard = ({
  packageName,
  tier,
  price,
  duration,
  isRecommended = false,
  discount,
  features,
  notIncluded = [],
  index = 0,
  onChoosePlan,
}: PricingCardProps) => {
  const getTierColor = () => {
    switch (tier) {
      case 'basic':
        return 'border-gray-300';
      case 'standard':
        return 'border-primary';
      case 'premium':
        return 'border-primary ring-2 ring-primary/20';
      default:
        return 'border-gray-300';
    }
  };

  const originalPrice = discount ? price / (1 - discount / 100) : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white border-2 ${getTierColor()} shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
        isRecommended ? 'transform scale-105' : ''
      }`}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
          <FaStar />
          Most Popular
        </div>
      )}

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide transform rotate-12 shadow-md">
          Save {discount}%
        </div>
      )}

      {/* Header */}
      <div className={`p-6 ${isRecommended ? 'bg-primary text-white' : 'bg-gray-50'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${isRecommended ? 'text-white' : 'text-gray-900'}`}>
          {packageName}
        </h3>
        <div className="flex items-baseline gap-2">
          {discount && (
            <span className={`text-lg line-through ${isRecommended ? 'text-white/60' : 'text-gray-400'}`}>
              ${originalPrice.toFixed(0)}
            </span>
          )}
          <span className={`text-5xl font-bold ${isRecommended ? 'text-white' : 'text-primary'}`}>
            ${price}
          </span>
          <span className={`text-lg ${isRecommended ? 'text-white/80' : 'text-gray-600'}`}>
            /{duration}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
          {notIncluded.map((feature, idx) => (
            <li key={`not-${idx}`} className="flex items-start gap-3 opacity-40">
              <span className="text-gray-400 mt-1 flex-shrink-0">✕</span>
              <span className="text-gray-500 line-through">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0">
        <button
          onClick={onChoosePlan}
          className={`w-full py-3 font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
            isRecommended
              ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
              : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
          }`}
        >
          Choose Plan
        </button>
      </div>

      {/* Bottom accent line */}
      <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${
        isRecommended ? 'bg-white' : 'bg-primary'
      }`} />
    </motion.div>
  );
};

export default PricingCard;
