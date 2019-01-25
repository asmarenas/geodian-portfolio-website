import React from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./hero/hero";

const Home = ({ goToPage }) => (
  <section className="home">
    <div className="home__overlay">
      <div className="home__header">
        <h1>Hello I'm Rocian Oscar</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          officia praesentium saepe minima sapiente voluptas ad neque tempora
        </p>

        <a
          href="!#"
          onClick={() => {
            goToPage(3);
          }}
        >
          Contact Me <FontAwesomeIcon icon="caret-right" size="sm" />
        </a>
      </div>
      <Hero />
    </div>
  </section>
);

export default Home;
