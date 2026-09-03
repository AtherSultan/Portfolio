import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Travel from "../picandvideo/travel.png";
import Hotel from "../picandvideo/hotel.jpg";
import Portfolio from "../picandvideo/portfolio2.jpeg";
import E_Dashbord from "../picandvideo/Ecommerce_dash.png";

import Financia from "../picandvideo/Financial_Overview.png";
// import E-commrce from "../picandvideo/Financial_Overview.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "web",
      description:
        "A comprehensive admin dashboard for e-commerce platforms with analytics and inventory management.",
      tags: ["React", "Tailwind CSS", "Redux"],
      image: E_Dashbord
    },
    // {
    //   id: 2,
    //   title: 'Fitness App UI',
    //   category: 'mobile',
    //   description: 'Mobile application interface for tracking workouts. ',
    //   tags: [
    //     // 'Figma',
    //      'UI Design', 'Prototype']
    // },
    {
      id: 3,
      title: "Travel Booking Platform",
      category: "web",
      description: "frontend developer travel booking website with search,.",
      tags: ["React", "Tailwindcss", "js"],
      image: Travel,
    },
    {
      id: 4,
      title: "Finance Dashboard",
      category: "web",
      description:
        "Financial analytics dashboard with interactive charts and data visualization.",
      tags: ["React", "D3.js", "Tailwind CSS"],
      image:Financia
    },
    {
      id: 5,
      title: "Hotel Booking",
      category: "mobile",
      description:
        "Discovering local Hotel with reviews and reservations.",
      tags: ["User Research", "Prototyping"],
      image: Hotel,
    },
    {
      id: 6,
      title: "Portfolio Template",
      category: "web",
      description:
        "Modern portfolio template built with React and Tailwind CSS for designers and developers.",
      tags: ["React", "Tailwind CSS", "Responsive"],
      image:Portfolio
    },
    {
      id: 7,
      title: "Excel Project",
      category: "Ms Excel",
      description:
        "Modern portfolio template built with React and Tailwind CSS for designers and developers.",
      tags: ["Data entry", "Create Report", "Work on one sheet"],
      image:Portfolio
    },
    {
      id: 8,
      title: "Grocery list",
      category: "Food search",
      description:
        "Create grocery list with React and Tailwind CSS for designers and developers.",
      tags: ["Create Report", "Work on one sheet"],
      image:Portfolio
    },


  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "web", "mobile","Ms Excel",].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
