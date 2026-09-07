// src/components/About.js
import React from "react";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import Craft from "../picandvideo/crafting.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-center">

          {/* Image */}
          <div className="w-full lg:w-3/5 flex justify-center">
            <div className="relative w-full max-w-md">

              <div className="h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={Craft}
                  alt="About Ather Sultan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-indigo-600 text-white py-3 px-5 rounded-xl font-bold shadow-lg">
                1.5 Years Experience
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-3/5">

            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
              Crafting Digital Solutions with Passion
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
              I'm a UI/UX designer and frontend developer with over 1.5 years
              of experience creating digital products for clients worldwide.
              My approach combines aesthetic design with functional user
              experiences to create memorable digital interactions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-7 mb-10">
              I specialize in React, Tailwind CSS, and modern design tools to
              build responsive, accessible, and performant web applications.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Clean Code */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaCode size={32} />
                </div>

                <h4 className="font-bold text-lg mb-2">
                  Clean Code
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-6">
                  Writing maintainable, efficient code with best practices.
                </p>
              </div>

              {/* Beautiful Design */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaPalette size={32} />
                </div>

                <h4 className="font-bold text-lg mb-2">
                  Beautiful Design
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-6">
                  Creating visually appealing and intuitive interfaces.
                </p>
              </div>

              {/* Fast Delivery */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaRocket size={32} />
                </div>

                <h4 className="font-bold text-lg mb-2">
                  Fast Delivery
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-6">
                  Efficient workflows for timely project completion.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
