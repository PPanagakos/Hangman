import React from "react";
import "./GameNavbar.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import heartIcon from "../../assets/images/icon-heart.svg";
import { useGame } from "../../contexts/GameContext";

function GameNavbar({ onMenuClick }) {
  const { incorrectGuesses, totalLives, currentCategory } = useGame();
  const livesLeft = totalLives - incorrectGuesses.length;
  const progressPercentage = (livesLeft / totalLives) * 100;

  return (
    <div className="game-navbar-container">
      <div className="game-navbar-left">
        <img
          className="menu-icon"
          src={menuIcon}
          alt="Menu button"
          onClick={onMenuClick}
        />
        <h3 className="categories-text">{currentCategory}</h3>
      </div>
      <div className="game-navbar-right">
        <div className="health-bar">
          <div
            className="health-progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <img className="heart-icon" src={heartIcon} alt="heart icon" />
      </div>
    </div>
  );
}

export default GameNavbar;
