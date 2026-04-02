import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5] bg-slate-900 shadow-2xl">
              <img
                src={profileImage}
                alt="Gaurav Singh"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 backdrop-blur-md">
                <p className="text-sm font-medium text-blue-400 mb-1">Current Focus</p>
                <p className="text-white font-bold tracking-tight">Fullstack Engineering & UI Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm">The Story</h3>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Crafting interfaces, <br />
                <span className="text-slate-500">one pixel at a time.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
              <p>
                I am a full-stack developer based in India, dedicated to merging technical
                excellence with high-end design. My journey in the MERN stack is driven by
                a passion for building products that aren't just functional, but delightful to use.
              </p>
              <p>
                With a background in Electronics and Communication from MNNIT Allahabad,
                I bring a structured approach to complex problem-solving. I specialize in
                architecting scalable backends and crafting fluid frontends that feel
                like a natural extension of the user.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-black text-white">4.0+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Average CGPA</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">15+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Projects Built</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://drive.google.com/file/d/1LGsJ8zOpfe8ult0cJuEyUeGelZFsEp-X/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-blue-400 font-bold tracking-tight group"
              >
                Download Full Resume
                <div className="h-0.5 w-8 bg-blue-500/30 group-hover:w-16 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

