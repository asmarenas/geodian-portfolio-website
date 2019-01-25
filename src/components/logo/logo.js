import React from "react";
import "./logo.scss";

const Logo = () => {
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 185.199"
    >
      <g id="logo" transform="translate(-584 -509)">
        <path
          d="M64.484,147.2,0,110.4V36.8L64.484,0l63.541,36.262L64,72.8v73.6l.942.538-.458.261Z"
          transform="translate(584 509)"
        />
        <path
          d="M1139.485-811,1075-774.2v73.6l64.484,36.8,64.484-36.8v-73.6Z"
          transform="translate(-424 1358)"
        />
        <text
          transform="translate(814 634)"
          fontSize="100"
          fontWeight="700"
          letterSpacing="0.064em"
        >
          <tspan x="0" y="0">
            GEODIAN
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
