import React from "react";
import Hero from "./components/Hero";
import { FaHome, FaUserAlt, FaCodeBranch, FaEnvelope, FaCertificate } from "react-icons/fa";
import { FloatingNav } from "./components/ui/Navbar";
import SocialIcons from "./components/SocialLinks";

export default function Home() {
  return (
    <main className="relative justify-center items-center flex flex-col">
      <div className="relative max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: 'Home', link: '/', icon: <FaHome /> },
            { name: 'About', link: '/about', icon: <FaUserAlt /> },
            { name: 'Projects', link: '/projects', icon: <FaCodeBranch /> },
            { name: 'Certificate', link: '/certif', icon: <FaCertificate /> },
            { name: 'Contact', link: '/contact', icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
        <SocialIcons/>
      </div>
    </main>
  )
}
