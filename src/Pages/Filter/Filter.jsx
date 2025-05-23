import React from "react";
import { Link } from "react-router";

const Filter = ({cuisine}) => {
  return (
    <div className="bg-[rgba(15, 15, 15, 0.05)] w-full py-20 md:mb-28 text-center px-4 md:px-0 bg-[#0F0F0F0D] mt-6 md:mt-10 rounded-md">
      <h4 className="font-semibold text-2xl md:text-3xl text-[#141414]">
        No recipes available for {cuisine} cuisine at the moment.
      </h4>
      <p className="mt-4 text-[#141414B3]">
        Sorry, we don’t have any recipes under this category right now. Please try another filter.
      </p>
    </div>
  );
};

export default Filter;
