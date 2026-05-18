import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { images } from "../data";

export function Hero() {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % images.hero.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E9DDC7] pt-28 pb-16"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-texture pointer-events-none" />

      {/* Spotlights in the background */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Left Spotlight Lamp */}
        <div className="absolute top-0 left-[15%] md:left-[22%] flex flex-col items-center">
          <div className="w-1.5 h-10 bg-[#30160B] shadow-inner" />
          <div className="w-6 h-8 bg-[#452212] rounded-b-md border border-[#2D1409]/30 relative">
            {/* Lamp Bulb */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-2 bg-amber-200 rounded-full blur-[2px]" />
          </div>
          {/* Light Beam */}
          <div 
            className="absolute top-14 w-80 h-[450px] origin-top -rotate-12 opacity-65 blur-2xl pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(ellipse at top, rgba(254, 243, 199, 0.4) 0%, rgba(254, 243, 199, 0.05) 50%, rgba(254, 243, 199, 0) 80%)"
            }}
          />
        </div>

        {/* Right Spotlight Lamp */}
        <div className="absolute top-0 right-[15%] md:right-[22%] flex flex-col items-center">
          <div className="w-1.5 h-10 bg-[#30160B] shadow-inner" />
          <div className="w-6 h-8 bg-[#452212] rounded-b-md border border-[#2D1409]/30 relative">
            {/* Lamp Bulb */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-2 bg-amber-200 rounded-full blur-[2px]" />
          </div>
          {/* Light Beam */}
          <div 
            className="absolute top-14 w-80 h-[450px] origin-top rotate-12 opacity-65 blur-2xl pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(ellipse at top, rgba(254, 243, 199, 0.4) 0%, rgba(254, 243, 199, 0.05) 50%, rgba(254, 243, 199, 0) 80%)"
            }}
          />
        </div>
      </div>

      {/* Center Showcase Board */}
      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Hanging Rope/Chains (Resembles board hanging) */}
        <div className="flex justify-between w-[85%] px-12 absolute -top-8 left-1/2 -translate-x-1/2 -z-10 opacity-30 pointer-events-none">
          <div className="w-[2px] h-10 bg-amber-950/40 rotate-12" />
          <div className="w-[2px] h-10 bg-amber-950/40 -rotate-12" />
        </div>

        {/* Board Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full bg-[#FAF4E9] border-8 border-[#3A1C0E] shadow-2xl relative overflow-hidden"
        >
          {/* Canvas inner bevel border */}
          <div className="absolute inset-2 border border-[#3A1C0E]/10" />

          {/* Grid Layout inside Blackboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] relative z-10">
            {/* Portrait column (Left / RTL friendly) */}
            <div className="md:col-span-4 border-r md:border-r border-[#3A1C0E]/10 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#FAF4E9]">
              <motion.img 
                key={activeImageIdx}
                src={images.hero[activeImageIdx]} 
                alt="Professor Nasir Ali Syed" 
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] absolute inset-0"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1C0E]/40 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Couplet column (Right / Middle) */}
            <div className="md:col-span-8 p-8 md:p-16 flex flex-col justify-center items-center text-center">
              {/* The Single Couplet */}
              <div className="space-y-6 md:space-y-8 my-auto">
                <p className="nastaliq text-2xl md:text-3.5xl text-[#4A2511] leading-loose select-all tracking-wide">
                  یہ اور بات کہ موجود اپنے گھر میں ہوں
                </p>
                <p className="nastaliq text-2xl md:text-3.5xl text-[#4A2511] leading-loose select-all tracking-wide">
                  میں اس کے باوجود مسلسل سفر میں ہوں
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ledge (Easel Shelf) */}
        <div className="w-[103%] -mt-1 relative z-25">
          <div className="h-6 md:h-8 bg-[#4C2411] border-t-2 border-[#6D381B] shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Ledge wooden texture glow */}
            <div className="h-[2px] w-full bg-white/10" />
            {/* Wood highlight lines */}
          </div>
          <div className="h-2.5 w-[96%] mx-auto bg-black/35 blur-[2px] rounded-full mt-0.5" />
        </div>
      </div>
    </section>
  );
}
