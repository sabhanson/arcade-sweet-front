import React from "react";
import logo from "../../images/logo-card.png";
import "./Card.css";

const styles = {
  div: {
    background: "#1B998B",
    border: "5px solid #1B998B",
  },
};

export function Card({ eachCard, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(eachCard);
    }
  };

  return (
    <div style={styles.div} className="card col-3">
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
