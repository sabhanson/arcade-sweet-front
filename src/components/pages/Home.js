import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./styles/Home.css";
import MatchGame from "../../images/matchgame.png";
import WordleGame from "../../images/wordlegame.png";

export function Home({ handlePageChange }) {
  const [display, setDisplay] = useState(true);

  return (
    <div className="row justify-content-around">
      <h1>Welcome to Arcade Sweet! Choose a game below to get started :)</h1>
      <Card className={display ? "col-5" : "col-5 hidden"}>
        <CardMedia
          component="img"
          height="140"
          image={MatchGame}
          className="img-fluid"
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
            className="button"
            size="small"
            onClick={() => {
              handlePageChange("CardMatch");
              setDisplay(false);
            }}
          >
            Play Now!
          </button>
          <button
            className="button"
            onClick={() => handlePageChange("GameGuide")}
          >
            How to Play
          </button>
        </CardActions>
      </Card>
      <Card className={display ? "col-5" : "col-5 hidden"}>
        <CardMedia
          component="img"
          height="140"
          image={WordleGame}
          className="img-fluid"
          alt="wordle screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wordle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Guess the word in less than 6 tries!
          </Typography>
        </CardContent>
        <CardActions className="d-flex justify-content-center">
          <button
            className="button"
            size="small"
            onClick={() => {
              handlePageChange("Wordle");
              setDisplay(false);
            }}
          >
            Play Now!
          </button>
          <button
            className="button"
            onClick={() => handlePageChange("GameGuide")}
          >
            How to Play
          </button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Home;
