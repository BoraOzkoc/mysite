"use client"
import React from "react";
import "./Navbar.css";
import { Link }  from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="logo">
          Bora Özkoç
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            {/* <Link href="#about">About Me</Link> */}
            <Link to="about" smooth = {500} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <a href="/products">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
