import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export interface ThreadPathProps extends React.SVGProps<SVGPathElement> {
  d: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  ease?: Transition['ease'];
  stitchDash?: string;
  onComplete?: () => void;
  className?: string;
}

export const ThreadPath: React.FC<ThreadPathProps> = ({
  d,
  strokeColor = '#B8442D',
  strokeWidth = 1.5,
  duration = 1.4,
  delay = 0,
  ease = [0.22, 1, 0.36, 1],
  stitchDash,
  onComplete,
  className = '',
  ...rest
}) => {
  const prefersReducedMotion = useMotionPreference();

  if (prefersReducedMotion) {
    return (
      <path
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={stitchDash}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={stitchDash}
      className={className}
      initial={{ pathLength: 0, opacity: 0.8 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease,
      }}
      onAnimationComplete={onComplete}
      {...(rest as any)}
    />
  );
};

