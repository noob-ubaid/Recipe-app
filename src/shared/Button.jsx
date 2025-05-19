import React from "react";

const Button = ({ title }) => {
  return (
    <button className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">
      {title}
    </button>
  );
};

export default Button;
