import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1>this is the navigation</h1>
      <ul className="row navbar nav nav-tabs">
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            HOME
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#reviews"
            onClick={() => handlePageChange("Reviews")}
            className={
              currentPage === "Reviews" ? "nav-link active" : "nav-link"
            }
          >
            REVIEWS
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#featured-game"
            onClick={() => handlePageChange("Featured")}
            className={
              currentPage === "Featured" ? "nav-link active" : "nav-link"
            }
          >
            FEATURED
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#game-guides"
            onClick={() => handlePageChange("Game Guides")}
            className={
              currentPage === "Game Guides" ? "nav-link active" : "nav-link"
            }
          >
            GAME GUIDES
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#highscores"
            onClick={() => handlePageChange("Highscores")}
            className={
              currentPage === "Highscores" ? "nav-link active" : "nav-link"
            }
          >
            HIGHSCORES
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
