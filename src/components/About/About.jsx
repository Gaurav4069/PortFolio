import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Gaurav Singh
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#3b82f6] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#3b82f6]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
        I am a full-stack developer experienced in building scalable and feature-rich web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and modern tools to create secure, responsive, and high-performance solutions across real-world projects.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1LGsJ8zOpfe8ult0cJuEyUeGelZFsEp-X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
              boxShadow: '0 0 10px #2563eb, 0 0 20px #2563eb, 0 0 40px #2563eb',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-blue-600 rounded-full m-8"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Gaurav Singh"
              className=" w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(37,99,235,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
