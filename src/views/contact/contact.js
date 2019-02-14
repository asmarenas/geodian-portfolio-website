import React from "react";

import "./contact.scss";
import Hexagon from "../../components/hexagon/hexagon";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact-l-grid">
        <div className="contact-l-grid__column--1">
          <div className="contact-c-form">
            <h1>Contact</h1>
            <p>
              sit amet consectetur adipisicing elit. Facere, consectetur beatae
            </p>
            <form className="">
              <input
                type="text"
                className="contact-c-form__input"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="contact-c-form__input"
                id="name"
                placeholder="Your E-Mail"
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="contact-c-form__textarea"
                name="message"
                id="message"
              />
              <input
                type="submit"
                value="Send Message"
                className="contact-c-form__btn"
              />
            </form>
          </div>
        </div>

        <div className="contact-l-grid__column--2">
          <Hexagon
            className={"contact-c-hexagon--1"}
            imageUrl={"./bridge.jpg"}
          />
          <Hexagon
            className={"contact-c-hexagon--2"}
            imageUrl={"./bridge.jpg"}
          />
        </div>
      </section>
    );
  }
}

export default Contact;
//
