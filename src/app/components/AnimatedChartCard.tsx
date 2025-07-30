'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedChartCardProps {
  children: ReactNode;
  index: number;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,       // you can also make this `index * 0.2` if you want staggered effect
      duration: 0.6,
      ease: "easeInOut", // ✅ fix: string, not array
    },
  },
};

export default function AnimatedChartCard({ children }: AnimatedChartCardProps) {
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
