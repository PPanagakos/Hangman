import React, { createContext, useCallback, useContext, useState } from "react";
import categoriesData from "../categories.json";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [phrase, setPhrase] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const totalLives = 8;

  const guessLetter = useCallback((letter) => {
    const upperLetter = letter.toUpperCase();
    // Avoids duplicating letters in guessedLetters and incorrectGuesses
    if (
      guessedLetters.includes(upperLetter) ||
      incorrectGuesses.includes(upperLetter)
    ) {
      return;
    }

    if (phrase.toUpperCase().includes(upperLetter)) {
      setGuessedLetters((prev) => [...prev, upperLetter]);
    } else {
      setIncorrectGuesses((prev) => [...prev, upperLetter]);
    }
  });

  const choosePhraseFromCategory = useCallback((category) => {
    const phrases = categoriesData.categories[category];
    if (!phrases) {
      console.error("Category not found:", category);
      return;
    }

    const randomPhrase =
      phrases[Math.floor(Math.random() * phrases.length)].name;
    setPhrase(randomPhrase);
    setGuessedLetters([]);
    setIncorrectGuesses([]);
  });

  const resetGame = useCallback(() => {
    setGuessedLetters([]);
    setIncorrectGuesses([]);
    choosePhraseFromCategory(currentCategory);
  });

  return (
    <GameContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        phrase,
        guessedLetters,
        guessLetter,
        incorrectGuesses,
        choosePhraseFromCategory,
        resetGame,
        totalLives,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
