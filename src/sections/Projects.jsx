import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ForexImg from "../assets/projects/forex-img.jpg";
import bgRemoveImg from "../assets/projects/bg-remove.png";
import JewelryImg from "../assets/projects/jewelry-img.jpg";
import EdusityImg from "../assets/projects/edusity-img.jpg";
import Css2RtlImg from "../assets/projects/rtl-img.jpg";


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
    title: "Edusity – College & University",
    image: EdusityImg,
    description:
      "A sleek and responsive university website built using React. Edusity showcases courses, faculty, events, and admissions info—perfect for modern educational institutions looking to build a strong online presence.",
    url: "https://edusity-react-web-gamma.vercel.app/",
    tags: ["React", "Education"],
  },
  {
    title: "CSS2RTL – RTL CSS Converter Tool",
    image: Css2RtlImg,
    description:
      "A smart and developer-friendly RTL CSS converter built with React. CSS2RTL lets users quickly transform LTR styles into clean, direction-aware RTL code—ideal for multilingual web projects and internationalization workflows.",
    url: "https://css2rtl-vaibhavs-projects-b8c97238.vercel.app/",
    tags: ["React", "Tool", "CSS", "RTL"],
  }
  
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  // Detect if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleReadMore = (index, e) => {
    e.stopPropagation();
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  // Direct navigation controls without using custom classes
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id="projects" className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Projects</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12 rounded"></div>
        
        {/* Conditional classNames based on screen size */}
        <div className={`relative ${isMobile ? '' : 'px-12'}`}>
          {/* Side arrows for desktop only */}
          {!isMobile && (
            <>
              <button 
                onClick={goPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={goNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <Swiper className="pb-4 !space-x-0 !space-y-0"
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
           
          >
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <SwiperSlide key={index} className="!h-auto">
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
                            onClick={(e) => e.stopPropagation()}
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
                          className="hover:text-indigo-600 transition-colors line-clamp-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.title}
                        </a>
                      </h3>

                      <div className="mb-4 flex-1">
                        <p className={`text-gray-600 text-sm ${isExpanded ? "" : "line-clamp-4"}`}>
                          {project.description}
                        </p>
                        {project.description.length > 120 && (
                          <button
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mt-2 focus:outline-none cursor-pointer"
                            onClick={(e) => toggleReadMore(index, e)}
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Project</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          
          {/* Bottom arrows for mobile only */}
          {isMobile && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button 
                onClick={goPrev}
                className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={goNext}
                className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}