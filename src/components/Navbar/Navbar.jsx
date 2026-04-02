import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          GS.
        </motion.div>

        {/* Desktop Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${
            scrolled 
              ? "bg-slate-900/80 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50" 
              : "bg-white/5 border-white/5 backdrop-blur-sm"
          }`}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/Gaurav4069" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-200"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-6 rounded-3xl bg-slate-900/95 border border-white/10 backdrop-blur-2xl md:hidden flex flex-col gap-4 pointer-events-auto shadow-2xl"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 text-lg font-semibold text-slate-200 border-b border-white/5 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-6 pt-4 px-4">
              <a href="https://github.com/Gaurav4069" target="_blank" className="text-slate-400 hover:text-white"><FiGithub size={24} /></a>
              <a href="#" target="_blank" className="text-slate-400 hover:text-white"><FiLinkedin size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

