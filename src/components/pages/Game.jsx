import React, { useEffect, useState } from "react";
import { useGame } from "../../contexts/GameContext";
import GameNavbar from "../GameNavbar/GameNavbar";
import Keyboard from "../Keyboard/Keyboard";
import PhraseDisplay from "../Keyboard/PhraseDisplay";
import { Paused, Won, Lost } from "../menus/CreateMenuComponent";

function Game() {
  const { phrase, guessedLetters, incorrectGuesses, guessLetter, totalLives } =
    useGame();
  const [gameStatus, setGameStatus] = useState("playing");
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Determine if the player has won or lost
    const checkGameStatus = () => {
      const uniqueLetters = new Set(
        phrase.replace(/[^A-Z]/gi, "").toUpperCase()
      );
      const hasWon = [...uniqueLetters].every((letter) =>
        guessedLetters.includes(letter)
      );

      if (hasWon) {
        setGameStatus("won");
        setModalVisible(true);
      } else if (incorrectGuesses.length >= totalLives) {
        setGameStatus("lost");
        setModalVisible(true);
      }
    };
    checkGameStatus();

    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();
      if (letter.match(/^[A-Z]$/) && !guessedLetters.includes(letter)) {
        guessLetter(letter);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phrase, guessedLetters, incorrectGuesses, totalLives, guessLetter]);

  const handlePauseClick = () => {
    setGameStatus("paused");
    setModalVisible(true);
  };

  return (
    <div>
      <GameNavbar onMenuClick={handlePauseClick} />
      <PhraseDisplay phrase={phrase} guessedLetters={guessedLetters} />
      <Keyboard onKeyPress={guessLetter} guessedLetters={guessedLetters} />

      {isModalVisible &&
        (gameStatus === "paused" ? (
          <Paused setModalVisible={setModalVisible} />
        ) : gameStatus === "won" ? (
          <Won setModalVisible={setModalVisible} />
        ) : gameStatus === "lost" ? (
          <Lost setModalVisible={setModalVisible} />
        ) : null)}
    </div>
  );
}

export default Game;
