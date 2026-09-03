// src/components/About.js
import React from "react";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import Craft from "../picandvideo/crafting.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-700">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-yellow-200 border-2 border-dashed rounded-xl w-full h-full">
                  <img className="w-full h-full" src={Craft} alt="" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-bold">
                1.5 Years Experience
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a UI/UX designer and frontend developer with over 1.5 years of
              experience creating digital products for clients worldwide. My
              approach combines aesthetic design with functional user
              experiences to create memorable digital interactions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I specialize in React, Tailwind CSS, and modern design tools to
              build responsive, accessible, and performant web applications.
              {/* My design philosophy centers around 
              simplicity, usability, and creating emotional connections through digital experiences. */}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaCode size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">Clean Code</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Writing maintainable, efficient code with best practices
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaPalette size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">Beautiful Design</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating visually appealing and intuitive interfaces
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaRocket size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Efficient workflows for timely project completion
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
