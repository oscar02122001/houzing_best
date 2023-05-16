import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import Context from "./context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
