import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import cardsArray from "../cardsArray";

export function CardMatch() {

  const [cards, setCards] = useState([])

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  // function to shuffle and duplicate cards
  const shuffleCards = () => {
    const shuffledCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
  }

  // useState to set choiceOne
  // useState to set choiceTwo
  // useState to set

  // const consoleClick = () => {
  //   console.log({eachCard.type});
  // };

  // run a function to allow for 2 clicks, and read the type on eachCard for both clicks. compare the types for a match or !match
  // const timeout = useRef(null);

  // timer for card flip
  // timeout.current = setTimeout(() => {
  //   setOpenCards([]);
  // }, 500);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.type === choiceTwo.type) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.type === choiceOne.type) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }
  //then need to compare both choices


  return (
    <div className="card-grid">
      <h1>Match! That! LaCroix!</h1>
      <button onClick={shuffleCards}>Start</button>
      <div className="row d-flex">
        {cards.map((eachCard) => (
          <Card key={eachCard.id} eachCard={eachCard} handleChoice={handleChoice}
            flipped={eachCard === choiceOne || eachCard === choiceTwo || eachCard.matched}
            disabled={disabled} />
        ))}
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
