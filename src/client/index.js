import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
console.log("map key", process.env.REACT_APP_MAP_KEY)

ReactDOM.render(<App />, document.getElementById("root"));
