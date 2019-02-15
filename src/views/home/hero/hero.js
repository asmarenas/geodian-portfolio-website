import React from "react";
import "./hero.scss";

const Hero = () => (
  <svg
    className="c-about-svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2548.998 2420.999"
  >
    <defs>
      <pattern
        id="pic"
        height="100%"
        width="100%"
        patternContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          height="1"
          width="1"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref={require("./man-pic.jpg")}
        />
      </pattern>

      <filter
        id="Color_Overlay"
        x="1695"
        y="1340.697"
        width="853.998"
        height="954.606"
        filterUnits="userSpaceOnUse"
      >
        <feOffset input="SourceAlpha" />
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feFlood floodColor="#ffe32e" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>

    <g className="c-about-svg__hexagon--big" transform="translate(-437 -768)">
      <path
        d="M2718,2432,1657,1826.75V616.25L2718,11l1061,605.249V1423L3426,1624.5v403l.541.308Z"
        transform="translate(-1219.999 757)"
      />

      <g transform="matrix(1, 0, 0, 1, 437, 767)" filter="url(#Color_Overlay)">
        <path
          fill="url(#pic)"
          d="M1040,137,687,338.5v403L1040,943l353-201.5v-403Z"
          transform="translate(1082 1275)"
        />
        <path
          className="c-about-svg__hexagon--center"
          d="M1040,137,687,338.5v403L1040,943l353-201.5v-403Z"
          transform="translate(1082 1275)"
        />
      </g>
    </g>
  </svg>
);

export default Hero;
