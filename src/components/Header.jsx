import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Optional: Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };
  
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md" : "bg-white dark:bg-slate-900"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vaibhav
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    onClick={() => handleLinkClick(item.id)}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors relative ${
                      activeSection === item.id 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-blue-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-indigo-700 shadow-sm hover:shadow transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4 shadow-lg">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center py-2 px-3 rounded-md ${
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                        : "text-slate-700 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-blue-900/20"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <ChevronRight size={16} className="ml-auto text-blue-600 dark:text-blue-400" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => handleLinkClick("contact")}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}