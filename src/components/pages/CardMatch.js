import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
import cardsArray from "../cardsArray";

const styles = {
  img: {
    width: "200px",
    height: "auto",
  },
};

export function CardMatch() {
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

  return (
    <div className="d-flex row">
      <h1>this is the cardmatch game</h1>
      {cardsArray.map((eachCard) => (
        <div className="col-3">
          <a onClick={() => console.log(eachCard.type)} href="#value">
            <img
              style={styles.img}
              src={eachCard.image}
              alt="pic of la croix can"
            ></img>
          </a>
        </div>
      ))}
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
