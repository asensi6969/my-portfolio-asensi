import React from "react";
import Portfolio from "./Portfolio/Portfolio";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-8">

      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-3">
          My Work
        </p>

        <h1 className="text-5xl font-bold text-[#002512]">
          Projects
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Here are some of the projects I have worked on, including
          web applications, management systems, and personal projects.
        </p>
      </div>

      {/* Portfolio Projects */}
      <div className="max-w-6xl mx-auto">
        <Portfolio />
      </div>

    </div>
  );
};

export default Projects;