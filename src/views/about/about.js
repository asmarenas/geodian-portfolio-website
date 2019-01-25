import React from "react";
import "./about.scss";
import building from "./building.jpg";
import Hexagon from "../../components/hexagon/hexagon";

const About = () => (
  <section className="about">
    <div className="about__content-container">
      <div className="about__content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          consectetur beatae non corporis error architecto assumenda quas
          dolorum quidem placeat vitae repellendus nisi amet harum obcaecati
          numquam voluptate dicta. Placeat!
        </p>
        <h2>My Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus
          optio sunt officia
        </p>
        <div className="about__skills">
          <h3>Web Design</h3> <span>90%</span>
        </div>
        <div className="skills__line--web" />

        <div className="about__skills">
          <h3>HTML / CSS</h3> <span>70%</span>
        </div>
        <div className="skills__line--html" />

        <div className="about__skills">
          <h3>Javascript</h3> <span>80%</span>
        </div>
        <div className="skills__line--java" />
      </div>
    </div>

    <div className="about__shapes-container">
      <div className="about__rectangle">
        <div className="about__rectangle-overlay" />
      </div>
      <Hexagon className={"about__hexagon"} image={building} />
    </div>
  </section>
);

export default About;
