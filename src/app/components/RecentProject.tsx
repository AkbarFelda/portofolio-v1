import React from "react";
import { projects } from "../data";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="text-5xl text-white text-center">
        A small selection of <br />
        <span className="text-purple-100 font-bold">
          my recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className="bg-gray-800 p-4 rounded-lg lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <h2 className="text-xl text-white">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
