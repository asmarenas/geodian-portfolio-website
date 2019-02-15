import React from "react";
import "./project.scss";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
  const project = projects.map(
    ({ id, project_class_name, url, title, text, link }) => (
      <Link key={id} to={link}>
        <figure className={`c-project ${project_class_name}`}>
          <div className="c-project-img">
            <img
              className="c-project-img__image"
              src={require(`${url}`)}
              alt=""
            />
            <div className="c-project-img__overlay">
              <p className="c-project-img__text">View Project</p>
            </div>
          </div>

          <figcaption className="c-project__content-container">
            <h3 className="c-project__title">{title}</h3>
            <p className="c-project__content">{text}</p>
          </figcaption>
        </figure>
      </Link>
    )
  );

  return <React.Fragment>{project}</React.Fragment>;
};

export default Project;
