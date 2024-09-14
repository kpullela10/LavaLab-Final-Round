import React from "react";

const MainContent = ({ activeTab }) => {
  return (
    <div className="flex-grow bg-[#f4f4f4] p-5">
      <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
      <p className="text-gray-600">Nothing to see here.</p>
    </div>
  );
};

export default MainContent;
