import React from "react";
import "./project.scss";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
  const project = projects.map(
    ({ id, figure_class, url, title, text, link }) => (
      <Link key={id} to={link}>
        <figure className={`figure ${figure_class}`}>
          <div className="img__container">
            <img className="figure__img" src={require(`${url}`)} alt="" />
            <div className="img__overlay">
              <p className="img__text">View Project</p>
            </div>
          </div>

          <figcaption className="figure__caption">
            <h3 className="figure__title">{title}</h3>
            <p className="figure__content">{text}</p>
          </figcaption>
        </figure>
      </Link>
    )
  );

  return <React.Fragment>{project}</React.Fragment>;
};

export default Project;
