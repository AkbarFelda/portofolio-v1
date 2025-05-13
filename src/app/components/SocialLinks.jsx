import React from "react";
// Importing your icons (SVG or any other icons)
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa'; 
import { SiFiverr } from "react-icons/si";

const SocialIcons = ({ className = '' }) => {
  return (
    <div className={`flex justify-center space-x-8 py-4 ${className}`}>
      <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
        <FaBehance className="text-white text-2xl hover:text-amber-200 transition duration-300" />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <FaDribbble className="text-white text-2xl hover:text-amber-200 transition duration-300" />
      </a>
      <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-amber-200 transition duration-300" />
      </a>
      <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer">
        <SiFiverr className="text-white text-2xl hover:text-amber-200 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialIcons;
