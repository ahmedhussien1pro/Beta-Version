import React from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Logout() {
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const res = await axios.get(
        "https://digitopia-project-backend.vercel.app/api/logout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      cookie.remove("CuberWeb");
      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <button className="button button-primary" onClick={handleLogout}>
      Logout
    </button>
  );
}
