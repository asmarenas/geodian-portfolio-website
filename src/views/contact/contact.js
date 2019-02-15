import React from "react";

import "./contact.scss";
import Hexagon from "../../components/hexagon/hexagon";

class Contact extends React.Component {
  render() {
    return (
      <section className="l-contact">
        <div className="l-contact__column--1">
          <div className="c-contact-form">
            <h1>Contact</h1>
            <p>
              sit amet consectetur adipisicing elit. Facere, consectetur beatae
            </p>
            <form className="">
              <input
                type="text"
                className="c-contact-form__input"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="c-contact-form__input"
                id="name"
                placeholder="Your E-Mail"
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="c-contact-form__textarea"
                name="message"
                id="message"
              />
              <input
                type="submit"
                value="Send Message"
                className="c-contact-form__btn"
              />
            </form>
          </div>
        </div>

        <div className="l-contact__column--2">
          <Hexagon
            className={"c-contact-hexagon--1"}
            imageUrl={"./bridge.jpg"}
          />
          <Hexagon
            className={"c-contact-hexagon--2"}
            imageUrl={"./bridge.jpg"}
          />
        </div>
      </section>
    );
  }
}

export default Contact;
