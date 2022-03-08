import React from "react";

const styles = {
  ul: {
    border: "4px solid #2E294E",
    display: "flex",
    justifyContent: "center",
  },
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
      <ul style={styles.ul} className="navbar fixed-bottom nav">
        <li className="nav-item col-4">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Us
          </a>
        </li>
        <li className="nav-item col-4">
          <a
            href="#terms"
            onClick={() => handlePageChange("Terms")}
            className={currentPage === "Terms" ? "nav-link active" : "nav-link"}
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
  );
}

export default Footer;