import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Spotlight } from "./ui/Spotlight";
import FlipImageCard from "./ui/FlipImageCard";

const Hero = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center py-20 px-10">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md-top-20 h-screen" fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl font-gabaritobold text-gray-500 whitespace-nowrap text-center md:text-left mt-4 md:mb-8 z-10">
          Frontend Developer
        </h1>
        <h1 className="text-5xl font-gabaritosemibold text-amber-50 max-w-xs text-center md:text-left z-10">
          Muhammad Akbar Felda
        </h1>
        <div className="bg-amber-200 p-0.5 w-24 my-3 mx-auto md:mx-0 z-10"></div>
        <p className="text-lg font-gabaritoreguler text-gray-500 max-w-xs text-center md:text-left">
          Experienced in building responsive user interfaces using Flutter and
          React. Skilled in managing state with GetX. Focused on clean code,
          UI/UX principles, and effective team collaboration to create efficient
          and engaging applications.
        </p>
        <a
          href="#contact"
          className="text-amber-200 flex items-center space-x-2 mt-5 justify-center md:justify-start z-10"
        >
          <span>Let's talk</span>
          <FiArrowRight className="text-amber-200" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center mb-20 z-10 space-y-4">
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
