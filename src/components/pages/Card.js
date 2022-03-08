import React from "react";
import Pure from "../../images/Pure.jpeg"

const styles = {
  img: {
    width: "200px",
    height: "auto",
  },
};


export function Card({ eachCard, handleChoice}) {

  const handleClick = () => {
    handleChoice(eachCard)
  }

  return (
    <div className="card col-4">
            <div>
              <img className="front" src={eachCard.image} alt="card front" style={styles.img} />
              <img className="back" src={Pure} alt="card back" style={styles.img} onClick={handleClick} />
            </div>
          </div>
  )
}

export default Card;
