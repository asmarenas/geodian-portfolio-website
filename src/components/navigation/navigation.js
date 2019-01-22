import React from "react";
import "./navigation.scss";

const Navigation = ({ goToPage, activePage }) => {
  // adds class to currently active page
  const isActive = value => {
    return value === activePage ? "navigation--active" : null;
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a
            href="!#"
            className={isActive(1)}
            onClick={() => {
              goToPage(0);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="!#"
            className={isActive(2)}
            onClick={() => {
              goToPage(1);
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="!#"
            className={isActive(3)}
            onClick={() => {
              goToPage(2);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="!#"
            className={isActive(4)}
            onClick={() => {
              goToPage(3);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
