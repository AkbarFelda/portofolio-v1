import { FiArrowRight } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Column - Title and Description */}
        <div className="lg:col-span-1">
          <h3 className="text-5xl font-semibold text-white flex flex-col mb-4">
            <span>My Project by</span>
            <span>Category</span>
          </h3>
          <p className="text-base font-gabaritoreguler text-gray-500 text-left max-w-xs">
            I work on various projects, focusing on creating user-friendly
            digital experiences. From mobile apps using Flutter and React Native
            to web systems, each project aims to balance user needs and business
            goals. My work covers mobile development, web solutions, and
            creative media, providing practical solutions for real-world
            problems.
          </p>
        </div>

        {/* Right Column - Project Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-18">
          <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors cursor-pointer group">
            <img
              src="/assets/images/bg.png"
              alt="Mobile Development"
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">
                Mobile Development
              </h4>
              <p className="text-gray-400">200 Projects</p>
            </div>
            <FiArrowRight className="text-amber-400 text-xl group-hover:translate-x-1 transition-transform" />
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors cursor-pointer group">
            <img
              src="/assets/images/bg.png"
              alt="Web Development"
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">
                Web Development
              </h4>
              <p className="text-gray-400">Short description of Project 2.</p>
            </div>
            <FiArrowRight className="text-amber-400 text-xl group-hover:translate-x-1 transition-transform" />
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors cursor-pointer group">
            <img
              src="/assets/images/bg.png"
              alt="Backend Development"
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">
                Backend Development
              </h4>
              <p className="text-gray-400">Short description of Project 3.</p>
            </div>
            <FiArrowRight className="text-amber-400 text-xl group-hover:translate-x-1 transition-transform" />
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors cursor-pointer group">
            <img
              src="/assets/images/bg.png"
              alt="UI/UX Design"
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">
                UI/UX Design
              </h4>
              <p className="text-gray-400">Short description of Project 4.</p>
            </div>
            <FiArrowRight className="text-amber-400 text-xl group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;