import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialItems = [
    { icon: <FiGithub size={20} />, link: "https://github.com/Gaurav4069" },
    { icon: <FiLinkedin size={20} />, link: "https://linkedin.com" },
    { icon: <FiTwitter size={20} />, link: "#" },
    { icon: <FiInstagram size={20} />, link: "#" },
  ];

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Brand Side */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              GS<span className="text-blue-500">.</span>
            </h2>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
              Crafting premium digital experiences with a focus on UI excellence and technical performance.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Side */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 Gaurav Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

