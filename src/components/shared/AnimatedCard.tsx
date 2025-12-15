import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className = '' }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`bg-card rounded-xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
