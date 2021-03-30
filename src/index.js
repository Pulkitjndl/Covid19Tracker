import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const routing  = (
   <HashRouter>
   
      <App />
 
  </HashRouter>
);

ReactDOM.render(
 routing,
  document.getElementById("root")
);
