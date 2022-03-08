import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Terms from "./components/pages/Terms";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Reviews from "./components/pages/Reviews";
import FeaturedGame from "./components/pages/FeaturedGame";
import GameGuide from "./components/pages/GameGuide";
import Highscores from "./components/pages/Highscores";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Terms") {
      return <Terms />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
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
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
