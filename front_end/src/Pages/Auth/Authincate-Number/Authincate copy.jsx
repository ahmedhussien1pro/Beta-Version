import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import Preloader from "../../Website/Preloader/Preloader";
import "./Auth.css";
export default function Authenticate() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cookie = Cookie();
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!/^\d{6}$/.test(number)) {
      setError("The number must be 6 digits.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://digitopia-project-backend.vercel.app/api/authenticate",
        {
          number,
        }
      );
      const token = response.data.token;
      cookie.set("CuberWeb", token);
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        console.error("Error Data:", error.response.data);
        setError(error.response.data.data);
      } else {
        console.error("Error:", error.message);
        setError("An unexpected error occurred.");
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="login-register-body">
      {loading && <Preloader loading={loading} />}
      <div className="container">
        <div className="rows hh-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1 className="textcenter">Authenticate</h1>
              <div className="formcontrol">
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={handleNumberChange}
                  placeholder="Enter 6-digit number"
                  required
                  maxLength="6"
                />
                <label htmlFor="number">6-Digit Number:</label>
              </div>
              <button type="submit" className="button-login-register">
                Submit
              </button>
              {error && <span className="error">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
