import React from "react";
import "./singleProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleProject = () => (
  <section className="l-single-project">
    <div className="l-single-project-container">
      <main className="l-single-project__column--1">
        <div className="c-single-project">
          <h1 className="c-single-project__title">My First Project for You</h1>
          <p className="c-single-project__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            assumenda ea beatae repellendus temporibus facere alias cum fugit
            labore! Labore, quasi sit cupiditate voluptates nostrum illum dolore
            fugit iure nemo et libero nam! Nihil saepe error ad maxime dicta
            soluta expedita aut Asperiores expedita repellendus nihil assumenda
            nobis atque
          </p>
          <p className="c-single-project__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="c-single-project__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="c-single-project__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
        </div>
        <div className="c-single-project-images">
          <img
            src={require("./img/main-top.jpg")}
            alt=""
            className="c-single-project-images__img--top"
          />
          <img
            src={require("./img/main-bottom.jpg")}
            alt=""
            className="c-single-project-images__img--bottom"
          />
        </div>
      </main>

      <aside className="l-single-project__column--2">
        <div className="c-single-project__info">
          <h2 className="c-single-project__title">Project Details </h2>

          <div className="c-single-project__text-container">
            <p className="c-single-project__text--left">Date</p>
            <p className="c-single-project__text--right">January, 2, 2017</p>
          </div>

          <div className="c-single-project__text-container">
            <p className="c-single-project__text--left">Category</p>
            <p className="c-single-project__text--right">Web Design</p>
          </div>

          <div className="c-single-project__text-container">
            <p className="c-single-project__text--left" />
            <p className="c-single-project__text--right">Graphic Design</p>
          </div>

          <div className="c-single-project__text-container">
            <p className="c-single-project__text--left" />
            <p className="c-single-project__text--right">Consultance</p>
          </div>

          <div className="c-single-project__text-container">
            <p className="c-single-project__text--left">Client</p>
            <p className="c-single-project__text--right">Rocian Studio</p>
          </div>

          <h2 className="c-single-project__links-title">Share This Project</h2>
          <div className="c-single-project__links-container">
            <a
              href="https://www.facebook.com/error-no-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="project-c-info__link"
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
                className="project-c-info__link"
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
                className="project-c-info__link"
                icon={["fab", "linkedin"]}
                size="lg"
              />
            </a>
          </div>
        </div>
        <div className="c-single-project__img-container">
          <img
            src={require("./img/aside.jpg")}
            alt=""
            className="project-c-info__img"
          />
        </div>
      </aside>
      <div className="l-single-project__column--3">
        <Link className="c-single-project__link" to="/portfolio">
          <FontAwesomeIcon
            className="c-single-project__icon"
            icon="caret-left"
            size="lg"
          />
          Back to portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default SingleProject;
