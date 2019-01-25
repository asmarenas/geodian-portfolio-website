import React from "react";
import "./navigation.scss";

class Navigation extends React.Component {
  state = {
    active: false,
    class: null
  };

  // adds class to currently active page
  isActive = value => {
    return value === this.props.activePage ? "page--active" : null;
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active,
      class: this.state.active ? null : "navigation--active"
    });
  };

  render() {
    const { goToPage } = this.props;

    return (
      <nav className={`navigation ${this.state.class}`}>
        <div onClick={this.handleClick} className="menu-btn  ">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <ul>
          <li>
            <a
              href="!#"
              className={this.isActive(1)}
              onClick={() => {
                goToPage(0);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="!#"
              className={this.isActive(2)}
              onClick={() => {
                goToPage(1);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="!#"
              className={this.isActive(3)}
              onClick={() => {
                goToPage(2);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="!#"
              className={this.isActive(4)}
              onClick={() => {
                goToPage(3);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
