import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = ({ navLinkClass }) => (
  <nav className={`navigation ${navLinkClass}`}>
    <ul>
      <li>
        <NavLink exact className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className={navLinkClass} to="/portfolio">
          Portfolio
        </NavLink>
      </li>

      <li>
        <NavLink className={navLinkClass} to="/about">
          About
        </NavLink>
      </li>

      <li>
        <NavLink className={navLinkClass} to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
