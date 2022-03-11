import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Login.css';
import Signup from "./Signup";
// import getToken 

async function loginUser(credentials) {
    return await fetch('http://localhost:3001/api/users/login', {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ handlePageChange }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    // const [currentPage, setCurrentPage] = useState("Login");
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      if(token.token !== undefined) {
        localStorage.setItem("token", token.token);
        handlePageChange("Home");
      }
      else {
        alert("Enter correct Username/Password");
      }
    }

  // const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
          
         <p>Not Registered? <a src="Signup"
          href="#signup"
          alt="alt tag"
          onClick={() => handlePageChange("Signup")}>Signup</a></p> 
         
        </div>
      </form>
    </div>
  );
}
