import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:border-t rounded-md py-16">
      <div className="max-w-3xl mx-auto px-4 text-center ">
        {/* Logo */}
        <div className="flex items-center flex-col justify-center">
          <h1 className="font-bold md:text-2xl text-xl ml-2 md:ml-0 flex items-center gap-2 text-[#AD49E1]">
            <FaUtensils /> Recipe Book
          </h1>
          <p className="text-gray-400 border-b border-gray-400 dark:border-gray-600 pb-4 mt-4 mb-6">
            Discover and share tasty recipes from around the world with Recipe
            Book, featuring step-by-step instructions, vibrant images, and
            personalized cooking tips for every skill level.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-7 pb-6 border-b border-gray-400 dark:border-gray-600 mb-6">
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/allrecipes"
          >
            All Recipes
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/support"
          >
            Support
          </Link>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
          <a
            href="https://x.com/UbaidurRah24983?t=dXrrCouR6TD9CaqpfD2DGQ&s=08"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
          <a
            href="https://www.facebook.com/ubaidur.rahman.881781?rdid=Jod9W9noAyDDBpMT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
