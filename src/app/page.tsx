import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col-3 items-center justify-between p-25">
      <div className='gap-y-5 flex flex-col'>
        <h1 className="text-4xl font-gabaritobold text-gray-500">Frontend Dev</h1>
        <h1 className="text-4xl font-gabaritosemibold text-amber-50 max-w-2xs">Muhammad Akbar Felda</h1>
        <div className="bg-amber-200 p-0.5"></div>
        <p className="text-base font-gabaritoreguler text-gray-500 max-w-2xs">
          Experienced in building responsive user interfaces using Flutter and React. Skilled in managing state with GetX. Focused on clean code, UI/UX principles, and effective team collaboration to create efficient and engaging applications.
        </p>
        <a href="#" className="text-amber-200 flex items-center space-x-2">
          <span>Let's talk</span>
          <FiArrowRight className="text-amber-200" />
        </a>
      </div>
      <div className='content-center flex flex-col items-center'>
        <img
          src="/images/akbar.png"
          alt="photo"
          className="rounded- w-51 h-72 -translate-x-20 object-cover border-4 border-amber-200 shadow-lg shadow-gray-500 "
        />
      </div>
      <div className='flex flex-col gap-y-20 text'>
        <div className='text-base font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Years of</span>
          <span>Experience</span>
          <p className='text-2xl font-gabaritobold text-white'>2+</p>
        </div>
        <div className='text-base font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Complete</span>
          <span>Project</span>
          <p className='text-2xl font-gabaritosemibold text-white'>2+</p>
        </div>
        <div className='text-base font-gabaritosemibold text-gray-500 flex flex-col text-end'>
          <span>Ongoing</span>
          <span>Project</span>
          <p className='text-2xl font-gabaritobold text-white~'>2+</p>
        </div>
      </div>
    </main>
  );
}
