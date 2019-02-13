import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = ({ state, handleClick }) => {
  const { navLinkClass, activeClassOnMobile, activeClassButton } = state;

  return (
    <React.Fragment>
      <div className="c-navigation__top-bar" />

      <nav className={`c-navigation  ${navLinkClass} ${activeClassOnMobile}`}>
        <div
          className={`c-hamburger-btn ${activeClassButton} `}
          onClick={handleClick}
        >
          <div className="c-hamburger-btn__line" />
          <div className="c-hamburger-btn__line" />
          <div className="c-hamburger-btn__line" />
        </div>

        <ul className="c-navigation__ul">
          <li className="c-navigation__li">
            <NavLink
              exact
              className={`c-navigation__link ${navLinkClass}`}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="c-navigation__li">
            <NavLink
              className={`c-navigation__link ${navLinkClass}`}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>

          <li className="c-navigation__li">
            <NavLink
              className={`c-navigation__link ${navLinkClass}`}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className="c-navigation__li">
            <NavLink
              className={`c-navigation__link ${navLinkClass}`}
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
