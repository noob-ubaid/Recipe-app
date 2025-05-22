import React from "react";
import Question from "./Question";
const questions = [
  {
    id: 1,
    question: "  What is the Recipe Book App ?",
    answer:
      "It’s a user-friendly application where users can create, manage, and explore food recipes. It features a like system and filtering options to help food lovers find and organize their favorite dishes.",
  },
  {
    id: 2,
    question: "Can I add my own recipes?",
    answer:
      " Yes! Once you’re logged in, you can add your own recipes through the Add Recipe page. Just fill out the form with all the required details and submit.",
  },
  {
    id: 3,
    question: "Why can’t I like my own recipes?",
    answer:
      "To ensure fair popularity rankings, users are not allowed to like their own recipes. You can still edit or delete your recipes under the My Recipes section.",
  },
  {
    id: 4,
    question: "How is the 'Top Recipes' section calculated?",
    answer:
      "The 'Top Recipes' section shows the top 6 recipes sorted by the highest number of likes using MongoDB’s sort and limit operations.",
  },
  {
    id: 5,
    question: "Can I update or delete a recipe I added?",
    answer:
      "Yes. In the My Recipes section, you can update your recipe via a modal form or delete it completely, which removes it from both the UI and database.",
  },
  {
    id: 6,
    question: "How do I filter recipes by cuisine?",
    answer:
      "Go to the All Recipes page and use the Cuisine Type dropdown to filter recipes by categories like Italian, Mexican, Indian, Chinese, or Others.",
  },
];

const Faq = () => {
  return (
    <div className="mt-14 px-4 mb-10 md:mb-16 md:px-0">
      <div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold text-[#AD49E1]">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-500 my-4 font-medium text-center w-full">
          Explore simple answers to help you navigate the app and enjoy sharing your favorite dishes.
        </p>
      </div>
      {/* all questions  */}
      <div className="mt-6">
        {questions.map((ask) => (
          <Question key={ask.id} ask={ask}></Question>
        ))}
      </div>
    </div>
  );
};

export default Faq;
