import React, { useState } from "react";
import { NavLink } from "react-router"; // Correct import from 'react-router-dom'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-400 transition duration-300">
            My Gallery
          </NavLink>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex space-x-6 text-lg ${
            isMenuOpen ? "hidden" : "hidden"
          } lg:block`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 space-y-4 py-4 text-center">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 transition duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
