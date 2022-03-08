import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
import cardsArray from "../../components/cardsArray";

const styles = {
  img: {
    width: "200px",
    height: "auto",
  },
};

export function CardMatch({ cardArray }) {
  return (
    <div className="d-flex row">
      <h1>this is the cardmatch game</h1>
      {cardsArray.map((eachCard) => (
        <div className="col-3">
          <img
            style={styles.img}
            src={eachCard.image}
            alt="pic of la croix can"
          ></img>
        </div>
      ))}
    </div>
  );
}

// need to get all of our card images

// need a background image
// need to have a timer running once the game start button is clicked
// function to compare if card 1 and card 2 are the same or different
// settimeout for flipping the cards, give the user long enough to see the cards

// timer for card flip
// timeout.current = setTimeout(() => {
//   setOpenCards([]);
// }, 500);

// if the cards match, have the cards fade into the background
// if the cards don't match, flip back over after x seconds
// timer stops once all cards are matched
// button to initiate new game
// create HTML element for each card
// change state for card being flipped or unflipped
// change state for card being matched and taken out of the playable cards
//

export default CardMatch;
