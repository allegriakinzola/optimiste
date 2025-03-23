'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAnimation } from '@/context/AnimationContext';

export default function LogoAnimation() {
  const { setAnimationComplete } = useAnimation();

  useEffect(() => {
    // Cache l'animation après 3 secondes et affiche le reste du contenu
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <div className="relative w-[300px] h-[100px] flex items-center justify-between gap-10">
        {/* Cercle du logo */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] h-[100px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="black" />
            <circle cx="50" cy="50" r="35" fill="white" />
            <circle cx="50" cy="50" r="8" fill="black" />
          </svg>
        </motion.div>

        {/* Texte "ptimiste" */}
        <motion.div
          className="absolute left-[90px] top-1/2 -translate-y-1/2 text-6xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          ptimiste
        </motion.div>
      </div>
    </motion.div>
  );
}
