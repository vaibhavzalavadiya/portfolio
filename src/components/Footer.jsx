import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500 mt-10">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}
