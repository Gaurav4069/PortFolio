import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Academic Path
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Education <span className="text-slate-500">& Milestones.</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Spacer */}
                <div className="hidden md:block w-5/12" />

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 transform -translate-x-1.5 md:-translate-x-2" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className="glass-morphism p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 shrink-0 border border-white/10">
                        <img src={edu.img} alt={edu.school} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{edu.date}</span>
                        <h3 className="text-xl font-black text-white leading-tight">{edu.degree}</h3>
                        <p className="text-sm font-medium text-slate-400">{edu.school}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {edu.desc}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                        Grade: {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

