import React from "react";

const styles = {
  div: {
    marginTop: "30px",
    background: "#1B998B",
    border: "5px double white",
    padding: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
  },
  h1: {
    textAlign: "center",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
    padding: "10px",
  },
};

export function FeaturedGame() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>Featured Game - Wordle</h1>
          <p>
            this game is featured this game is featured this game is featured
            this game is featured this game is featured this game is featured
            this game is featured this game is featured this game is featured
            this game is featured this game is featured this game is featured
            this game is featured this game is featured this game is featured
            this game is featured this game is featured this game is featured
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGame;
