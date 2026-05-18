/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { images } from "../data";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-bg-paper flex flex-col items-center justify-center p-6"
    >
      <div className="absolute inset-0 opacity-[0.05] bg-texture pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-16">
           <img 
             src={images.logo} 
             className="h-44 sm:h-52 md:h-60 w-auto opacity-100 object-contain" 
             alt="Logo" 
           />
           <motion.div 
             className="absolute -inset-10 border border-brand-accent/15 rounded-full"
             animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.25, 0.08] }}
             transition={{ duration: 3, repeat: Infinity }}
           />
        </div>

        <div className="flex flex-col items-center w-64">
           <div className="w-full h-[2px] bg-brand-primary/10 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-brand-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
           </div>
           
           <motion.span 
              className="mt-4 text-[9px] font-sans tracking-[0.5em] text-brand-primary/50 uppercase font-medium"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
           >
              LOADING / {progress}%
           </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
