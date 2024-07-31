import React from "react";
import logo from "./logo.png";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

function Portfolio() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar navbar-expand bg-dark ">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" height={30} />
        </a>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
