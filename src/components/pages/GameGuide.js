import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/GameGuide.css";
import Ending from "../../images/cardEnd.png";
import Score from "../../images/cardScore.png";
import Wordle from "../../images/wordleRules.png";
import Win from "../../images/wordleWin.png";

export function GameGuide({ handlePageChange }) {
  return (
    <div className="my-5 row d-flex justify-content-center">
      <div id="card" className="col-10 col-lg-4 guide-card">
        <h1 className="guide-title">Card-Matching</h1>
        <div className="body">
          <p>
            Each time two cards are selected, a move will be added to the score
            count regardless if it is a match or not. Your number of moves are
            displayed at the bottom of the game board.
          </p>
          <img
            src={Score}
            className="img-fluid guideImg"
            alt="preview of the cardmatch game"
          />
          <p>
            <br></br>A match is made if the two cards turned over are identical.
            Once a match is made, the cards will remain flipped over. If the
            cards do not match, they will turn back over. The game ends once all
            cards have been matched. Your score is the total number of moves it
            takes you to find all matches so the lower the score, the better!
          </p>
          <img
            src={Ending}
            className="img-fluid guideImg"
            alt="preview of the end of cardmatch"
          />
        </div>
        <button
          className="btn third button"
          onClick={() => handlePageChange("CardMatch")}
        >
          Play Game
        </button>
      </div>
      <div id="wordle" className="col-10 col-lg-4 guide-card">
        <h1 className="guide-title">Wordle</h1>
        <div className="body">
          <p>
            You have 6 chances to guess a randomly selected five-letter word.
            After each guess, you get feedback for letters that are in the word
            and/or in the word and in the right space:
          </p>
          <img
            className="img-fluid"
            src={Wordle}
            alt="preview of the wordle game"
          />
          <p>
            <br></br>
            As shown above, if you have the right letter in the right spot, it
            shows up green. A correct letter in the wrong spot shows up yellow.
            A letter that isn't in the word in any spot shows up gray. There are
            no letter repeats in any of the words. Once you've guessed the
            correct word, all the letters will be green. If you can guess the
            word in 6 or less tries, you win!
          </p>
          <img
            src={Win}
            className="img-fluid guideImg2"
            alt="preview of the end of wordle"
          />
        </div>
        <button
          className="btn third button"
          onClick={() => handlePageChange("Wordle")}
        >
          Play Game
        </button>
      </div>
    </div>
  );
}
export default GameGuide;
