import React from "react";
import PortfolioData from "./PortfolioData";

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PortfolioData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Project Image */}
            <div className="w-full h-64 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#002512] mb-3">
                {project.title}
              </h2>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#002512] text-white text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;