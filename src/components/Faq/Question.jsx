import React from "react";

const Question = ({ ask }) => {
  return (
    <div className="collapse dark:bg-black collapse-plus bg-base-100 border border-base-300 dark:border-gray-800">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title dark:text-white text-black font-semibold">
        {ask.question}
      </div>
      <div className="collapse-content dark:text-white text-black text-sm">
        {ask.answer}
      </div>
    </div>
  );
};

export default Question;