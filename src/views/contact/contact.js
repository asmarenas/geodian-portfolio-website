import React from "react";

import "./contact.scss";
import Hexagon from "../../components/hexagon/hexagon";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="contact__form-grid">
          <div className="contact__form-container">
            <h1>Contact</h1>
            <p>
              sit amet consectetur adipisicing elit. Facere, consectetur beatae
            </p>
            <form className="">
              <input
                type="text"
                className="contact__input"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="contact__input"
                id="name"
                placeholder="Your E-Mail"
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="contact__textarea"
                name="message"
                id="message"
              />
              <input
                type="submit"
                value="Send Message"
                className="contact__btn"
              />
            </form>
          </div>
        </div>

        <div className="contact__shapes-grid">
          <Hexagon className={"contact__hexagon-1"} />
          <Hexagon className={"contact__hexagon-2"} />
        </div>
      </section>
    );
  }
}

export default Contact;
//
