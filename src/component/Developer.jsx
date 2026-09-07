import React from "react";
import {
  FaGithub, FaLinkedin, FaFacebookF,
  FaInstagram, FaTiktok, FaYoutube
} from "react-icons/fa";
import yourpic from "../picandvideo/ather_sultan.jpg";
import Work from "../picandvideo/ourateam.jpg"
import Logo from "../picandvideo/logo.png"
const Developer = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 w-full flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">

          <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center">
            Web Developer & Freelancer
            <img
              src={Logo}
              alt="Ather Sultan Logo"
              className="w-10 h-10 ml-3 object-contain"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4">
            Hi, I'm
            <span className="text-indigo-600 dark:text-indigo-400 ml-2">
              Ather Sultan
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Creating Beautiful Digital Experiences
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            I craft responsive websites where technology meets creativity. With
            a focus on user experience and modern design principles, I build
            digital products that people love to use.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-full border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={yourpic}
                alt="Ather Sultan"
              />
            </div>

            {/* UI/UX Badge */}
            <div className="absolute -top-6 -right-6 bg-indigo-600 text-white py-2 px-4 rounded-full font-medium shadow-lg">
              UI/UX Designer
            </div>

            {/* Frontend Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 py-2 px-4 rounded-full font-medium shadow-lg">
              Frontend Developer
            </div>

            {/* Work Image */}
            <div className="absolute top-1/2 -left-20 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
              <div className="w-16 h-16 overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover"
                  src={Work}
                  alt="Work"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

  );
};
export default Developer;
