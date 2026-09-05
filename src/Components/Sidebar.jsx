import React from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import cvFile from "../assets/Angelo_Asensi_Resume.pdf";

const Sidebar = () => {
  return (
    <div className="w-[220px] lg:w-[22%] min-h-screen bg-[#002512] flex flex-col justify-between p-4 sm:p-6 lg:p-8 shrink-0">

      <div><h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-white text-center whitespace-nowrap">Angelo Asensi</h2></div>

      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4 pt-10 lg:pt-20 items-center uppercase text-white">
        <NavLink to="/" className="flex items-center justify-center w-full px-2 py-4 lg:py-6 rounded-lg hover:bg-green-900 transition"><p className="text-sm sm:text-base lg:text-lg">Home</p></NavLink>
        <NavLink to="/Experiences" className="flex items-center justify-center w-full px-2 py-4 lg:py-6 rounded-lg hover:bg-green-900 transition"><p className="text-sm sm:text-base lg:text-lg">Experiences</p></NavLink>
        <NavLink to="/Projects" className="flex items-center justify-center w-full px-2 py-4 lg:py-6 rounded-lg hover:bg-green-900 transition"><p className="text-sm sm:text-base lg:text-lg">Projects</p></NavLink>
        <NavLink to="/Contact" className="flex items-center justify-center w-full px-2 py-4 lg:py-6 rounded-lg hover:bg-green-900 transition"><p className="text-sm sm:text-base lg:text-lg">Contact</p></NavLink>
      </div>

      <a href={cvFile} download="Angelo-Asensi_Resume.pdf" className="bg-green-500 hover:bg-green-600 transition rounded-full px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base font-semibold text-white text-center">
        <span>Download My Resume</span><FaDownload />
      </a>

    </div>
  );
};

export default Sidebar;