import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-900 dark:to-blue-900/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-slate-200 dark:border-slate-700">
          {/* Left Side - Brand */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vaibhav
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xs mx-auto md:mx-0 text-center md:text-left">
              Creating beautiful, responsive, and user-friendly web experiences with modern technologies.
            </p>
          </div>
          
          {/* Right Side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-600 dark:text-slate-300">
                  <a href="mailto:info@example.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">vaibhavzalavadiya3@gmail.com</a>
                </li>
                <li className="text-slate-600 dark:text-slate-300">
                  <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 6355981951</a>
                </li>
                <li className="text-slate-600 dark:text-slate-300">
                  <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Send Message</a>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/yourusername" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/yourusername" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="mailto:info@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Vaibhav Zalavadiya. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
            Designed and built with <span className="text-red-500">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}