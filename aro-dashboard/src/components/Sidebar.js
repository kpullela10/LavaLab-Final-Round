import React from "react";

const Sidebar = ({ setActiveTab, activeTab }) => {
  const menuItems = [
    { name: "All Projects", icon: "/assets/house-icon.png" },
    { name: "Your Projects", icon: "/assets/your-projects-icon.png" },
    { name: "Shared with You", icon: "/assets/shared-projects-icon.png" },
    { name: "Archived", icon: "/assets/archived-icon.png" },
    { name: "Trash", icon: "/assets/trash-icon.png" },
  ];

  // get the right filter for each icon depending on active/inactive state
  const getFilterForIcon = (isActive, iconName) => {
    if (iconName === "All Projects") {
      // custom filter for the house icon since only could take screenshot of purple house icon
      return isActive
        ? "invert(30%) sepia(50%) saturate(900%) hue-rotate(250deg) brightness(95%) contrast(85%)" // Purple: #34347b for active house icon
        : "invert(50%) sepia(0%) saturate(500%) hue-rotate(180deg) brightness(90%) contrast(80%)"; // Gray: #505064 for inactive house icon
    } else {
      // filters for other icons
      return isActive
        ? "invert(20%) sepia(40%) saturate(600%) hue-rotate(240deg) brightness(90%) contrast(90%)" // Purple: #34347b for active
        : "invert(50%) sepia(0%) saturate(500%) hue-rotate(180deg) brightness(90%) contrast(80%)"; // Gray: #505064 for inactive
    }
  };

  return (
    <div className="w-1/5 bg-[#ededed] p-5 border-r border-gray-200 flex flex-col justify-between h-full">
      <div>
        <img
          src="/assets/ARO-logo.png"
          alt="ARO Logo"
          className="h-20 w-40 mb-8 mx-auto"
        />

        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center py-2 px-4 mb-2 rounded-lg cursor-pointer ${
                  activeTab === item.name ? "bg-[#d5d5de]" : ""
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-5 w-5 mr-3"
                  style={{
                    filter: getFilterForIcon(
                      activeTab === item.name,
                      item.name
                    ),
                  }}
                />
                <span
                  className={`text-sm ${
                    activeTab === item.name ? "font-bold text-[#34347a]" : ""
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button className="w-3/4 mx-auto mt-auto p-2 bg-[#34347b] text-white rounded-lg mb-6">
        + New
      </button>
    </div>
  );
};

export default Sidebar;
