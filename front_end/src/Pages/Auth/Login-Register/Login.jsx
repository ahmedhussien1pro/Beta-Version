import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookie from "cookie-universal";
import Preloader from "../../Website/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import "./login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const cookie = Cookie();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFocus(e) {
    setIsFocused({ ...isFocused, [e.target.name]: true });
  }

  function handleBlur(e) {
    if (e.target.value === "") {
      setIsFocused({ ...isFocused, [e.target.name]: false });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await axios.post(
        "https://digitopia-project-backend.vercel.app/api/login",
        form
      );
      setLoading(false);
      const token = res.data.data.token;
      cookie.set("CuberWeb", token);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data;

        if (status === 404 && message === "Not a user") {
          setErr("User does not exist");
        } else if (status === 401 && message === "Invalid name or password") {
          setErr("Wrong password");
        } else if (status === 401 && message === "User not verified") {
          setErr("Your account is not verified yet");
        } else {
          setErr("Something went wrong. Please try again.");
        }

        console.error(error.response.data);
      } else {
        setErr("Network Error");
        console.error(error);
      }
    }
  }

  return (
    <div className="login-body">
      {loading && <Preloader loading={loading} />}

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-group">
              <div className={`input-container ${isFocused.email || form.email ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="email">Email Address</label>
                <div className="input-highlight"></div>
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <div className={`input-container ${isFocused.password || form.password ? 'focused' : ''}`}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  minLength={6}
                />
                <label htmlFor="password">Password</label>
                <div className="input-highlight"></div>
              </div>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot your password?</a>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? <div className="button-loader"></div> : "Sign In"}
            </button>

            {err && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <span>{err}</span>
              </div>
            )}
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-button google">
              <i className="fab fa-google"></i> Google
            </button>
            <button type="button" className="social-button facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button type="button" className="social-button github">
              <i className="fab fa-github"></i> GitHub
            </button>
          </div>

          <div className="register-link">
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </div>

        {/* Decoration Side */}
        <div className="login-decoration">
          <div className="decoration-shape shape-1"></div>
          <div className="decoration-shape shape-2"></div>
          <div className="decoration-shape shape-3"></div>
          <div className="decoration-text">
            <h3>Welcome back to the CyberLabs</h3>
            <p>Let's Hack Some Labs</p>
          </div>
        </div>
      </div>
    </div>
  );
}