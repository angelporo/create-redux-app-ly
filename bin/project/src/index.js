/**
 * entry file
 */
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app.js";
import registerServiceWorker from "./registerServiceWorker";

const node = document.getElementById("root");

if (!node) {
  throw new Error('The mount node "#root" does not exist');
}

ReactDOM.render(<App />, node);

registerServiceWorker();
