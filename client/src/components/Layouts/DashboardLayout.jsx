import React from "react";
import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/Sidebar/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0">
      <Navbar />
      <SideBar />
      <div className="px-4 py-2 bg-[#f0f0f0] min-h-screen overflow-scroll">
        <div className="h-full py-14 mt-0 mb-10 md:ml-64">
            {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
