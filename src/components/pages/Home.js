import React, { useState } from "react";
import CardMatch from "./CardMatch";
import Guides from "./GameGuide";
import Wordle from "./Wordle";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles/Home.css"
import CloseIcon from '@mui/icons-material/Close';

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [display, setDisplay] = useState(true);

  const renderPage = () => {
    if (currentPage === "CardMatch") {
      return <CardMatch />;
    }
    if (currentPage === "GameGuide") {
      return <Guides />;
    }
    if (currentPage === "Wordle") {
      return <Wordle />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>Welcome to Arcade Sweet! Choose a game below to get started :)</h1>
      {renderPage()}

      <Card className={
          display
            ? ""
            : "hidden"
        }>
        <CardMedia
          component="img"
          height="140"
          image="public/matchgame.png"
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
        <CardActions>
          <Button size="small" onClick={() => {
            handlePageChange("CardMatch"); 
            setDisplay(false);
          }}>Play Now!</Button>
          <Button size="small" onClick={() => handlePageChange("GameGuide")}>How to Play</Button>
        </CardActions>
      </Card>
      <Card className={
          display
            ? ""
            : "hidden"
        }>
        <CardMedia
          component="img"
          height="140"
          image="public/wordlegame.png"
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
        <CardActions>
          <Button size="small" onClick={() => {
            handlePageChange("Wordle"); 
            setDisplay(false);
          }}>Play now!</Button>
          <Button size="small" onClick={() => handlePageChange("GameGuide")}>How to Play</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;
