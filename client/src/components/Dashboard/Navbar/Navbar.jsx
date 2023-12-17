import React, { useState } from "react";
import { getToken } from "../../../utils/auth/fetchToken";
import { useNavigate } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { SlClose } from "react-icons/sl";
import MobileSideBar from "../Sidebar/MobileSidebar";
const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  const token = getToken();
  const navigate = useNavigate();
  const handleLogout =async () => {
    localStorage.removeItem("userToken");
    navigate("/login")
  }
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div>
      <nav
        className="fixed w-full flex justify-end px-6 lg:px-16 md:px-10 py-3 lg:py-5 items-center bg-gray-900 text-white"
        style={{ zIndex: 99 }}
      >
        <div className="hidden lg:flex md:flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-white">option 1</li>
            {token != null && <li><button className="bg-red-600 px-2 text-white rounded py-1" onClick={handleLogout}>Logout</button></li>}
          </ul>
        </div>
        <div className="flex lg:hidden md:hidden hover:cursor-pointer" onClick={handleOpenMenu}>{openMenu ? (<SlClose size={28}/>):(<CgMenuGridR size={28}/>)}</div>
      </nav>
      {openMenu &&(<MobileSideBar/>)}
    </div>
  );
};

export default Navbar;
