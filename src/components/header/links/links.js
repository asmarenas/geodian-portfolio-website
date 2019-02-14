import React from "react";
import "./link.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = ({ linksClass }) => (
  <div className="links">
    <a
      href="https://www.facebook.com/error-no-page"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "facebook-f"]}
        size="lg"
      />
    </a>
    <a
      href="https://twitter.com/error-no-page"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "twitter"]}
        size="lg"
      />
    </a>
    <a
      href="https://www.linkedin.com/error-no-page"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "linkedin"]}
        size="lg"
      />
    </a>
    <a
      href="https://github.com/error-no-page"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={`links__icon ${linksClass}`}
        icon={["fab", "github"]}
        size="lg"
      />
    </a>
  </div>
);

export default Links;
