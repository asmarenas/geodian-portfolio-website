import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./styles/index.scss";

import Navigation from "./components/navigation/navigation";
import Links from "./components/links/links";
import Pagination from "./components/pagination/pagination";
import Logo from "./components/logo/logo";
import Home from "./views/home/home";
import Portfolio from "./views/portfolio/portfolio";
import About from "./views/about/about";
import Contact from "./views/contact/contact";

library.add(faCaretRight, faFacebookF, faTwitter, faLinkedin, faGithub);

class App extends Component {
  state = {
    activePage: 1
  };

  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber);
  };

  pageOnChange = activePage => {
    this.setState({ activePage: activePage });
  };

  render() {
    return (
      <React.Fragment>
        <Logo />
        <Navigation
          goToPage={this.goToPage}
          activePage={this.state.activePage}
        />
        <Links />
        <Pagination
          activePage={this.state.activePage}
          goToPage={this.goToPage}
        />

        <ReactPageScroller
          ref={c => (this.reactPageScroller = c)}
          pageOnChange={this.pageOnChange}
          animationTimer={700}
          goToPage={this.goToPage}
        >
          <Home goToPage={this.goToPage} />
          <Portfolio />
          <About />
          <Contact />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default App;
