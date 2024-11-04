import React from "react";
import "./Navbar.css";
import Link from "next/link";
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
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/products">Project</a>
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
