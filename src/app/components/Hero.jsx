import React from "react";
import { FiArrowRight } from "react-icons/fi";
import FlipImageCard from "./ui/FlipImageCard";

const Hero = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center py-20 px-10">
      <div className="flex flex-col items-center md:items-start space-y-3">
        <div className="w-full marquee-wrapper block md:hidden">
          <div className="marquee-inner">
            <span className="text-5xl font-gabaritobold text-gray-500 marquee-text">
              Frontend Developer &nbsp;
            </span>
            <span className="text-5xl font-gabaritobold text-gray-500 marquee-text">
              Frontend Developer &nbsp;
            </span>
          </div>
        </div>
        <h1 className="hidden md:block text-5xl font-gabaritobold text-gray-500 text-center md:text-left text-nowrap">
          Frontend Developer
        </h1>

        <h1 className="text-5xl font-gabaritosemibold text-amber-50 max-w-xs text-center md:text-left z-10">
          Muhammad Akbar Felda
        </h1>
        <div className="bg-amber-200 p-0.5 w-20 mx-auto md:mx-0 "></div>
        <p className="text-base font-gabaritoreguler text-gray-500 text-center md:text-left max-w-xs">
          Experienced in building responsive user interfaces using Flutter and
          React. Skilled in managing state with GetX. Focused on clean code,
          UI/UX principles, and effective team collaboration to create efficient
          and engaging applications.
        </p>
        <a
          href="#contact"
          className="text-amber-200 flex items-center space-x-2 justify-center md:justify-start mt-2"
        >
          <span>Let's talk</span>
          <FiArrowRight className="text-amber-200" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center mb-20 space-y-4">
        <FlipImageCard
          image1="/assets/images/photo-kosong.png"
          image2="/assets/images/photo-profil1.png"
          alt1="First Image"
          alt2="Second Image"
        />
        <p className="font-light text-white z-10 translate-y-30 md:translate-y-28">
          <span className="text-white">Just call me </span>
          <span className="text-purple-500">Akbar</span>
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end text-white z-10 gap-[70px] mt-10">
        <div className="text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-center md:text-end">
          <span>Years of</span>
          <span>Experience</span>
          <p className="text-3xl font-gabaritobold text-white">2+</p>
        </div>
        <div className="text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-center md:text-end">
          <span>Complete</span>
          <span>Project</span>
          <p className="text-3xl font-gabaritosemibold text-white">220+</p>
        </div>
        <div className="text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-center md:text-end">
          <span>Ongoing</span>
          <span>Project</span>
          <p className="text-3xl font-gabaritobold text-white">220+</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
