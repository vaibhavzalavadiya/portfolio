import React, { useState } from "react";
import { Mail, Download, ArrowRight, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [hoverEmail, setHoverEmail] = useState(false);
  const [hoverResume, setHoverResume] = useState(false);
  
  return (
    <section id="contact" className="py-10 md:py-18 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-slate-800 dark:text-white">Email Me</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-5">Have a question or want to discuss a project? Drop me a message.</p>
            <a
              href="mailto:youremail@example.com"
              className="group flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              onMouseEnter={() => setHoverEmail(true)}
              onMouseLeave={() => setHoverEmail(false)}
            >
              <span>Send an Email</span>
              <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${hoverEmail ? 'transform translate-x-1' : ''}`} />
            </a>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                <Download className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-slate-800 dark:text-white">Resume</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-5">Get a copy of my resume to learn more about my skills and experience.</p>
            <a
              href="/VAIBHAV_ZALAVADIYA.pdf"
              download
              className="group flex items-center justify-between bg-white dark:bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
              onMouseEnter={() => setHoverResume(true)}
              onMouseLeave={() => setHoverResume(false)}
            >
              <span>Download Resume</span>
              <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${hoverResume ? 'transform translate-x-1' : ''}`} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="https://linkedin.com/in/yourprofile" className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </a>
          <a href="https://github.com/yourusername" className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Github className="h-6 w-6 text-slate-800 dark:text-slate-300" />
          </a>
          <a href="https://twitter.com/yourusername" className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Twitter className="h-6 w-6 text-blue-400" />
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-400">Let's build something extraordinary together</p>
        </div>
      </div>
    </section>
  );
}