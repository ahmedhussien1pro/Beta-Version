import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./Context/MenuContext";
import { GlobalSearchProvider } from "./Context/GlobalSearchContext";
import WindowContext from "./Context/WindowContext";
import { loadGA } from "./gtag";
import LanguageHandler from "./Components/LanguageHandler";

if (process.env.NODE_ENV === "production") {
  loadGA();
}

loadGA();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalSearchProvider>
    <React.StrictMode>
      <WindowContext>
        <MenuContext>
          <Router>
            <LanguageHandler />
            <App />
          </Router>
        </MenuContext>
      </WindowContext>
    </React.StrictMode>
  </GlobalSearchProvider>
);
