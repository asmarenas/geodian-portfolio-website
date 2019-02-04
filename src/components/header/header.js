import React from "react";
import Navigation from "./navigation/navigation";
import Logo from "./logo/logo";
import Links from "./links/links";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  state = {
    navLinkClass: "on-dark-background",
    logoClass: "on-dark-background",
    linksClass: null
  };
  // if Navigation or,Logo or, Links is on light background, then changes it color to dark
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.location.pathname !== "/") {
        this.setState({
          ...this.state,
          navLinkClass: null,
          logoClass: null
        });
      } else {
        this.setState({
          ...this.state,
          navLinkClass: "on-dark-background",
          logoClass: "on-dark-background"
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navigation navLinkClass={this.state.navLinkClass} />
        <Logo logoClass={this.state.logoClass} />
        <Links linksClass={this.state.linksClass} />
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
