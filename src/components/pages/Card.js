import React from "react";
import logo from "../../images/logo.png"
import "./Card.css"

const styles = {
  img: {
    width: "200px",
    height: "auto",
  },
};


export function Card({ eachCard, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(eachCard)
    }
  }

  return (
    <div className="card col-2">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={eachCard.image} alt="card front" style={styles.img} />
              <img className="back" src={logo} alt="card back" style={styles.img} onClick={handleClick} />
            </div>
          </div>
  )
}

export default Card;
