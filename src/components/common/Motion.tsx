import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.1
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SectionEyebrowProps {
  badge?: string;
  label?: string;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  badge,
  label,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Structural Terracotta Line Motif */}
      <motion.span
        initial={shouldReduceMotion ? { width: '28px' } : { width: 0 }}
        whileInView={{ width: '28px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-[2px] bg-[#C96F1B] rounded-full inline-block shrink-0"
      />

      {/* Eyebrow Label Text */}
      <span className="font-display text-xs sm:text-sm text-[#C96F1B] font-semibold tracking-wider uppercase">
        {badge || label}
      </span>
    </div>
  );
};

interface ArchitecturalDividerProps {
  className?: string;
}

export const ArchitecturalDivider: React.FC<ArchitecturalDividerProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full my-8 sm:my-12 flex items-center justify-center ${className}`} aria-hidden="true">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8DDD0] to-transparent" />
      <div className="absolute w-2 h-2 rounded-full bg-[#C96F1B]/40 border border-white" />
    </div>
  );
};
