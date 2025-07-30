'use client';

import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedChartCardProps {
  children: ReactNode;
  index: number;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function AnimatedChartCard({ children }: AnimatedChartCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn} // ✅ FIXED here
    >
      {children}
    </motion.div>
  );
}
