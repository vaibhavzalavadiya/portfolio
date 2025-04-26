import React from "react";

function About() {
  const skills = [
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Sass", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Bootstrap", category: "framework" },
    { name: "Tailwind CSS", category: "framework" },
    { name: "Django", category: "backend" },
    { name: "Python", category: "backend" }
  ];

  return (
    <section id="about" className="lg:py-24 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header with accent line */}
        <div className="flex items-center mb-12">
          <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: About text */}
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              I'm a passionate frontend developer with a focus on creating clean,
              responsive, and user-friendly websites. I believe in building
              designs that not only look great but also provide an excellent user
              experience across all devices.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              I have professional experience working with HTML, CSS, Sass,
              JavaScript, Bootstrap, and Tailwind CSS. I enjoy combining beautiful
              design with efficient coding practices to deliver high-quality web
              projects.
            </p>
            
            {/* Experience metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-indigo-600">3+</span>
                <span className="text-gray-600 text-sm">Years Experience</span>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-indigo-600">20+</span>
                <span className="text-gray-600 text-sm">Projects</span>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-indigo-600">100%</span>
                <span className="text-gray-600 text-sm">Client Satisfaction</span>
              </div>
            </div>
            
            {/* Skills categorized */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            
            <div className="mb-4">
              <div className="font-medium text-gray-700 mb-2">Frontend Development</div>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill.category === "frontend").map(skill => (
                  <span 
                    key={skill.name} 
                    className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 border border-indigo-100 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="font-medium text-gray-700 mb-2">Frameworks & Libraries</div>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill.category === "framework").map(skill => (
                  <span 
                    key={skill.name} 
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 border border-cyan-100 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="font-medium text-gray-700 mb-2">Backend Technologies</div>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill.category === "backend").map(skill => (
                  <span 
                    key={skill.name} 
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600 border border-purple-100 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column: Visual element */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="aspect-square relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl opacity-10"></div>
                <div className="absolute inset-4 border-2 border-dashed border-indigo-200 rounded-lg"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white w-32 h-32 shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Web Designer & Developer</h3>
                <p className="text-gray-600">Specializing in modern, responsive web applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;