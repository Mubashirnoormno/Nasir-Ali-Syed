/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Book, books } from "../data";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BooksSection() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/books");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="books" className="py-32 bg-bg-paper relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand-accent"></span>
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-accent">Publications</span>
            </div>
            <h2 className="urdu-header text-5xl md:text-6xl text-brand-primary mb-6 leading-tight">ادبی تخلیقات</h2>
            <p className="text-brand-primary/40 font-serif text-lg md:text-xl italic">"A curated collection of published scholarly works."</p>
          </div>
          <motion.button 
            onClick={handleNavigate}
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-brand-accent font-sans text-[10px] tracking-[0.3em] uppercase group cursor-pointer"
          >
            Full Catalog <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Books List - Minimalist & High-End */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              onClick={handleNavigate}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer perspective-1000"
            >
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: -5, translateZ: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[3/4] mb-8 overflow-hidden bg-bg-paper-dark shadow-xl preserve-3d"
              >
                 {book.cover ? (
                   <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                   />
                 ) : (
                   <div 
                    className="w-full h-full flex flex-col items-center justify-center p-12 text-center"
                    style={{ backgroundColor: book.color }}
                   >
                      <span className="urdu-header text-4xl text-white mb-4">{book.title}</span>
                      <div className="w-12 h-[1px] bg-white/40 mb-4"></div>
                      <span className="text-[10px] font-sans tracking-widest text-white/60 uppercase">{book.genre}</span>
                   </div>
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 {/* Shine Effect */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
              </motion.div>

              <div className="flex flex-col">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="urdu-header text-4xl text-brand-primary group-hover:text-brand-accent transition-colors">
                      {book.title}
                    </h3>
                    <span className="text-[10px] font-sans tracking-widest text-brand-accent border border-brand-accent/30 px-2 py-1 rounded">
                      {book.year}
                    </span>
                 </div>
                 <p className="text-xs font-serif tracking-[0.2em] text-brand-primary/40 uppercase mb-4">{book.titleEnglish}</p>
                 <p className="urdu-body text-lg text-brand-primary/60 line-clamp-2 mb-6 opacity-60">
                    {book.description}
                 </p>
                 <div className="flex items-center gap-2 text-[9px] font-sans tracking-widest text-brand-accent/60 uppercase group-hover:text-brand-accent transition-colors">
                    <span>View Abstract</span>
                    <ChevronRight size={12} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
