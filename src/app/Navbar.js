"use client";
import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { routes } from "./routes";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="logo">
          <img src="/images/Avatar.png" alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          {routes.map(({ href, title }) => {
            return (
              <li key={href}>
              <Link to={href} smooth={500} duration={500}>
              <div className="nav-link-item">
                {title}
              </div>
              </Link>
            </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
