import React from "react";
import "./hero.scss";

const Hero = () => (
  <svg
    className="about__hero"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2474.998 2420.999"
  >
    <g id="Hero" transform="translate(-437 -768)">
      <path
        className="hero--big"
        d="M2718,2432,1657,1826.75V616.25L2718,11l1061,605.249V1423L3426,1624.5v403l.541.308Z"
        transform="translate(-1219.999 757)"
      />

      {/* picture */}
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
          x="1722"
          y="1367.697"
          width="799.998"
          height="900.606"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>

      <path
        fill="url(#pic)"
        d="M1040,137,687,338.5v403L1040,943l353-201.5v-403Z"
        transform="translate(1519 2043)"
      />

      <path
        className="hero__overlay"
        d="M1040,137,687,338.5v403L1040,943l353-201.5v-403Z"
        transform="translate(1519 2043)"
      />
    </g>
  </svg>
);

export default Hero;
