import React, { useState, useRef } from "react";
import ForexImg from "../assets/projects/forex-img.jpg";
import bgRemoveImg from "../assets/projects/bg-remove.png";
import JewelryImg from "../assets/projects/jewelry-img.jpg";
import EdusityImg from "../assets/projects/edusity-img.jpg";

const projects = [
  {
    title: "Forex Backtest Platform",
    image: ForexImg,
    description:
      "An AI-powered Forex strategy backtesting platform built with Django (backend) and React with Bootstrap (frontend). It features symbol/timeframe selection, dynamic trade visualization, and real-time strategy simulation using historical data.",
    url: "https://forex-trading-mocha.vercel.app/",
    tags: ["React", "Django", "AI"],
  },
  {
    title: "AI Background Remover",
    image: bgRemoveImg,
    description:
      "A fast and user-friendly AI background remover web app built using Flask and React. Instantly upload an image, remove the background with one click, and download a clean cutout—ideal for product photos, designers, and online sellers.",
    url: "https://apexremovecom.vercel.app/",
    tags: ["Flask", "React", "AI"],
  },
  {
    title: "Jewelry Store – Online Shop",
    image: JewelryImg,
    description:
      "A fully responsive online jewelry store built without frameworks using pure HTML, CSS, JavaScript, and jQuery. Features include interactive product galleries, smooth animations, and a clean, elegant user interface for browsing and shopping.",
    url: "https://jewelry-storesite.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Edusity – College & University Platform",
    image: EdusityImg,
    description:
      "A sleek and responsive university website built using React. Edusity showcases courses, faculty, events, and admissions info—perfect for modern educational institutions looking to build a strong online presence.",
    url: "https://edusity-react-web-gamma.vercel.app/",
    tags: ["React", "Education"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate max index based on screen size
  const getMaxIndex = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return projects.length - 1; // Show 1 card on mobile
      } else if (window.innerWidth < 1024) {
        return projects.length - 2; // Show 2 cards on tablet
      }
    }
    return projects.length - 3; // Show 3 cards on desktop
  };

  const maxIndex = getMaxIndex();

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Calculate slide percentage based on screen size
  const getSlidePercentage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return 100; // 100% width on mobile (1 card)
      } else if (window.innerWidth < 1024) {
        return 50; // 50% width on tablet (2 cards)
      }
    }
    return 33.33; // 33.33% width on desktop (3 cards)
  };

  return (
    <section id="projects" className="py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Projects</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12 rounded"></div>
        
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide} 
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 hidden sm:flex items-center justify-center rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 transition ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out mb-6"
              style={{ 
                transform: `translateX(-${currentIndex * getSlidePercentage()}%)` 
              }}
            >
              {projects.map((project, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4 mb-8 md:mb-0"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 border border-gray-100">
                      <div className="relative block pt-[60%] overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <a
                              href={project.url}
                              className="text-white font-bold hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.title}
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex flex-wrap mb-3">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 transition-colors"
                          >
                            {project.title}
                          </a>
                        </h3>
                        
                        <div className="mb-4 flex-1">
                          <p className={`text-gray-600 text-sm ${isExpanded ? "" : "line-clamp-3"}`}>
                            {project.description}
                          </p>
                          {project.description.length > 120 && (
                            <button
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mt-2 focus:outline-none cursor-pointer"
                              onClick={() => toggleReadMore(index)}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <a
                            href={project.url}
                            className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>View Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile navigation controls */}
          <div className="flex justify-between items-center mt-6 sm:hidden">
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className={`flex items-center justify-center px-4 py-2 rounded bg-indigo-100 text-indigo-600 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {projects.length}
            </div>
            
            <button 
              onClick={nextSlide} 
              disabled={currentIndex >= maxIndex}
              className={`flex items-center justify-center px-4 py-2 rounded bg-indigo-100 text-indigo-600 ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots navigation - Hidden on mobile */}
          <div className="hidden sm:flex justify-center space-x-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
                } hover:bg-indigo-400 transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}