import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // You can swap with Heroicons or FontAwesome if needed

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 text-sm font-semibold">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3 text-sm font-semibold">
            <li><a href="#about" className="block hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="block hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="block hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
