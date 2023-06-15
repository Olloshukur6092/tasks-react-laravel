import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          ONESEC
        </Link>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'add-category'} className="nav-link">
              Add Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'add-exercise'} className="nav-link">
              Add Exercise
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
