import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import cvFile from "../assets/Angelo_Asensi_Resume.pdf";

const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* =========================
          MOBILE TOP BAR
      ========================== */}
      <div className="md:hidden w-full bg-[#002512] px-5 py-4">

        <div className="flex items-center justify-between">

          {/* NAME */}
          <h2 className="text-xl font-bold text-white">
            Angelo Asensi
          </h2>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col mt-4 gap-2">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white uppercase px-4 py-3 hover:bg-green-900 rounded-lg"
            >
              Home
            </NavLink>

            <NavLink
              to="/Experiences"
              onClick={() => setMenuOpen(false)}
              className="text-white uppercase px-4 py-3 hover:bg-green-900 rounded-lg"
            >
              Experiences
            </NavLink>

            <NavLink
              to="/Projects"
              onClick={() => setMenuOpen(false)}
              className="text-white uppercase px-4 py-3 hover:bg-green-900 rounded-lg"
            >
              Projects
            </NavLink>

            <NavLink
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="text-white uppercase px-4 py-3 hover:bg-green-900 rounded-lg"
            >
              Contact
            </NavLink>

            {/* RESUME */}
            <a
              href={cvFile}
              download="Angelo-Asensi_Resume.pdf"
              className="
                mt-3
                bg-green-500
                hover:bg-green-600
                rounded-full
                px-4
                py-3
                flex
                items-center
                justify-center
                gap-3
                font-semibold
                text-white
              "
            >
              Download My Resume
              <FaDownload />
            </a>

          </div>
        )}

      </div>


      {/* =========================
          DESKTOP SIDEBAR
      ========================== */}
      <div
        className="
          hidden
          md:flex
          md:w-[220px]
          lg:w-[22%]
          min-h-screen
          bg-[#002512]
          flex-col
          justify-between
          p-8
          shrink-0
        "
      >

        {/* NAME */}
        <div>
          <h2 className="text-[32px] font-bold text-white text-center">
            Angelo Asensi
          </h2>
        </div>


        {/* NAVIGATION */}
        <div className="flex flex-col gap-4 pt-20 items-center uppercase text-white">

          <NavLink
            to="/"
            className="px-3 py-6 hover:text-green-400 transition"
          >
            <p className="text-lg">Home</p>
          </NavLink>

          <NavLink
            to="/Experiences"
            className="px-3 py-6 hover:text-green-400 transition"
          >
            <p className="text-lg">Experiences</p>
          </NavLink>

          <NavLink
            to="/Projects"
            className="px-3 py-6 hover:text-green-400 transition"
          >
            <p className="text-lg">Projects</p>
          </NavLink>

          <NavLink
            to="/Contact"
            className="px-3 py-6 hover:text-green-400 transition"
          >
            <p className="text-lg">Contact</p>
          </NavLink>

        </div>


        {/* RESUME */}
        <a
          href={cvFile}
          download="Angelo-Asensi_Resume.pdf"
          className="
            bg-green-500
            hover:bg-green-600
            rounded-full
            px-4
            py-4
            flex
            justify-center
            items-center
            gap-3
            font-semibold
            text-white
          "
        >
          Download My Resume
          <FaDownload />
        </a>

      </div>

    </>
  );
};

export default Sidebar;