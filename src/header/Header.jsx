import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/images/logo.png";

const navLinks = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "cars",
    name: "Our Cars",
  },
  {
    path: "about",
    name: "About Us",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact Us",
  },
];

const Header = () => {
  return (
    <div className="header">
      {/* ---------------------top header content ---------------- */}
      <div className="top-header">
        <div className="top-header-content">
          <div>
            <p>Contact: </p>
            <p>
              <span className="material-symbols-outlined">call</span> 002-123-123
            </p>
            <p>
              <span className="material-symbols-outlined">mail</span>
              carental@email.com
            </p>
          </div>
          <div>
            <Link>Our locations</Link>
            <Link>Manage booking</Link>
          </div>
          <div>
            <Link>Sign in</Link>
            <Link>Register</Link>
          </div>
        </div>
      </div>
      {/* ---------------------middle header content ---------------- */}
      <div className="middle-header">
        <Link to="../home">
          <span>CAR RENTAL</span>
          <img src={logo} alt=""></img>
        </Link>
      </div>
      {/* ---------------------bottom header content ---------------- */}
      <div className="bottom-header">
        <div className="bottom-header-content">
          {navLinks.map((navLink, index) => (
            <NavLink
              to={`../${navLink.path}`}
              key={index}
              className={({isActive}) => (isActive ? "active" : "")}
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
