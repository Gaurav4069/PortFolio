import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0c1a2b]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#cfe3ff]">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#3b82f6] mx-auto mt-4"></div>
        <p className="text-[#99b3cc] mt-4 text-lg font-semibold">
          A showcase of the work I’ve built using various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-[#2a3f57] bg-[#132538] rounded-2xl shadow-lg overflow-hidden cursor-pointer
           hover:-translate-y-2 transition-all duration-300
           hover:shadow-[0_0_25px_3px_rgba(56,132,255,0.45)]"

          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#d7e8ff] mb-2">
                {project.title}
              </h3>

              <p className="text-[#9db4c9] mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#1d3350] text-xs font-semibold text-[#b4c9e6] rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#132538] rounded-xl shadow-lg lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-[#2a3f57]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-[#cfe3ff] text-3xl font-bold hover:text-[#93b7dd] transition"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#132538] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-[#d7e8ff] mb-4 text-md">
                  {selectedProject.title}
                </h3>

                <p className="text-[#9db4c9] mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#1d3350] text-xs font-semibold text-[#b4c9e6] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#1d3350] hover:bg-[#294569] text-[#cfe3ff] 
                               lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#3b82f6] hover:bg-[#2563eb] text-white 
                               lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
