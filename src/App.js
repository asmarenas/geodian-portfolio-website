import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./styles/index.scss";

import Header from "./components/header/header";
import Home from "./views/home/home";
import Portfolio from "./views/portfolio/portfolio";
import About from "./views/about/about";
import Contact from "./views/contact/contact";

library.add(faCaretRight, faFacebookF, faTwitter, faLinkedin, faGithub);

class App extends Component {
  // state = {
  //   activePage: 1
  // };

  // setActivePage = page => {
  //   this.setState({ ...this.statye, activePage: page });
  // };
  // pageOnChange = activePage => {
  //   if (activePage === 1) {
  //     this.setState({
  //       activePage: activePage,
  //       btnBackground: "btn-background-dark",
  //       logoBackground: "logo-background-dark"
  //     });
  //   } else {
  //     this.setState({
  //       activePage: activePage,
  //       btnBackground: null,
  //       logoBackground: nul
  //     });
  //   }
  // };

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Header />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
