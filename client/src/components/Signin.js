import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { FcGoogle } from 'react-icons/fc';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  // React Router navigate hook
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: perform your auth logic (e.g. call API)
    // On success, redirect:
    navigate('/dashboard');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
      <div className='head'> 
      <img src="./images/logo.png" alt="Bluestock Logo" className="logo-img" />
        <h1>BLUESTOCK</h1>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            required
          />

          <label>
            Password <a href="#" className="forgot">Forgot Password?</a>
          </label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(v => !v)}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="captcha">
            <input type="checkbox" id="robot" />
            <label htmlFor="robot">I’m not a robot</label>
            <div className="recaptcha">reCAPTCHA</div>
          </div>

          <div className="keep-signed">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={e => setKeepSignedIn(e.target.checked)}
            />
            <label>Keep me signed in</label>
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>

        <div className="divider">or sign in with</div>
        <button className="btn-google">
          <FcGoogle size={20} /> Continue with Google
        </button>

        <div className="create-account">
        <Link className="signin-link" to="/signup"> create an account </Link>
        </div>
      </div>
    </div>
  );
}
