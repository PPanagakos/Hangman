import React from "react";
import "./Keyboard.css";
import { useGame } from "../../contexts/GameContext";

const Keyboard = ({ onKeyPress }) => {
  const { incorrectGuesses, guessedLetters } = useGame();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    if (
      !guessedLetters.includes(letter) &&
      !incorrectGuesses.includes(letter)
    ) {
      onKeyPress(letter);
    }
  };

  return (
    <div className="outer-keyboard-container">
      <div
        className="keyboard-container"
        role="group"
        aria-label="Letter keyboard"
      >
        {letters.map((letter) => (
          <div
            key={letter}
            className={`letter ${
              guessedLetters.includes(letter) ? "guessed" : ""
            } ${incorrectGuesses.includes(letter) ? "guessed" : ""}`}
            aria-pressed={guessedLetters.includes(letter) ? "true" : "false"}
            disabled={incorrectGuesses.includes(letter)}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
