import React, { useState } from "react";
import "./styles/Form.css";
import "./styles/Signup.css";

async function signUp(credentials) {
  return await fetch("http://localhost:3001/api/users/signup", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signup({ handlePageChange }) {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signUp({
      username,
      email,
      password,
    });
    if (token.token !== undefined) {
      localStorage.setItem("token", token.token);
      let gameScore = localStorage.getItem("gameScore");
      if (gameScore) {
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
  };

  return (
    <div className="row h-75">
      <div className="auth-wrapper">
        <div className="auth-inner col-10 col-lg-6">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn third">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered ?{" "}
              <a
                src="Login"
                href="#login"
                alt="alt tag"
                onClick={() => handlePageChange("Login")}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
