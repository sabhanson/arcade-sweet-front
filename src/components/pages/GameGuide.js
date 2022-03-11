import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/GameGuide.css";

export function GameGuide({ handlePageChange }) {
  return (
    <div className="my-5 row d-flex justify-content-center">
      <div id="card" className="col-10 col-md-7 col-lg-4 guide-card">
        <h2 className="guide-title">Card-Matching</h2>
        <div className="body">
          <p>stuff about how to play the game</p>
        </div>
        <button
          className="btn third button"
          onClick={() => handlePageChange("CardMatch")}
        >
          Play Game
        </button>
      </div>
      <div id="wordle" className="col-10 col-md-7 col-lg-4 guide-card">
        <h2 className="guide-title">Wordle</h2>
        <div className="body">
          <p>stuff about how to play the game</p>
        </div>
        <button className="btn third button" onClick={() => handlePageChange("Wordle")}>
          Play Game
        </button>
      </div>
    </div>
  );
}

export default GameGuide;
