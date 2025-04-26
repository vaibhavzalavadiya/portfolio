import React from "react";

function Hero() {
  return (
    <section className="relative lg:py-20 py-12 flex items-center justify-center bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-indigo-600 filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-14 sm:pb-18">
        {/* Tech-inspired graphic element */}
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-1 sm:w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold lg:pb-5 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-blue-300">
          Hi, I'm a Web Designer
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Crafting pixel-perfect, responsive interfaces with modern frameworks and design systems
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-700 transition duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-cyan-400 text-cyan-300 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-900/20 transition duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Animated arrow */}
      <a 
        href="#about" 
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>

      {/* Grid pattern styling */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}

export default Hero;
