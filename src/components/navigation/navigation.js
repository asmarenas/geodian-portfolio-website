import React from "react";
import "./navigation.scss";

class Navigation extends React.Component {
  state = {
    active: false,
    class: null,
    btnBackground: "btn-background-dark"
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props !== prevProps) {
  //     this.setState({
  //       ...this.state,
  //       btnBackground:
  //         this.props.activePage !== 1 ? null : "btn-background-dark"
  //     });
  //   }
  // }

  isActive = value => {
    // adds class  if menu background is dark
    const isDarkBackground =
      this.props.activePage === 1 ? "dark-background" : null;

    // adds class if page is active
    const isPageActive =
      value === this.props.activePage ? "page--active" : null;

    return isDarkBackground + " " + isPageActive;
  };

  //opens menu drawer in mobile view
  handleClick = () => {
    this.setState({
      active: !this.state.active,
      class: this.state.active ? null : "navigation--active"
    });
  };

  render() {
    const { goToPage, btnBackground } = this.props;

    return (
      <nav className={`navigation ${this.state.class}`}>
        <div onClick={this.handleClick} className="menu-btn  ">
          <div className={`btn-line ${btnBackground}`} />
          <div className={`btn-line ${btnBackground}`} />
          <div className={`btn-line ${btnBackground}`} />
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
