import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./hero/hero";

const Home = ({ goToPage }) => (
  <section className="l-home">
    <div className="l-home__overlay">
      <div className="l-home__container">
        <div className="c-home__header">
          <h1>Hello I'm Rocian Oscar</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            officia praesentium saepe minima sapiente voluptas ad neque tempora
          </p>
          <Link className="c-home__link" to="/contact">
            Contact Me <FontAwesomeIcon icon="caret-right" size="sm" />
          </Link>
        </div>
      </div>
    </div>
    <Hero />
  </section>
);

export default Home;
