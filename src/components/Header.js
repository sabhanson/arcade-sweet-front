import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "../components/pages/Home";
import Reviews from "../components/pages/Reviews";
import FeaturedGame from "../components/pages/FeaturedGame";
import GameGuide from "../components/pages/GameGuide";
import Highscores from "../components/pages/Highscores";

const styles = {
  img: {
    width: "30px",
  },
};

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Reviews") {
      return <Reviews />;
    }
    if (currentPage === "Featured") {
      return <FeaturedGame />;
    }
    if (currentPage === "Game Guides") {
      return <GameGuide />;
    }
    if (currentPage === "Highscores") {
      return <Highscores />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <img
        style={styles.img}
        src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
      ></img>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Header;
