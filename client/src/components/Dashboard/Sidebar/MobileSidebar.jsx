import React from "react";
import { IoHome } from "react-icons/io5";
const MobileSideBar = () => {
  return (
    <div className=" flex lg:hidden fixed md:hidden flex-col top-12 left-0 w-[70%] bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow z-50">
        <ul className="flex flex-col py-6 px-6 space-y-8">
          <li className="px-5 hidden md:block">
            <div className="text-lg font-light tracking-wide text-center text-gray-400 uppercase py-4">
              DASH HOME
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex  items-center  pr-4 pl-2 py-2 bg-blue-700 rounded ">
              <IoHome size={22} />
              <span className="ml-2 text-lg tracking-wide truncate ">Home</span>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex  items-center  pr-4 pl-2 py-2 rounded">
              <IoHome size={22} />
              <span className="ml-2 text-lg tracking-wide truncate">Home</span>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex  items-center  pr-4 pl-2 py-2 rounded">
              <IoHome size={22} />
              <span className="ml-2 text-lg tracking-wide truncate">Home</span>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex  items-center  pr-4 pl-2 py-2 rounded">
              <IoHome size={22} />
              <span className="ml-2 text-lg tracking-wide truncate">Home</span>
            </div>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>
          <li className="hover:cursor-pointer">
            <div className="flex  items-center  pr-4 pl-2 py-2 rounded">
              <IoHome size={22} />
              <span className="ml-2 text-lg tracking-wide truncate">
                Settings button
              </span>
            </div>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2021
        </p>
          </div>
          <div className="fixed inset-0 bg-black opacity-40" ></div>
    </div>
  );
};

export default MobileSideBar;
