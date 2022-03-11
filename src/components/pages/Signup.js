import React, { useState } from 'react';
import './Form.css';

async function signUp(credentials) {
    return await fetch('https://powerful-badlands-74006.herokuapp.com/api/users/signup', {
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
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await signUp({
        username,
        email,
        password
      });
      if(token.token !== undefined) {
        localStorage.setItem("token", token.token);
        handlePageChange("Home");
      }
      
    }

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Username" onChange={e => setUserName(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered ? <a src="Login"
                href="#login"
                alt="alt tag"
                onClick={() => handlePageChange("Login")}>Login</a>
              </p>
          </form>
        </div>
    </div>
  );
};
