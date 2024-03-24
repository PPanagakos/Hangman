import React from "react";
import "./CategoryCards.css";

const categories = [
  "Movies",
  "TV Shows",
  "Countries",
  "Capital Cities",
  "Animals",
  "Sports",
];

const CategoryCards = ({ onCategorySelect }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-card"
          onClick={() => onCategorySelect(category)}
        >
          <p className="category-text">{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
