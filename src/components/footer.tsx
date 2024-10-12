import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src="/path-to-logo.png" alt="Engineer Solar Wala Logo" className="mb-4" />
          <p className="text-gray-700">Powering Your Future with Solar Solutions</p>
          <p className="font-semibold text-gray-900 mt-4">Feel Free To Contact Us At</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-900 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-gray-900 hover:text-blue-700 transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-900 hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-900 hover:text-red-600 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-gray-900">About us</a></li>
            <li><a href="/calculator" className="text-gray-600 hover:text-gray-900">Saving Calculator</a></li>
            <li><a href="/support" className="text-gray-600 hover:text-gray-900">Support</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">Don’t miss our future updates! Get in touch with us today.</p>
          <a
            href="mailto:info@engineersolarwala.com"
            className="text-gray-700 hover:underline"
          >
            info@engineersolarwala.com
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-8">
        <p>©2024. Engineer Solar Wala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;