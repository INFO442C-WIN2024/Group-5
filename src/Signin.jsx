import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import './signin_style.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
      navigate("/home");
    } catch (err) {
      console.error("Error signing in:", err.message);
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Welcome Back</h1>
        <p className="signin-subtitle">Sign in to continue</p>
        
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="signin-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="signin-input"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signin-button">
            Sign In
          </button>

          <p className="signup-link">
            Don't have an account?{" "}
            <a href="/signup" className="link">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;