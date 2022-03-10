import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import cardsArray from "../cardsArray";
import "./CardMatch.css";
import { Box, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.black",
    contrast: "0%",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

export function CardMatch({ handlePageChange }) {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [display, setDisplay] = useState(false);
  const [moves, setMoves] = useState(0);
  const [match, setMatches] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // function to shuffle and duplicate cards
  const shuffleCards = () => {
    const shuffledCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setDisplay(true);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    resetGame();
  };

  // BUG: user can double click on one card and flip the other paired card :)

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      setMoves((moves) => moves + 1);
      // function to compare if card 1 and card 2 are the same or different
      if (choiceOne.type === choiceTwo.type) {
        setMatches((match) => match + 1);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.type === choiceOne.type) {
              // if the cards match, have the cards stay flipped over
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        // function so when match = 6 then capture moves count for score then trigger endgame
        if (match === 5) {
          const token = localStorage.getItem("token");
          const postScore = () => {
            fetch("http://localhost:3001/api/scores", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                score: moves + 1,
                gamevalue: 1,
              }),
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            });
          };
          postScore();
          handleOpen();
          // this is where we want to hook into high scores!!! -Muhammad
        }
        resetTurn();
      } else {
        // setTimeout for flipping the cards, give the user long enough to see the cards
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // resets choice one and two to null again, disabled false so that the cards are able to be clicked again
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const resetGame = () => {
    handleClose();
    setMoves(0);
    setMatches(0);
    setDisplay(false);
    shuffleCards();
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1>Match! That! LaCroix!</h1>

      <div>
        <button style={styles.button} onClick={shuffleCards}>
          New Game
        </button>
        <p>Moves: {moves}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
      >
        <Box style={styles.modal}>
          <Typography id="unstyled-modal-title" variant="h6" component="h2">
            You won in {moves} moves!
            <button style={styles.button} onClick={resetGame}>
              Play Again
            </button>
          </Typography>
        </Box>
      </Modal>
      <div
        className={
          display
            ? "card-grid d-flex col-10 col-md-8 col-lg-6 justify-content-center"
            : "hidden"
        }
      >
        <div className="row d-flex" style={styles.cardsDiv}>
          <button onClick={() => handlePageChange("Home")}>
            <CloseIcon />
          </button>
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

export default CardMatch;
