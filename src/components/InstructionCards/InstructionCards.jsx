import React from "react";
import "./InstructionCards.css";

function InstructionCards() {
  const cardData = [
    {
      id: 1,
      title: "CHOOSE A CATEGORY",
      content:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      id: 2,
      title: "GUESS LETTERS",
      content:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      id: 3,
      title: "WIN OR LOSE",
      content:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map(({ id, title, content }) => (
        <article key={id} className="card">
          <header className="card-top">
            <span className="card-number">0{id}</span>
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p>{content}</p>
            </div>
          </header>
        </article>
      ))}
    </div>
  );
}

export default InstructionCards;
