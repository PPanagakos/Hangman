import React from "react";
import { useView } from "../../contexts/ViewContext";
import { useGame } from "../../contexts/GameContext";
import Menu from "./Menu";
import Button from "../Button/Button";

/**
 * A factory function for creating menu components with specific behavior based on game state.
 * It dynamically creates components such as Paused, Won, and Lost menus.
 *
 * @param {string} menuText - The text to display in the menu, indicating the component's purpose.
 * @param {Object} options - Optional additional configurations for the component.
 * @returns A React component tailored for specific game states, with relevant actions.
 */
function CreateMenuComponent(menuText) {
  return function MenuComponent({ setModalVisible }) {
    const { navigate } = useView();
    const { resetGame } = useGame();

    // Defining actions available in the menu. Each action is a function.
    const buttonActions = {
      continue: () => setModalVisible(false),
      playAgain: () => {
        resetGame();
        setModalVisible(false);
        navigate("game");
      },
      newCategory: () => {
        resetGame();
        setModalVisible(false);
        navigate("pickACategory");
      },
      quit: () => {
        resetGame();
        navigate("main");
      },
    };

    // Dynamically creating buttons based on the menuText. Uses conditional rendering.
    const buttons = [
      menuText === "PAUSED"
        ? {
            text: "CONTINUE",
            action: buttonActions.continue,
            className: "small",
          }
        : null,
      menuText !== "PAUSED"
        ? { text: "PLAY AGAIN", action: buttonActions.playAgain }
        : null,
      { text: "NEW CATEGORY", action: buttonActions.newCategory },
      {
        text: "QUIT GAME",
        action: buttonActions.quit,
        className: "quit-game small",
      },
    ].filter(Boolean);

    return (
      <div className="modal-backdrop" onClick={() => setModalVisible(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Menu text={menuText}>
            {buttons.map(({ text, action, className = "" }) => (
              <Button key={text} className={className} onClick={action}>
                {text}
              </Button>
            ))}
          </Menu>
        </div>
      </div>
    );
  };
}

export const Paused = CreateMenuComponent("PAUSED");
export const Won = CreateMenuComponent("YOU WIN");
export const Lost = CreateMenuComponent("YOU LOSE");
