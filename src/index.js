import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToggleMenuContext from "./context/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToggleMenuContext>
      <App />
    </ToggleMenuContext>
  </React.StrictMode>
);
