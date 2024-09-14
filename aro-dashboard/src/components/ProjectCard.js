import React from "react";

const ProjectCard = ({ title, timestamp }) => {
  return (
    <div className="w-full p-1">
      <div className="bg-white p-4 rounded-lg  border border-2 border-gray-300">
        <div className="bg-[#d9d9d9] h-40 w-full rounded-md flex items-center justify-center mb-4">
          <img
            src="/assets/document-icon.png"
            alt="Document Icon"
            className="h-20 w-24 object-contain"
          />
        </div>

        <div className="h-auto w-full">
          <h3 className="font-bold text-lg text-left">{title}</h3>
          <p className="text-gray-500 text-left text-md">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
