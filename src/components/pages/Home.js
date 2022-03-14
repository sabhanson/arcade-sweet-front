import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./styles/Home.css";
import MatchGame from "../../images/matchgame.png";
import WordleGame from "../../images/wordlegame.png";

export function Home({ handlePageChange }) {
  const [display, setDisplay] = useState(true);

  return (
    <div className="min-h-100">
      <div className="row justify-content-center my-5">
        <Card className="gameCard col-10 col-lg-4 mb-3 mx-3">
          <CardMedia
            component="img"
            height="140"
            image={MatchGame}
            className="gameImg img-fluid my-3"
            alt="card matching screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card Matching
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Match your favorite La Croix flavors in the fewest moves!
            </Typography>
          </CardContent>
          <CardActions className="d-flex justify-content-center">
            <button
              className="btn third"
              size="small"
              onClick={() => {
                handlePageChange("CardMatch");
                setDisplay(false);
              }}
            >
              Play Now!
            </button>
            <button
              className="btn third"
              onClick={() => handlePageChange("GameGuide")}
            >
              How to Play
            </button>
          </CardActions>
        </Card>
        <Card className="gameCard col-10 col-lg-4 mb-3 mx-3">
          <CardMedia
            component="img"
            height="140"
            image={WordleGame}
            className="gameImg img-fluid my-3"
            alt="wordle screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wordle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Guess as many words as you'd like and don't worry about repeating
              letters!
            </Typography>
          </CardContent>
          <CardActions className="d-flex justify-content-center">
            <button
              className="btn third"
              size="small"
              onClick={() => {
                handlePageChange("Wordle");
                setDisplay(false);
              }}
            >
              Play Now!
            </button>
            <button
              className="btn third"
              onClick={() => handlePageChange("GameGuide")}
            >
              How to Play
            </button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default Home;
