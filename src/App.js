import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
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
import SingleProject from "./views/portfolio/projects/singleProject/singleProject";
import About from "./views/about/about";
import Contact from "./views/contact/contact";

library.add(
  faCaretRight,
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub,
  faCaretLeft
);

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="container__main">
              <Header />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={600}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route
                      path="/project/myfavorite"
                      component={SingleProject}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
