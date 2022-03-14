import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { isToken } from "../utils/API";
import { getProfileData } from "../utils/API";
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
import "./pages/styles/Nav.css";


function Navigation({ currentPage, handlePageChange }) {
  const [avatar, setAvatar] = useState();
  async function getData() {
    let pd = await getProfileData();
    setAvatar(pd.file_name);
    return pd;
  }

  const logMeOut = () => {
    console.log(handlePageChange);
    localStorage.removeItem("token");
    console.log(currentPage);
    if (currentPage === "Home") {
      window.location.reload(false);
    } else {
      handlePageChange("Home");
    }
  };

  getData();

  return (
    <nav className="navbarContainer">
      <div className="imgDiv">
        <a
          src="#"
          href="#home"
          alt="alt tag"
          onClick={() => handlePageChange("Home")}
        >
          <img src={logo} className="logo" alt="logo" />
        </a>
        <a
          className="btn third"
          src="#"
          href="#login"
          alt="alt tag"
          onClick={() => handlePageChange("Login")}
          style={{ display: isToken() ? "none" : "block" }}
        >
          Login
        </a>
        <Dropdown
          as={NavItem}
          style={{ display: isToken() ? "block" : "none" }}
        >
          <Dropdown.Toggle as={NavLink}>
            <img className="profileImg" alt="profile pic" src={avatar}></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <a
                src="#"
                href="#profile"
                alt="alt tag"
                onClick={() => handlePageChange("Profile")}
              >
                Profile
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a src="#logout" href="#" alt="alt tag" onClick={() => logMeOut()}>
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
            href="#game-guides"
            onClick={() => handlePageChange("GameGuide")}
            className={
              currentPage === "GameGuide" ? "nav-link active" : "nav-link"
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
