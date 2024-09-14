import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All Projects");
  const [viewMode, setViewMode] = useState("grid"); // default view is grid

  // fetch user/project data
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/user")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data:", error));

    axios
      .get("http://127.0.0.1:5000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="w-px bg-[#cbcbd5]"></div>
      <div className="flex-grow bg-[#f4f4f4] p-5 relative">
        <div className="flex justify-between items-center absolute top-[34px] w-full ">
          <div
            className="relative"
            style={{ width: "727px", height: "67px", marginLeft: "5px" }}
          >
            <img
              src="/assets/search-icon.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search in Aro"
              className="pl-10 p-2 w-full h-full border border-2 border-gray-300 rounded bg-[#f4f4f4] text-[#737373]"
            />
          </div>

          <div
            className="flex items-center bg-[#f7f7f7] p-4 rounded-lg shadow-lg border border-2 border-gray-200"
            style={{ width: "290px", height: "70px", marginRight: "54px" }}
          >
            <img
              src={`http://127.0.0.1:5000/user_assets/sample-avatar.png`} // url for flask backend
              alt="Profile"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <div className="flex flex-col items-start">
                <h3 className="text-lg">{user.name}</h3>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#cbcbd5] mt-[130px] ml-[-20px]"></div>

        {/* Content */}
        {activeTab === "All Projects" ? (
          <>
            <div className="flex justify-between items-center mb-4 mt-[60px]">
              <h2 className="text-xl font-bold ml-[5px]">All Projects</h2>
              <div className="flex space-x-3 justify-end mr-[17px]">
                <img
                  src="/assets/grid-icon.png"
                  alt="Grid View"
                  className={`h-6 w-6 cursor-pointer ${
                    viewMode === "grid" ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setViewMode("grid")}
                />
                <img
                  src="/assets/list-icon.png"
                  alt="List View"
                  className={`h-6 w-6 cursor-pointer ${
                    viewMode === "list" ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setViewMode("list")}
                />
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    timestamp={project.timestamp}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white shadow rounded-lg"
                  >
                    <img
                      src="/assets/document-icon.png"
                      alt="Project Icon"
                      className="h-10 w-10 mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-gray-500">{project.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold">{activeTab}</h2>
            <p className="text-gray-500">Nothing to see here.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
