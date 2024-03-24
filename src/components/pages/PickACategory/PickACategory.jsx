import React from "react";
import "./PickACategory.css";
import backArrow from "../../../assets/images/icon-back.svg";
import CategoryCards from "../../CategoryCards/CategoryCards";
import categoriesData from "../../../categories.json";
import { useView } from "../../../contexts/ViewContext";
import { useGame } from "../../../contexts/GameContext";

function PickACategory() {
  const { navigate } = useView();
  const { choosePhraseFromCategory, setCurrentCategory } = useGame();

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    choosePhraseFromCategory(category, categoriesData);
    navigate("game");
  };

  return (
    <>
      <div className="pick-category-container">
        <button
          onClick={() => navigate("main")}
          className="back-arrow-button"
          aria-label="Go back"
        >
          <img className="back-arrow-img" src={backArrow} alt="Go back" />
        </button>
        <h3 className="header-text">Pick a Category</h3>
      </div>
      <CategoryCards onCategorySelect={handleCategorySelect} />
    </>
  );
}

export default PickACategory;
