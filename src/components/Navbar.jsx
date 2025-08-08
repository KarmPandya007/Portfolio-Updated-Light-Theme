import React from "react";
// import { Link } from "react-scroll";
import cv from '../assets/Karm Pandya Resume Final Draft .pdf'
import navlogo from '../assets/navlogo.jpg'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <nav className="bg-opacity-90 backdrop-blur-xl shadow-sm py-5 flex justify-evenly items-center gap-100 nav">

        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform animate-slideDown">
          <img src={navlogo} alt='navlogo' className="rounded-full h-10 w-10 shadow-md border border-gray-300" />
          <span className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">
            Karm Pandya
          </span>
        </div>

        {/* Links - Hidden on small screens */}
        <div className="hidden md:flex flex-row items-center gap-5 text-base md:text-lg ml-3">
          <a href="#home" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 hover:text-white py-1 hover:bg-blue-700 rounded" >
            Home
          </a>
          <a href="#about" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 hover:text-white py-1 hover:bg-blue-700 rounded" >
            About
          </a>
          <a href="#projects" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 hover:text-white py-1 hover:bg-blue-700 rounded" >
            Projects
          </a>
          <a href="#blogs" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 hover:text-white py-1 hover:bg-blue-700 rounded" >
            Blogs
          </a>
          <a href="#contact" className="animate-slideDown scroll-smooth duration-500 text-stone-900 font-medium px-2 hover:text-white py-1 hover:bg-blue-700 rounded" >
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={cv} download className="p-2 rounded hover:bg-gray-100 transition-colors">
            <i className="fa-solid fa-bars text-xl text-stone-900"></i>
          </button>
        </div>
      </nav>

      <style>
        {
          `
        @keyframes slideDown{
            0% {
                transform: translateY(-100%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
            }

            .animate-slideDown{
            animation: slideDown 1.2s ease-in-out;
            }
        `
        }
      </style>

    </div>


  );
};

export default Navbar;