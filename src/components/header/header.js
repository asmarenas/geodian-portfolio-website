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
  //  When the Navigation/Logo/Links is s on light background, It'll switch to a black color
  //  Every time when you'll click a link to another page, mobile navigation's drawer will colapse
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.location.pathname === "/contact") {
        this.setState({
          navLinkClass: null,
          logoClass: null,
          linksClass: "js-link-is-on-dark-bacground",
          activeClassOnMobile: null,
          activeClassButton: null
        });
      } else if (this.props.location.pathname !== "/") {
        console.log(this.props.location.pathname);
        this.setState({
          navLinkClass: null,
          logoClass: null,
          linksClass: null,
          activeClassOnMobile: null,
          activeClassButton: null
        });
      } else {
        this.setState({
          navLinkClass: "on-dark-background",
          logoClass: "on-dark-background",
          linksClass: null,
          activeClassOnMobile: null,
          activeClassButton: null
        });
      }
    }
  }

  // Toggle function for a mobile-navigation drawer

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
