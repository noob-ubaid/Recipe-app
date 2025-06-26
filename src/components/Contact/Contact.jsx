import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <div className="my-12 md:my-20 flex items-start gap-8 md:gap-12 justify-between flex-col md:flex-row">
      <div className="flex-1 dark:text-gray-200">
        <h1 className="md:text-4xl text-3xl text-center md:text-left font-bold text-[#AD49E1] mb-4">
          Get in touch with Recipe Book
        </h1>
        <div className="mb-6">
          <p className="text-base text-center md:text-left leading-relaxed">
            If you have a story to share or a question that has not been
            answered on our website, please get in touch with us via contact
            details listed below or fill in the form on the right.
          </p>
        </div>
        <div className="mb-6">
          <p className="flex items-center gap-3">
            <IoIosCall />
            +88 017 23 23 2343
          </p>
          <p className="flex items-center gap-3">
            <FaWhatsapp />
            +88 017 23 23 2343
          </p>
          <p className="flex items-center gap-3">
            <MdOutlineMailOutline />
            recipebook@gmail.com
          </p>
        </div>
      </div>
      <div className="flex-1 w-full">
        <h1 className="md:text-4xl text-3xl text-center font-bold text-[#AD49E1] mb-6">
          Send us message
        </h1>
        <form>
          <div className="grid grid-cols-1 mb-4 gap-4 dark:text-gray-200 md:grid-cols-2">
            <label htmlFor="" className="flex flex-col">
              First Name :
              <input
                type="text"
                className="py-2 px-4 dark:text-black  rounded-md mt-2 outline-none bg-gray-100"
                placeholder="First Name"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Last Name :
              <input
                type="text"
                className="py-2 px-4 dark:text-black rounded-md mt-2 outline-none bg-gray-100"
                placeholder="Last Name"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Phone NUmber :
              <input
                type="number"
                className="py-2 px-4 rounded-md dark:text-black mt-2 outline-none bg-gray-100"
                placeholder="Phone NUmber"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Email :
              <input
                type="email"
                className="py-2 px-4 rounded-md dark:text-black mt-2 outline-none bg-gray-100"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <label className="mt-4 dark:text-white" htmlFor="">
            Message :{" "}
          </label>
          <textarea
            className="py-2 px-4 mt-2  h-40 rounded-md outline-none bg-gray-100 w-full"
            placeholder="Message"
            name=""
            id=""
          ></textarea>
          <button className="bg-[#AD49E1] mt-4 w-full text-white font-medium px-4 py-2 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
