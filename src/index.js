import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToggleThemeContext from "./context/MenuContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToggleThemeContext>
        <App />
      </ToggleThemeContext>
    </Router>
  </React.StrictMode>
);
