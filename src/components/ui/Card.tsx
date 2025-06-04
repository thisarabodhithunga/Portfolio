import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-custom dark:shadow-custom-dark overflow-hidden';
  const hoverStyles = hoverEffect ? 'transition-transform duration-300 hover:transform hover:scale-105' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;