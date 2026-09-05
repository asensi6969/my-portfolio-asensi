import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import mainImg from '../assets/heronobg.png'
import { Link } from "react-router-dom";
import cvFile from "../assets/Angelo_Asensi_Resume.pdf";


const Home = () => {
  return (
    <div className="w-full min-h-screen px-6 sm:px-8 md:px-10 lg:px-12">

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center min-h-[80vh]">

        {/* TEXT SECTION */}
        <div className="text-white mt-8 md:mt-10 order-2 md:order-1">

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi! I'm{" "}
            <span className="text-green-400">
              Angelo Asensi
            </span>

            <br />

            <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              <Typewriter
                words={[".Net Developer", "Web Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={100}
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-gray-300 mt-4 leading-relaxed max-w-2xl">
           I am a dedicated Application/Web Developer with nearly four years of experience in application development, seeking to contribute my skills to a dynamic and collaborative team.

          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">

            <Link
              to="/Contact"
              className="bg-green-600 hover:bg-green-800 transition px-6 py-3 rounded-lg text-white font-medium text-center"
            >
              Contact Me
            </Link>

            <a
              href={cvFile}
              download="Angelo-Asensi_Resume.pdf"
              className="bg-green-600 hover:bg-green-800 transition px-6 py-3 rounded-lg text-white font-medium text-center"
            >
              Download My Resume
            </a>

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex justify-center order-1 md:order-2">

          <img
            src={mainImg}
            alt="Angelo"
            className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 mt-8 md:mt-14 z-10"
          />

        </div>

      </div>

    </div>
  )
}

export default Home