import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToggleMenuContext from "./context/MenuContext";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToggleMenuContext>
        <App />
      </ToggleMenuContext>
    </Router>
  </React.StrictMode>
);
