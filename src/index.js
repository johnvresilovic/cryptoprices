// import React from 'react';
// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// //IMPORT BrowserRouter and rename it to Router
// import { BrowserRouter as Router } from "react-router-dom";

// //Wrap the App Component with the Router component to enable the router features
// ReactDOM.render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);