import React, { Component } from "react";
import "./Header.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchTitle from "./SearchTitle";
import "semantic-ui-css/semantic.min.css";
import _ from "lodash";
import faker from "faker";
import { allTodos } from "../reducers/selectors";

// const source = _.times(5, () => ({
//   title: faker.company.companyName()
//   // description: faker.company.catchPhrase(),
//   // image: faker.internet.avatar(),
//   // price: faker.finance.amount(0, 100, 2, "$")
// }));

class Header extends Component {
  componentDidMount() {}
  render() {
    const { title, todos } = this.props;
    let source;
    if (Object.keys(todos).length > 0) {
      source = allTodos({ todos });
    } else {
      source = {};
    }

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
                <div className="test">
                  <SearchTitle source={source} />
                </div>
              </li>
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
