import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

export interface PricingFAQProps {
  question: string;
  answer: string;
  index?: number;
}

const PricingFAQ = ({ question, answer, index = 0 }: PricingFAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-primary flex-shrink-0" />
        ) : (
          <FaChevronDown className="text-primary flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingFAQ;
