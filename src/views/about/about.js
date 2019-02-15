import React from "react";
import "./about.scss";
import Hexagon from "../../components/hexagon/hexagon";

const About = () => (
  <section className="l-about">
    <div className="l-about__column--1">
      <div className="c-about-content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          consectetur beatae non corporis error architecto assumenda quas
          dolorum quidem placeat vitae repellendus nisi amet harum obcaecati
        </p>
        <h2>My Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus
          optio sunt officia
        </p>
        <div className="c-about-content__skills-graph">
          <div className="c-about-content__skill-container">
            <h3>Web Design</h3> <span>90%</span>
          </div>
          <div className="c-about-content__color-line--web" />

          <div className="c-about-content__skill-container">
            <h3>HTML / CSS</h3> <span>70%</span>
          </div>
          <div className="c-about-content__color-line--html" />

          <div className="c-about-content__skill-container">
            <h3>Javascript</h3> <span>80%</span>
          </div>
          <div className="c-about-content__color-line--java" />
        </div>
      </div>
    </div>

    <div className="l-about__column--2">
      <div className="c-about__rectangle">
        <div className="c-about__rectangle-overlay" />
      </div>
      <Hexagon className={"c-about__hexagon"} imageUrl={"./bridge.jpg"} />
    </div>
  </section>
);

export default About;
