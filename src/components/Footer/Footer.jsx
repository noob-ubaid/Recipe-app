import React from "react";
import { FaFacebook, FaInternetExplorer, FaUtensils } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex gap-4 items-center mb-6">
              <h1 className="font-bold md:text-2xl text-xl ml-2 md:ml-0 flex items-center gap-2 text-[#AD49E1]">
                <FaUtensils /> Recipe Book
              </h1>
            </div>
            <p className="text-gray-400 mb-6">
              Discover and share tasty recipes from around the world with Recipe
              Book.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AGgdG4F9h/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://x.com/UbaidurRah24983?t=mA11h7v1LN7rB2ffFymKAg&s=08"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="https://github.com/noob-ubaid"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Venues
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400"></i>
                <span className="text-gray-400">
                  Mirpur 1 , Dhaka , Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-indigo-400"></i>
                <span className="text-gray-400">+880 1734-564560</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-indigo-400"></i>
                <span className="text-gray-400">recipebook@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center space-x-3">
              <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
              <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
              <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Recipe Book. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
