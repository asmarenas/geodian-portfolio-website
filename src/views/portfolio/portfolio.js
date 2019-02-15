import React from "react";
import "./portfolio.scss";
import Project from "./projects/project";
import projects from "./projects/projectsList";

const Portfolio = () => {
  return (
    <section className="l-portfolio">
      <div className="l-portfolio__container">
        <div className="l-portfolio__column l-portfolio__column--left">
          <Project projects={projects.left_column} />
        </div>
        <div className="l-portfolio__column  l-portfolio__column--right">
          <Project projects={projects.right_column} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
