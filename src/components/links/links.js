import React from "react";
import "./link.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => (
  <div className="links">
    <a href="!#">
      <FontAwesomeIcon
        className="links__icon"
        icon={["fab", "facebook-f"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className="links__icon"
        icon={["fab", "twitter"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className="links__icon"
        icon={["fab", "linkedin"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className="links__icon"
        icon={["fab", "github"]}
        size="lg"
      />
    </a>
  </div>
);

export default Links;
