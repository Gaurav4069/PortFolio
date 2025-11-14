import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414]">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

  <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f3c] to-[#050414]"></div>
<div className="absolute inset-0 
  bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)]
  bg-[size:16px_28px]
  [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_80%,transparent_100%)]
  after:content-['']
  after:absolute after:inset-0 
  after:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,transparent_70%)]
  after:opacity-70
  mix-blend-overlay
  animate-pulse-slow
"></div>

      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Footer />
      </div>

    </div>
  );
};

export default App;
