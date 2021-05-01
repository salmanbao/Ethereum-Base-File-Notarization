import React, { Component, useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { Link as RouterDomLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const navigationSection1 = [
  { title: "HOME", path: "home" },
  { title: "GALLERY", path: "gallery" },

  { title: "FEATURES", path: "features" },
  { title: "FAQ", path: "faq" },
];

const navigationSection2 = [
  { title: "PRICING", path: "pricing" },

  { title: "CONTACT", path: "contact" },
  { title: "LOGIN", path: "login" },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navigate = () => {
    history.push("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light rounded"
      aria-label="Twelfth navbar example"
    >
      <div className="container-fluid container">
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/#">
          <img src={logo} alt width={60} height={60} alt="img1" />
        </a>
        <div
          className={
            (showNav ? "show" : "") +
            "collapse navbar-collapse justify-content-md-end"
          }
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            {navigationSection1.map((item, index) => {
              return <NavLink key={index} {...item} />;
            })}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active" style={{ cursor: "pointer" }}>
              <a className="nav-link" href="/login">
                DASHBOARD
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {navigationSection2.map((item, index) => {
              return <NavLink key={index} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
