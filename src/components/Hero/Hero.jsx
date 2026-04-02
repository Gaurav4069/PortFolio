import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Motion */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      
      <div className="container mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]"
        >
          Designing <span className="text-gradient">Digital</span> <br />
          Experiences That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light"
        >
          Senior UI/UX Designer & Fullstack Developer specializing in building 
          premium, scalable platforms with a focus on world-class aesthetics and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-semibold transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden shadow-xl shadow-blue-500/20"
          >
            Explore Projects
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-slate-200 rounded-full font-semibold transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Get in touch
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-10 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
