'use client';
import { motion } from 'framer-motion';

export default function AnimatedChartCard({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // ✅ Correct easing format
      },
    },
  };


  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      {children}
    </motion.div>
  );
}
