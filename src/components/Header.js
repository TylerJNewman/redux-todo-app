import React, { Component } from "react";

class Header extends Component {
  // Here you can define your PropTypes.

  render() {
    const { title } = this.props;

    return (
      <header>
        <nav className="navbar dark">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              {title}
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
