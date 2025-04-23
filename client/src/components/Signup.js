// Signup.js
import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="signup-container">
      <div className="head"> 
        <img src="./images/logo.png" alt="Bluestock Logo" className="logo-img" />
        <h1 className="brand-name">BLUESTOCK</h1>
      </div>
      <h2 className="create-account">Create an account</h2>

      <form className="signup-form">
        <label>Name</label>
        <input type="text" placeholder="Shrutika Shinde" />

        <label>Email Address</label>
        <input type="email" placeholder="hello@bluestock.in" />

        <label>Password</label>
        <div className="password-wrapper">
          <input type="password" placeholder="••••••••••••" />
          <span className="eye-icon">👁️</span>
        </div>

        <p className="terms">
          By continuing, you agree to our <a href="#">terms of service</a>.
        </p>

        <div className="captcha">
          <input type="checkbox" />
          <label>I'm not a robot</label>
          <div className="recaptcha-box">reCAPTCHA</div>
        </div>

        <button className="signup-btn">Sign up</button>

        <div className="divider">or sign up with</div>

        <button className="google-btn">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Continue with Google
        </button>

        
        <Link className="signin-link" to="/signin">
  Sign in here
</Link>
    
      </form>
    </div>
  );
}

export default Signup;
