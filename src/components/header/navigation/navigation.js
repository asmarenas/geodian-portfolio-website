import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = ({ state, handleClick }) => {
  const { navLinkClass, activeClassOnMobile } = state;
  // console.log(props);
  return (
    <React.Fragment>
      <div className="navigation__top-bar" />

      <nav className={`navigation  ${navLinkClass} ${activeClassOnMobile}`}>
        {/* Hamburger */}
        <div className="btn" onClick={handleClick}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <ul className="navigation__ul">
          <li className="navigation__li">
            <NavLink
              exact
              className={`navigation__link ${navLinkClass}`}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="navigation__li">
            <NavLink
              className={`navigation__link ${navLinkClass}`}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>

          <li className="navigation__li">
            <NavLink className={`navigation__link ${navLinkClass}`} to="/about">
              About
            </NavLink>
          </li>

          <li className="navigation__li">
            <NavLink
              className={`navigation__link ${navLinkClass}`}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
