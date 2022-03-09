import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";

const styles = {
  nav: {
    background: "#2E294E",
  },
  h1: {
    color: "white",
  },
  imgDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: "50%",
    marginTop: "30px",
    width: "50px",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
};

const logMeOut = () => {
  localStorage.removeItem("token");
};

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.imgDiv}>
        <a
          src="#"
          href="#home"
          alt="alt tag"
          onClick={() => handlePageChange("Home")}
        >
          <img src={logo} style={styles.logo} alt="logo" />
        </a>
        <a
          src="#"
          href="#profile"
          alt="alt tag"
          onClick={() => handlePageChange("Profile")}
        >
          <img
            style={styles.img}
            alt="profile pic"
            src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
          ></img>
        </a>
        <a
          src="#"
          href="#login"
          alt="alt tag"
          onClick={() => handlePageChange("Login")}
        >
          {" "}
          Login{" "}
        </a>
        <a src="#" href="#logout" alt="alt tag" onClick={() => logMeOut()}>
          {" "}
          Logout{" "}
        </a>
      </div>
      <ul className="row navbar nav nav-tabs">
        <li className="nav-item col-sm-12 col-md-2">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            HOME
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-2">
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
        <li className="nav-item col-sm-12 col-md-2">
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
        <li className="nav-item col-sm-12 col-md-2">
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
        <li className="nav-item col-sm-12 col-md-2">
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
