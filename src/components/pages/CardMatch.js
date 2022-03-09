import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import cardsArray from "../cardsArray";
import "./CardMatch.css";

const styles = {
  cardsDiv: {
    width: "80vw",
    overflow: "hidden",
    background: "#1B998B",
    border: "5px double white",
    padding: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
  },
  button: {
    padding: "3px",
    // fontFamily: "cursive",
    background: "#F46036",
    color: "white",
    borderRadius: "7px",
    margin: "10px",
  },
};

export function CardMatch() {
  const [cards, setCards] = useState([]);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [display, setDisplay] = useState(false);

  // function to shuffle and duplicate cards
  const shuffleCards = () => {
    //set the container to display
    // stopwatch should start here
    const shuffledCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setDisplay(true);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
  };

  // BUG: user can double click on one card and flip the other paired card

  // TODO: set up stopwatch
  // when the user starts the game, start the stopwatch
  // once all elements of the array are matched: true, stop the stopwatch

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.type === choiceTwo.type) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.type === choiceOne.type) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // TODO: write a function that evaluates if the array elements are all "matched: true", if so then stop the stopwatch and keep a record of the time (score)

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1>Match! That! LaCroix!</h1>
      <div>
        <button style={styles.button} onClick={shuffleCards}>
          New Game
        </button>
        <button style={styles.button} onClick={shuffleCards}>
          Play Again
        </button>
      </div>
      <div
        className={
          display ? "card-grid d-flex col-12 justify-content-center" : "hidden"
        }
      >
        <div className="row d-flex" style={styles.cardsDiv}>
          {cards.map((eachCard) => (
            <Card
              key={eachCard.id}
              eachCard={eachCard}
              handleChoice={handleChoice}
              flipped={
                eachCard === choiceOne ||
                eachCard === choiceTwo ||
                eachCard.matched
              }
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// need a background image

// need to have a timer running once the game start button is clicked
// function to compare if card 1 and card 2 are the same or different
// settimeout for flipping the cards, give the user long enough to see the cards

// if the cards match, have the cards fade into the background
// if the cards don't match, flip back over after x seconds
// timer stops once all cards are matched
// button to initiate new game
// create HTML element for each card
// change state for card being flipped or unflipped
// change state for card being matched and taken out of the playable cards
//

export default CardMatch;
