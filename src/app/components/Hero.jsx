import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/Background-box';

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col-3 items-center justify-between pb-20 pt-36 pr-30">
      <div>
      <Boxes/>
        <Spotlight className='-top-40 -left-10 md:-left-32 md-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className='gap-y-5 flex flex-col z-10'>
        <h1 className="text-4xl font-gabaritobold text-gray-500">Frontend Developer</h1>
        <h1 className="text-4xl font-gabaritosemibold text-amber-50 max-w-2xs">Muhammad Akbar Felda</h1>
        <div className="bg-amber-200 p-0.5"></div>
        <p className="text-base font-gabaritoreguler text-gray-500 max-w-2xs">
          Experienced in building responsive user interfaces using Flutter and React. Skilled in managing state with GetX. Focused on clean code, UI/UX principles, and effective team collaboration to create efficient and engaging applications.
        </p>
        <a href="#contact" className="text-amber-200 flex items-center space-x-2 z-10">
          <span>Let's talk</span>
          <FiArrowRight className="text-amber-200" />
        </a>
      </div>
      <div className='content-center flex flex-col items-center z-10'>
        <img
          src="assets/images/photo-ghibli.png"
          alt="photo"
          className="rounded-lg w-72 h-102 -translate-x-20 object-cover"
        />
        <p className='-translate-x-20 -translate-y-0.3 font-tagesschriftreguler'>
          <span className="text-white">Just call me </span>
          <span className="text-blue-500 ">Akbar</span>
        </p>
      </div>
      <div className='flex flex-col gap-y-20 text z-10'>
        <div className='text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Years of</span>
          <span>Experience</span>
          <p className='text-3xl font-gabaritobold text-white'>2+</p>
        </div>
        <div className='text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Complete</span>
          <span>Project</span>
          <p className='text-3xl font-gabaritosemibold text-white'>2+</p>
        </div>
        <div className='text-2xl font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Ongoing</span>
          <span>Project</span>
          <p className='text-3xl font-gabaritobold text-white'>2+</p>
        </div>
      </div>
    </main>
  )
}

export default Hero