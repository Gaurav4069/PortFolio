import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#0b1a2c]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#d7e8ff]">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#3b82f6] mx-auto mt-4"></div>
        <p className="text-[#9db4c9] mt-4 text-lg font-semibold">
          My education has been a journey of growth and learning
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#3b82f6] h-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

        {/* All Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-[#274766] bg-[#13273d]/60 backdrop-blur-md
              hover:shadow-[0_0_25px_3px_rgba(56,132,255,0.45)]
              transition-all duration-300 hover:scale-[1.03]
              sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Image + Text */}
              <div className="flex items-center space-x-8">
                {/* School Logo */}
                <div className="w-24 h-24 bg-[#dce8f7] rounded-md overflow-hidden shadow">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#d7e8ff]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-[#9db4c9]">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-[#6f8ba6] mt-2">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-[#b4c9e6] font-bold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-[#9db4c9]">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
