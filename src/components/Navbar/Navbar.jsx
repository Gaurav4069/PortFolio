import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#020617]/70 backdrop-blur-lg shadow-md border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer select-none">
          <span className="text-[#2563eb]">&lt;</span>
          <span className="text-white">Gaurav</span>
          <span className="text-[#2563eb]">/</span>
          <span className="text-white">Singh</span>
          <span className="text-[#2563eb]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#3b82f6] ${
                activeSection === item.id ? "text-[#3b82f6]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Gaurav4069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#3b82f6] transition-transform duration-200 hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-859578270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#3b82f6] transition-transform duration-200 hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#3b82f6] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#3b82f6] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#020617]/80 backdrop-blur-lg border border-blue-500/20 z-50 rounded-lg shadow-xl md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-200 hover:text-[#3b82f6] ${
                  activeSection === item.id ? "text-[#3b82f6]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#3b82f6] transition-transform duration-200 hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#3b82f6] transition-transform duration-200 hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
