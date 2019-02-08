import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./hero/hero";

const Home = ({ goToPage }) => (
  <section className="home">
    <div className="home__overlay">
      <div className="home__container">
        <div className="home__header">
          <h1>Hello I'm Rocian Oscar</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            officia praesentium saepe minima sapiente voluptas ad neque tempora
          </p>

          <Link className="home__link" to="/contact">
            Contact Me <FontAwesomeIcon icon="caret-right" size="sm" />
          </Link>
        </div>
      </div>
    </div>
    <Hero />
  </section>
);

export default Home;
