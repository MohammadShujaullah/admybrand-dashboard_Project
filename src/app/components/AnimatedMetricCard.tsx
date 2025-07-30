'use client';
import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedMetricCard({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // ✅ This is equivalent to 'easeOut'
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
}
