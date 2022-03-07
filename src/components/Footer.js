import React from "react";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="navbar fixed-bottom nav">
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Us
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#terms"
            onClick={() => handlePageChange("Terms")}
            className={currentPage === "Terms" ? "nav-link active" : "nav-link"}
          >
            Terms of Use
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#contact6"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
