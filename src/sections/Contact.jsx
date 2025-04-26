import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="lg:py-18 pt-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6 text-gray-600">Let's work together on your next project!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:youremail@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Send an Email
        </a>
        <a
          href="/VAIBHAV_ZALAVADIYA.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}