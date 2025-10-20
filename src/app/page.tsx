import React from "react";
import Hero from "./components/Hero";
import { FaHome, FaUserAlt, FaCodeBranch, FaEnvelope, FaCertificate, FaUniversity, FaBriefcase } from "react-icons/fa";
import { FloatingNav } from "./components/ui/Navbar";
import MarqueeSocial from "./components/MarqueeSocial";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import RecentProject from "./components/RecentProject";

export default function Home() {
  return (
    <main className="relative justify-center items-center flex flex-col">
      <div className="relative max-w-8xl w-full">
        <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl sm:left-[15px]">
          <FloatingNav
            navItems={[
            { name: 'Home', link: '#home', icon: <FaHome /> },
            // { name: 'About', link: '#about', icon: <FaUserAlt /> },
            { name: 'Projects', link: '#projects', icon: <FaCodeBranch /> },
            // { name: 'Education', link: '#education', icon: <FaUniversity /> },
            { name: 'Experience', link: '#experience', icon: <FaBriefcase /> }, 
            { name: 'Contact', link: '#contact', icon: <FaEnvelope /> },
            ]}
          />
        </div>
        <Hero /> 
        <MarqueeSocial />
        {/* <div className="my-12"></div> */}
        <Grid/>
        <Projects/>
        <RecentProject/>
      </div>
    </main>
  );
}
