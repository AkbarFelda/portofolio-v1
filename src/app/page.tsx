import React from "react";
import Hero from "./components/Hero";
import { FaHome, FaUserAlt, FaCodeBranch, FaEnvelope, FaCertificate } from "react-icons/fa";
import { FloatingNav } from "./components/ui/Navbar";
import MarqueeSocial from "./components/MarqueeSocial";
import Grid from "./components/ui/Grid";

export default function Home() {
  return (
    <main className="relative justify-center items-center flex flex-col">
      <div className="relative max-w-8xl w-full">
        <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl sm:left-[15px]">
          <FloatingNav
            navItems={[
              { name: 'Home', link: '/', icon: <FaHome /> },
              { name: 'About', link: '/about', icon: <FaUserAlt /> },
              { name: 'Projects', link: '/projects', icon: <FaCodeBranch /> },
              { name: 'Certificate', link: '/certif', icon: <FaCertificate /> },
              { name: 'Experience', link: '/contact', icon: <FaEnvelope /> },
            ]}
          />
        </div>
        <Hero />
        <MarqueeSocial />
        <div className="my-12"></div>
        <Grid/>
      </div>
    </main>
  );
}
