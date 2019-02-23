import React, { Component } from "react";
import "./Header.css";
import M from "materialize-css/dist/js/materialize.min.js";
import fuzzyFilterFactory from "react-fuzzy-filter";

const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory();

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <header>
        <nav className="navbar dark">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              {title}
            </a>
            <ul className="right hide-on-med-and-down">
              {/* <li>
                <a href="sass.html">
                  <i className="material-icons">search</i>
                </a>
              </li> */}

              <li>
                <a href="badges.html">
                  <i className="material-icons">view_module</i>
                </a>
              </li>
              <li>
                <a href="collapsible.html">
                  <i className="material-icons">refresh</i>
                </a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="material-icons">more_vert</i>
                </a>
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
