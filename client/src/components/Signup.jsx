import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password, name });
      if (response.data.success) {
        navigate('/login'); 
      } else {
        console.log(response.data.message);
      }
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
      <div className="signup-form" style={{ backgroundColor: '#fff', padding: '5%', borderRadius: '10px' }}>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/image_4.png`} alt="Digitalflake Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <p style={{ color: 'black' }}>Welcome to Digitalflake admin</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" style={{ margin: '10px 0' }} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email-id</label>
            <input type="email" id="email" placeholder="Email-id" style={{ margin: '10px 0' }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" style={{ margin: '10px 0' }} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', padding: '10px 20px' }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
