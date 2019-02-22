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
            <ul className="right ">
              <li>
                <form id="navbarsearch">
                  <div className="navfix">
                    <div id="navfix2">
                      <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon" for="search">
                          <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                      </div>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul className="left">
              <li>
                <a className="search-hide" href="#">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </li>

              <li>
                <a className="search-hide" href="#">
                  Back
                </a>
              </li>
              {/* <li>
                <a className="search-hide" href="#">
                  Link
                </a>
              </li>
              <li>
                <a className="search-hide" href="#">
                  Link
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
