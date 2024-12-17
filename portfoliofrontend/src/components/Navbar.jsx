import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="relative flex w-full justify-between items-center py-4">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
      <div class="flex justify-between items-center">
        <a href="#" class="text-4xl text-black   ">Navbar</a>
        <button class="mobile-menu-button" aria-label="Open mobile menu">
        
        </button>
        <ul class="hidden md:flex md:justify-between md:w-full">
          <li class="md:mr-6 p-4 ml-8">
            <a href="#" class="text-black   hover:text-gray-400">Home</a>
          </li>
          <li class="md:mr-6 p-4">
            <a href="#" class="text-black   hover:text-gray-400">About</a>
          </li>
          <li class="md:mr-6 p-4">
            <a href="#" class="text-black   hover:text-gray-400">Services</a>
          </li>
          <li class="md:mr-6 p-4">
            <a href="#" class="text-black   hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    //<h1>Navbarrrrrrrrrrrrrrrrrrrr</h1>
    // <>
    // <nav className="bg-primary text-white p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
    //     <div className="space-x-4">
    //       <Link to="/" className="hover:text-gray-200">Home</Link>
    //       <Link to="/projects" className="hover:text-gray-200">Projects</Link>
    //       <Link to="/skills" className="hover:text-gray-200">Skills</Link>
    //       <Link to="/contact" className="hover:text-gray-200">Contact</Link>
    //     </div>
    //   </div>
    // </nav>
    // </>
  );
}

export default Navbar;
