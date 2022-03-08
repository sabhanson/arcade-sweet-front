import React, { useState } from "react";
import CardMatch from "./CardMatch";
import Snake from "./Snake";
import Wordle from "./Wordle";

export function Home() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "CardMatch") {
      return <CardMatch />;
    }
    if (currentPage === "Snake Game") {
      return <Snake />;
    }
    if (currentPage === "Wordle") {
      return <Wordle />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>this is the Home page</h1>
      {/* <CardMatch /> */}
      <button onClick={() => handlePageChange("CardMatch")}>
        open card match
      </button>
      <button onClick={() => handlePageChange("Snake Game")}>open snake</button>
      <button onClick={() => handlePageChange("Wordle")}>open wordle</button>
      {renderPage()}
    </div>
  );
}

export default Home;
