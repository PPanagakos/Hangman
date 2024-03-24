import React from "react";
import "./HowToPlay.css";
import { useView } from "../../../contexts/ViewContext";
import backArrow from "../../../assets/images/icon-back.svg";
import InstructionCards from "../../InstructionCards/InstructionCards";

function HowToPlay() {
  const { navigate } = useView();
  return (
    <>
      <div className="instructions-container">
        <button
          onClick={() => navigate("main")}
          className="back-arrow-button"
          aria-label="Go back"
        >
          <img className="back-arrow-img" src={backArrow} alt="Go back" />
        </button>
        <h3 className="header-text">How to Play</h3>
      </div>
      <InstructionCards />
    </>
  );
}

export default HowToPlay;
