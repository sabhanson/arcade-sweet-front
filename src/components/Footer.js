import React from "react";
import "../components/pages/styles/Footer.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="footerContainer">
      <footer>
        <ul className="footerItems navbar nav">
          <li className="nav-item col-4">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Us
            </a>
          </li>
          <li className="nav-item col-4">
            <a
              href="#terms"
              onClick={() => handlePageChange("Terms")}
              className={
                currentPage === "Terms" ? "nav-link active" : "nav-link"
              }
            >
              Terms of Use
            </a>
          </li>
          <li className="nav-item col-4">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
