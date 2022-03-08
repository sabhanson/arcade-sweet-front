import React, { useState } from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Header;
