import React from "react";
import "./portfolio.scss";
import Project from "./projects/project";
import projects from "./projects/projectsList";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__container--secondary secondary-1">
          <Project projects={projects.left_column} />{" "}
        </div>
        <div className="portfolio__container--secondary secondary-2">
          <Project projects={projects.right_column} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
