import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0a0f3c] via-[#0a0f48] to-[#050414]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#3b82f6] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-5 text-lg font-medium">
          My technical skills — crafted through projects and real-world experience 🚀
        </p>
      </div>

      {/* Skills Rows */}
      <div className="space-y-16">
        {SkillsInfo.map((category, index) => (
          <div key={category.title} className="overflow-hidden">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center uppercase tracking-widest">
              {category.title}
            </h3>

            {/* Scrolling Row */}
            <div className="relative w-full overflow-hidden">
              <div
                className={`flex gap-8 whitespace-nowrap ${
                  index % 2 === 0 ? "animate-scroll" : "animate-scroll-reverse"
                }`}
              >
                {/* Duplicate items for infinite loop effect */}
                {[...category.skills, ...category.skills].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-[#0b0e2e] border border-blue-800 rounded-3xl py-3 px-5 
                    min-w-[150px] hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 mr-2"
                    />
                    <span className="text-sm sm:text-base text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
