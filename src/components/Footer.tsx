/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../data";

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (id: string, type: "scroll" | "link") => {
    if (type === "link") {
      navigate(`/${id}`);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "About", id: "about", type: "link" },
    { name: "Books Archive", id: "books", type: "link" },
    { name: "Daily Columns", id: "columns", type: "link" },
    { name: "Poetry Selection", id: "poetry", type: "link" },
    { name: "Moments Album", id: "gallery", type: "link" },
  ];

  return (
    <footer id="contact" className="bg-brand-primary text-white py-24 relative overflow-hidden border-t border-brand-accent/15">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Socials Side (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Displaying ONLY the elegant circular calligraphy logo in footer */}
            <div className="mb-10">
               <img src={images.logo} className="h-28 w-auto brightness-0 invert filter opacity-90 hover:opacity-100 transition-opacity" alt="Logo" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-12">
               <div className="flex flex-col">
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-accent mb-4">Direct Contact</span>
                  <div className="flex items-center gap-4 text-white mb-2">
                     <Mail size={16} className="text-brand-accent" />
                     <span className="text-xl font-serif tracking-wide">nasir@syed.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                     <Phone size={16} className="text-brand-accent" />
                     <span className="text-xl font-serif tracking-wide">+92-333-XXXXXXX</span>
                  </div>
               </div>

               <div className="flex flex-col">
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-accent mb-4">Address</span>
                  <div className="flex items-start gap-4 text-white">
                     <MapPin size={16} className="text-brand-accent mt-1" />
                     <span className="urdu-body text-xl">پشاور، خیبر پختونخوا، پاکستان</span>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
               {[
                 { icon: <Facebook size={18} />, label: "Facebook" },
                 { icon: <Twitter size={18} />, label: "Twitter" },
                 { icon: <Youtube size={18} />, label: "YouTube" },
                 { icon: <Instagram size={18} />, label: "Instagram" }
               ].map((social, idx) => (
                 <motion.a 
                   key={idx}
                   href="#"
                   whileHover={{ scale: 1.1, color: "#d4af37" }}
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/45 transition-all hover:border-brand-accent/40"
                 >
                   {social.icon}
                 </motion.a>
               ))}
            </div>
          </motion.div>

          {/* Quick Navigation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col pt-4 items-start md:items-end text-left md:text-right w-full"
          >
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-accent mb-8">Navigation</span>
            <ul className="space-y-6">
               {navLinks.map((link, idx) => (
                 <li key={idx}>
                    <button 
                      onClick={() => handleLinkClick(link.id, link.type as "scroll" | "link")}
                      className="flex items-center md:flex-row-reverse gap-4 text-white/60 hover:text-brand-accent transition-all text-sm uppercase tracking-widest group cursor-pointer"
                    >
                       <span className="h-[1px] w-0 bg-brand-accent group-hover:w-8 transition-all duration-500" />
                       <span className="group-hover:translate-x-2 md:group-hover:-translate-x-2 transition-transform duration-500">{link.name}</span>
                    </button>
                 </li>
               ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/20 text-center md:text-left">
              © {new Date().getFullYear()} PROFESSOR NASIR ALI SYED. ALL RIGHTS RESERVED.
           </div>
           
           <motion.button 
             onClick={scrollToTop}
             whileHover={{ y: -5 }}
             className="flex items-center gap-4 text-white/40 hover:text-brand-accent transition-colors group"
           >
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase">Return to Top</span>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:border-brand-accent">
                 <ArrowUp size={16} />
              </div>
           </motion.button>
        </div>
      </div>
    </footer>
  );
}
