import React from "react";

const Hexagon = ({ className, imageUrl }) => {
  const svg = (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 174 200"
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
            xlinkHref={require(`${imageUrl}`)}
          />
        </pattern>
      </defs>

      <path
        fill="url(#pic)"
        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
      />
      <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" />
    </svg>
  );

  return svg;
};
export default Hexagon;
