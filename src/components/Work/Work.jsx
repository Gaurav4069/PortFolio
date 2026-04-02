import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiLayers } from "react-icons/fi";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Portfolio
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Featured <span className="text-slate-500">Case Studies.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-500 p-10 min-h-[320px] flex flex-col justify-between"
            >
              {/* Icon Background Decor */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <FiLayers size={180} />
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed line-clamp-3 font-light">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-8 flex items-center gap-4">
                <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Case Study <FiExternalLink className="text-blue-500" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Modal / Case Study Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-3xl w-full bg-slate-900 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <FiX size={24} />
              </button>

              <div className="p-10 md:p-16 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Project Overview</h4>
                  <p className="text-lg text-slate-400 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  {selectedProject.webapp && (
                    <a 
                      href={selectedProject.webapp} 
                      target="_blank" 
                      className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                      Live Reality <FiExternalLink />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      className="px-10 py-5 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Source Code <FiGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;


