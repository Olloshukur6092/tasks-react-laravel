import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          ONESEC
        </a>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
