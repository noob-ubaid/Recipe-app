import React from "react";

const About = () => {
  return (
    <div className=" px-6 py-12 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#AD49E1] mb-4">
          About Recipe Book App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A simple, powerful platform for discovering and sharing recipes.
        </p>
      </div>

      {/* When & Why */}
      <div className="mb-10">
        <p className="text-base leading-relaxed">
          Welcome to <span className="font-semibold">Recipe Book</span>! It is a
          well-known and trusted platform in our country, loved by food
          enthusiasts of all ages. This platform was created especially for
          those who struggle with cooking and want to learn step by step, as
          well as for passionate home cooks and chefs who are eager to share
          their favorite recipes with a wider online community. Whether you're a
          beginner trying to make your first meal or an expert looking to
          showcase your signature dish, Recipe Book is the perfect place to
          connect, learn, and inspire.{" "}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🎯 The story behind the Recipe Book
        </h2>
        <p className="text-base leading-relaxed">
          The idea for Recipe Book was born out of a simple yet powerful need —
          helping people cook with confidence and share their culinary
          creativity. During the COVID-19 lockdown, many people found themselves
          struggling to prepare meals at home, especially beginners and students
          living away from family. At the same time, passionate home cooks had
          limited ways to share their recipes with others. Seeing this gap, we
          created Recipe Book — a platform where anyone, regardless of skill
          level, can find easy-to-follow recipes, learn cooking basics, and also
          contribute their own creations. What started as a small personal
          project has grown into a nationwide cooking community that celebrates
          the joy of home-cooked meals.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🎯 Our Vision</h2>
        <p className="text-base leading-relaxed">
          At Recipe Book, our vision is to make cooking accessible, enjoyable,
          and meaningful for everyone. We believe food is more than just a
          necessity — it's a way to express culture, love, and creativity. We
          aim to become the go-to online platform for beginner cooks and recipe
          sharers in Bangladesh and beyond. Through simple tutorials, diverse
          recipes, and a friendly community, we want to empower people to cook
          with confidence, eat healthier, and connect over the love of food.
          Whether you’re learning your first dish or teaching your grandmother’s
          special recipe to the world, Recipe Book is here to support your
          journey.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🎯 Our mission</h2>
        <p className="text-base leading-relaxed">
          Our mission at Recipe Book is to make cooking simple, accessible, and
          enjoyable for everyone — from beginners who are just starting their
          journey in the kitchen to experienced home cooks who want to share
          their passion with the world. We aim to build a supportive community
          where people can learn, teach, and celebrate the joy of cooking. By
          providing step-by-step instructions, easy-to-follow videos,
          user-generated recipes, and a space for creativity, we empower
          individuals to cook confidently at home. In a world full of fast food
          and busy lifestyles, we want to bring back the warmth of home-cooked
          meals and promote healthier, budget-friendly eating habits. Our goal
          is to connect people through food, inspire creativity, and preserve
          diverse cooking traditions for future generations.
        </p>
      </div>

      {/* Why People Use It */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🙋 Why do people use it?
        </h2>
        <p className="text-base leading-relaxed">
          People use the Recipe Book App because it makes cooking simple,
          enjoyable, and accessible for everyone. The app is especially helpful
          for beginners, offering easy-to-follow recipes with step-by-step
          instructions, clear ingredient lists, cooking times, and visual
          guidance. Even someone who has never cooked before can confidently
          prepare a meal using our app. One of the key reasons users love Recipe
          Book is the ability to share their own recipes with others. Whether
          it's a traditional family dish or a personal creation, users can
          quickly upload and showcase their recipes to the community. The app
          also features powerful search and filter options, allowing users to
          find recipes based on category, cooking time, difficulty level,
          dietary preferences, or specific ingredients.
        </p>
      </div>
    </div>
  );
};

export default About;
