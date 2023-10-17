import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const footerLinksOne = [
  {
    path: "",
    name: "Terms and conditions",
  },
  {
    path: "",
    name: "FAQ",
  },
  {
    path: "",
    name: "Rental points",
  },
  {
    path: "",
    name: "Promotions",
  },
  {
    path: "",
    name: "Fleet",
  },
];

const footerLinksTwo = [
  {
    path: "",
    name: "About Us",
  },
  {
    path: "",
    name: "Contact",
  },
  {
    path: "",
    name: "Privacy Policy",
  },
  {
    path: "",
    name: "Obligation information",
  },
  {
    path: "",
    name: "RODO",
  },
];

const footerLinksThree = [
  {
    path: "",
    name: "Book a car",
  },
  {
    path: "",
    name: "Long term rental",
  },
  {
    path: "",
    name: "Rental with insurance",
  },
  {
    path: "",
    name: "Offer for companies",
  },
  {
    path: "",
    name: "Carsharing",
  },
];

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-content">
      <div className="footer-left-content">
        <Link to="../home" onClick={() => window.scrollTo(0,0)}>
          <span>CAR RENTAL</span>
          <img src={logo} alt=""></img>
        </Link>
      </div>
      <div className="footer-center-content">
        <div className="footer-links-one">
          {footerLinksOne.map((link, index) => (
            <NavLink to={`../${link.path}`} key={index}>
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="footer-links-two">
          {footerLinksTwo.map((link, index) => (
            <NavLink to={`../${link.path}`} key={index}>
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="footer-links-three">
          {footerLinksThree.map((link, index) => (
            <NavLink to={`../${link.path}`} key={index}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="footer-right-content">
        <p>Contact: </p>
        <p>
          <span className="material-symbols-outlined">call</span> 002-123-123
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span>
          carental@email.com
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
