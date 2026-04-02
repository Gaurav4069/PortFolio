import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Capabilities
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Technical <span className="text-slate-500">Infrastructure.</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SkillsInfo.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-morphism p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-[10px] font-black text-blue-400">
                  {category.skills.length}
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 group/skill">
                    <div className="p-2 rounded-xl bg-slate-800/50 border border-white/5 group-hover/skill:border-blue-500/50 transition-all duration-300">
                      <img src={skill.logo} alt={skill.name} className="h-5 w-5 grayscale group-hover/skill:grayscale-0 transition-all" />
                    </div>
                    <span className="text-sm font-medium text-slate-400 group-hover/skill:text-slate-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

