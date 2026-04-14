import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const HoverCard = ({ children, className = '' }: HoverCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const GlowingButton = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}: GlowingButtonProps) => {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-20"
        initial={false}
        animate={{ scale: [1, 1.5, 1], opacity: [0, 0.2, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.button>
  );
};