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
import Profile from "./components/pages/Profile";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

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
      return <Home handlePageChange={handlePageChange} />;
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
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Signup") {
      return <Signup handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return <Login handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Logout") {
      return <Logout />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
