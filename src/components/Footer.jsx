import React from "react";
import { GiMicroscope } from "react-icons/gi";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 grid sm:grid-cols-2 md:grid-cols-4 mx-auto">
          {/* Logo and Branding */}
          <div className="p-5">
            <div className="flex items-center gap-2">
              <GiMicroscope className="w-10 h-10 text-blue-600" />
              <h1 className="text-gray-800 font-bold text-lg">
                AYUSH <span className="text-blue-600">PATHOLOGY</span>
              </h1>
            </div>
          </div>
          {/* Services Section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Our Services
            </div>
            <Link to="/tests" className="my-3 block text-gray-700">
              Diagnostic Tests
            </Link>
            <Link to="/reports" className="my-3 block text-gray-700">
              Online Reports
            </Link>
            <Link to="/packages" className="my-3 block text-gray-700 ">
              Health Packages
            </Link>
          </div>
          {/* Information Section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Information
            </div>
            <Link to="/about" className="my-3 block text-gray-700">
              About Us
            </Link>
            <Link to="/contact" className="my-3 block text-gray-700">
              Contact Us
            </Link>
          </div>
          {/* Location Section */}
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Visit Us
            </div>
            <p className="my-3 block text-gray-700">
              Near Block Suithakalan, Rudhauli, Jaunpur- 223105
            </p>
            <a
              href="http://ayushpathology.com"
              className="my-3 block text-blue-600"
            >
              ayushpathology.in
            </a>
          </div>
        </div>
        <div className=" text-center text-gray-700">
          © {new Date().getFullYear()}. Ayush Pathology. All rights reserved.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200">
  <div className="flex flex-col items-center max-w-screen-lg m-auto py-5 border-t border-gray-300 text-gray-800 text-sm">
    <p className="mb-2 text-center">
      This site was designed and developed by  {""}
      <a href="https://mhhamza.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Mohammad Hamza
      </a>.
    </p>
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/mh-hamza444" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
        <FaLinkedin className="fill-current text-gray-500 hover:text-blue-700 transition-colors duration-300" />
      </a>
      <a href="https://github.com/mh-hamza" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
        <FaGithub className="fill-current text-gray-500 hover:text-black transition-colors duration-300" />
      </a>
      <a href="https://wa.me/916393588539" target="_blank" rel="noopener noreferrer" className="w-6 mx-1">
        <FaWhatsapp className="fill-current text-gray-500 hover:text-green-500 transition-colors duration-300" />
      </a>
    </div>
  </div>
</div>

    </>
  );
}

export default Footer;
