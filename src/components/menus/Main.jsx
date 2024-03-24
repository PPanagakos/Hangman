import React from "react";
import "./Main.css";
import logo from "../../assets/images/logo.svg";
import play from "../../assets/images/icon-play.svg";
import Button from "../Button/Button";
import Menu from "./Menu";
import { useView } from "../../contexts/ViewContext";
import HowToplay from "../pages/HowToPlay/HowToPlay";
import PickACategory from "../pages/PickACategory/PickACategory";
import Game from "../pages/Game";

function Main() {
  const { view, navigate } = useView();

  const getContent = () => {
    switch (view) {
      case "howToPlay":
        return <HowToplay />;
      case "pickACategory":
        return <PickACategory />;
      case "game":
        return <Game />;
      case "paused":
        return <Paused />;
      default:
        return (
          <Menu logoSrc={logo}>
            <button
              className="play-button"
              onClick={() => navigate("pickACategory")}
            >
              <img className="play-icon" src={play} alt="Play" />
            </button>
            <Button onClick={() => navigate("howToPlay")}>HOW TO PLAY</Button>
          </Menu>
        );
    }
  };

  return getContent();
}

export default Main;
