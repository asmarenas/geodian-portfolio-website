import React from "react";
import "./link.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = ({ linksClass }) => (
  <div className="links">
    <a href="!#">
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "facebook-f"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "twitter"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "linkedin"]}
        size="lg"
      />
    </a>
    <a href="!#">
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "github"]}
        size="lg"
      />
    </a>
  </div>
);

export default Links;
