import React from "react";
import { Link } from "react-router";

const Mycard = ({ card }) => {
  return (
    <div className="border border-[#0F0F0F26] p-4 md:p-6 rounded-md">
      <div>
        <img
          className="w-full h-[280px] object-cover bg-center rounded-md"
          src={card.photo}
          alt=""
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{card.name}</h3>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Preparation Time : {card.time} Minutes
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Cuisine Type : {card.cuisine}{" "}
      </p>
      <p className="text-[#0F0F0F99] font-medium mt-2">
        Category : {card.category}{" "}
      </p>
      <div className="mt-4 w-full ">
        
      </div>
    </div>
  );
};

export default Mycard;
