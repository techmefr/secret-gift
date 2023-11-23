import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ snowflakeCount: 50 }}>
      <Snowfall />
      <App />
    </div>
  </React.StrictMode>,
  document.querySelector("#app")
);
