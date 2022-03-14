import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './styles/Form.css';
import './styles/Login.css'
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
        let gameScore = localStorage.getItem("gameScore");
        if(gameScore) {
          let gamevalue = gameScore.split(":")[0];
          let score = gameScore.split(":")[1];
          fetch("http://localhost:3001/api/scores", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                score: score,
                gamevalue: gamevalue,
              }),
              headers: {
                "Content-Type": "application/json",
                authorization: token.token,
              },
          });
          localStorage.removeItem("gameScore");
          alert("Your score has been posted");
        }
        handlePageChange("Home");
      }
      else {
        alert("Enter correct Username/Password");
      }
    }

  // const handlePageChange = (page) => setCurrentPage(page);
  return (
    // <div className="login-wrapper">
    //   <h1>Please Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <p>Username</p>
    //       <input type="text" onChange={e => setUserName(e.target.value)} />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input type="password" onChange={e => setPassword(e.target.value)} />
    //     </label>
    //     <div>
    //       <button type="submit">Submit</button>
          
    //      <p>Not Registered? <a src="Signup"
    //       href="#signup"
    //       alt="alt tag"
    //       onClick={() => handlePageChange("Signup")}>Signup</a></p> 
         
    //     </div>
    //   </form>
    // </div>
    <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
              <h3>Log In</h3>
              <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Username" onChange={e => setUserName(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn third">Log In</button>
              <p className="forgot-password text-right">
                Not Registered? <a src="Signup"
                href="#signup"
                alt="alt tag"
                onClick={() => handlePageChange("Signup")}>Signup</a>
              </p>
          </form>
        </div>
    </div>
  );
}
