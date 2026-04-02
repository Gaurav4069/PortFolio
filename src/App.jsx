import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-mesh opacity-30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;


