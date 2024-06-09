import React from 'react';
import './App.css'; // Import a CSS file to handle styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
//import path from 'path';

function App() {
  return (
    < Route path='' components = {} ></Route>
    <div
      className="container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/backimg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Ensures text is visible over the image
        textAlign: 'center',
      }}
    >
      <div className="login-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/image_4.png`} alt="Digitalflake Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <p style={{ color: 'black' }}>Welcome to Digitalflake admin</p>
        <div className="form-group">
          <label htmlFor="email">Email-id</label>
          <input type="email" id="email" placeholder="Email-id" style={{ margin: '10px 0' }} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" style={{ margin: '10px 0' }} />
          <span className="forgot-password" style={{ display: 'block', marginTop: '10px' }}>Forgot Password?</span>
        </div>
        <button className="btn" style={{ marginTop: '20px', padding: '10px 20px' }}>Log In</button>
      </div>
    </div>
  );
}

export default App;
