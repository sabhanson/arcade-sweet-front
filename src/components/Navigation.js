import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { fabClasses } from "@mui/material";
import { isToken } from "../utils/API";
import { getProfileData } from "../utils/API";
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';

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

function Navigation({ currentPage, handlePageChange }) {
  const [avatar, setAvatar] = useState();
  async function getData() {
    let pd = await getProfileData();
    setAvatar(pd.file_name);
    return pd;

  } 

  const logMeOut = () => {
    console.log(handlePageChange)
    localStorage.removeItem("token");
    console.log(currentPage);
    if(currentPage === "Home") {
        window.location.reload(false);
    } else {
      handlePageChange("Home");
    }
  };


  getData();

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
          href="#login"
          alt="alt tag"
          onClick={() => handlePageChange("Login")}
          style={{ display: isToken() ? "none" : "block" }}
        >
          Login
        </a>
        <Dropdown as={NavItem} style={{ display : isToken() ? "block" : "none"  }}>
          <Dropdown.Toggle as={NavLink}>
            <img
              style={styles.img}
              alt="profile pic"
              src={avatar}
            ></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <a
                src="#"
                href="#"
                alt="alt tag"
                onClick={() => handlePageChange("Profile")}
              >
                Profile
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                src="#"
                href="#"
                alt="alt tag"
                onClick={() => logMeOut()}
              >
                Logout
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
              currentPage === "Featured"
                ? "nav-link disabled"
                : "nav-link disabled"
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
