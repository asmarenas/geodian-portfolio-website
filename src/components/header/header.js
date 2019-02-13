import React from "react";
import Navigation from "./navigation/navigation";
import Logo from "./logo/logo";
import Links from "./links/links";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  state = {
    navLinkClass: "on-dark-background",
    logoClass: "on-dark-background",
    linksClass: null,
    activeClassOnMobile: null,
    activeClassButton: null
  };
  // if Navigation or,Logo or, Links is on light background, then changes it color to dark
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.location.pathname !== "/") {
        this.setState({
          ...this.state,
          navLinkClass: null,
          logoClass: null,
          activeClassOnMobile: null,
          activeClassButton: null
        });
      } else {
        this.setState({
          ...this.state,
          navLinkClass: "on-dark-background",
          logoClass: "on-dark-background",
          activeClassOnMobile: null,
          activeClassButton: null
        });
      }
    }
  }

  // Toggle function for mobile-nav
  handleClick = () => {
    this.setState({
      ...this.state,
      activeClassOnMobile: this.state.activeClassOnMobile
        ? null
        : "js-navigation--open",
      activeClassButton: this.state.activeClassButton
        ? null
        : "js-hamburger-btn--transformed"
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navigation state={this.state} handleClick={this.handleClick} />
        <Logo logoClass={this.state.logoClass} />
        <Links linksClass={this.state.linksClass} />
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
