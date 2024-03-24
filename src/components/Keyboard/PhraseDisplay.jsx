import React from "react";
import "./Keyboard.css";

const PhraseDisplay = ({ phrase, guessedLetters }) => {
  const phraseParts = phrase.toUpperCase().split(" ");

  return (
    <div className="phrase-container">
      {phraseParts.map((part, partIndex) => (
        <React.Fragment key={partIndex}>
          <div className="phrase-part">
            {part.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`letter-overlay ${
                  guessedLetters.includes(letter) ? "guessed" : ""
                }`}
              >
                {guessedLetters.includes(letter) ? letter : ""}
              </span>
            ))}
          </div>
          {partIndex < phraseParts.length - 1 && (
            <div className="word-gap"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PhraseDisplay;
