import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home'); 
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/backimg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div className="login-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/image_4.png`} alt="Digitalflake Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <p style={{ color: 'black' }}>Welcome to Digitalflake admin</p>
        <form  onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email-id</label>
            <input type="email" id="email" placeholder="Email-id" style={{ margin: '10px 0' }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" style={{ margin: '10px 0' }} value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* <span className="signup" style={{ display: 'block', marginTop: '10px' }}>New User, Sign Up?</span> */}
            <Link to="/signup" className="signup" style={{ display: 'block', marginTop: '10px', color: 'blue' }}>Sign Up?</Link>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', padding: '10px 20px' }}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
