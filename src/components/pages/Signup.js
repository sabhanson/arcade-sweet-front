import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Signup.css';

async function signUp(credentials) {
    return await fetch('http://localhost:3001/api/users/signup', {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Signup({ handlePageChange }) {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate(); 
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await signUp({
        username,
        email,
        password
      });
      if(token.token !== undefined) {
        localStorage.setItem("token", token.token);
        // setCurrentPage("Home")
      }
      
    }

  return (
    <div className="signup-wrapper">
      <h1>Please Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
