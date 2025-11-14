import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] 
        bg-gradient-to-b from-[#07102d] via-[#0a1440] to-[#050a1a] border-t border-blue-800 shadow-[0_0_20px_rgba(30,64,175,0.4)]">
      <div className="container mx-auto text-center">
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-blue-400 tracking-wider drop-shadow-lg">
          Gaurav Singh
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-blue-400 text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex flex-wrap justify-center space-x-5 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/gaurav-singh-859578270",
            },
            { icon: <FaGithub />, link: "https://github.com/Gaurav4069" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110 
              drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6 tracking-wide">
          © 2025 Gaurav Singh • All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
