import React from "react";
import logo from "../../images/logo-card.png";
import "./styles/Card.css";

export function Card({ eachCard, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(eachCard);
    }
  };
  return (
    <div className="cardContainer card col-3">
      <div className={flipped ? "flipped" : ""}>
        <img className="front card-img" src={eachCard.image} alt="card front" />
        <img
          className="back card-img"
          src={logo}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default Card;
