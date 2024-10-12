import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialsDropdown, setSocialsDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-600 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Engineer Solar Wala</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Saving Calculator</a>
            <a href="#" className="hover:text-yellow-400">Our Associates</a>

            {/* Dropdown - Our Socials */}
            <div className="relative">
              <button
                onClick={() => setSocialsDropdown(!socialsDropdown)}
                className="flex items-center space-x-1 hover:text-pink-400"
              >
                <span>Our Socials</span>
                <FaChevronDown />
              </button>
              {socialsDropdown && (
                <div className="absolute top-10 left-0 bg-white text-black p-4 rounded-md shadow-md z-50">
                  <a href="https://www.instagram.com/engineersolarwalaofficial/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">Instagram</a>
                  <a href="https://www.facebook.com/people/Engineer-Solar-Wala/61553898690447/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">Facebook</a>
                  <a href="https://www.linkedin.com/in/ashish-dixit-ab9a6725b/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">LinkedIn</a>
                  <a href="https://www.youtube.com/watch?v=BPChsvFBuco" target="_blank" rel="noreferrer" className="block hover:text-pink-400">YouTube</a>
                </div>
              )}
            </div>

            {/* Dropdown - Contact Us */}
            <div className="relative">
              <button
                onClick={() => setContactDropdown(!contactDropdown)}
                className="flex items-center space-x-1 hover:text-pink-400"
              >
                <span>Contact Us</span>
                <FaChevronDown />
              </button>
              {contactDropdown && (
                <div className="absolute top-10 left-0 bg-white text-black p-4 rounded-md shadow-md z-50">
                  <p className="block">+919838004479</p>
                  <p className="block">hi@engineersolarwala.com</p>
                  <a href="#" className="block hover:text-pink-400">Support</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-4 pb-4 space-y-4">
          <a href="#" className="block hover:text-yellow-400">Home</a>
          <a href="#" className="block hover:text-yellow-400">About Us</a>
          <a href="#" className="block hover:text-yellow-400">Saving Calculator</a>
          <a href="#" className="block hover:text-yellow-400">Our Associates</a>

          {/* Mobile Dropdown - Our Socials */}
          <div>
            <button
              onClick={() => setSocialsDropdown(!socialsDropdown)}
              className="flex justify-between items-center w-full hover:text-pink-400"
            >
              <span>Our Socials</span>
              <FaChevronDown />
            </button>
            {socialsDropdown && (
              <div className="bg-white text-black p-4 rounded-md shadow-md z-50">
                <a href="https://www.instagram.com/engineersolarwalaofficial/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">Instagram</a>
                <a href="https://www.facebook.com/people/Engineer-Solar-Wala/61553898690447/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">Facebook</a>
                <a href="https://www.linkedin.com/in/ashish-dixit-ab9a6725b/" target="_blank" rel="noreferrer" className="block hover:text-pink-400">LinkedIn</a>
                <a href="https://www.youtube.com/watch?v=BPChsvFBuco" target="_blank" rel="noreferrer" className="block hover:text-pink-400">YouTube</a>
              </div>
            )}
          </div>

          {/* Mobile Dropdown - Contact Us */}
          <div>
            <button
              onClick={() => setContactDropdown(!contactDropdown)}
              className="flex justify-between items-center w-full hover:text-pink-400"
            >
              <span>Contact Us</span>
              <FaChevronDown />
            </button>
            {contactDropdown && (
              <div className="bg-white text-black p-4 rounded-md shadow-md z-50">
                <p>+919838004479</p>
                <p>hi@engineersolarwala.com</p>
                <a href="#" className="hover:text-pink-400">Support</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;