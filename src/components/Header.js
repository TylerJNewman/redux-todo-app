import React, { Component } from "react";
import "./Header.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { todos } = this.props;

    let title = Object.keys(todos).map(id => todos[id].title);
    let body = Object.keys(todos).map(id => todos[id].body);
    let searchTerms = [...title, ...body].reduce((obj, term) => {
      obj[term] = null;
      return obj;
    }, {});
  }

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
                <form className="row">
                  <div className="input-field col">
                    {/* <input id="search" type="search" required /> */}
                    <i className="material-icons prefix search-bar">search</i>
                    <input type="text" ref={input => (this.search = input)} />
                    {/* <label className="label-icon" for="search"><i className="material-icons">search</i></label> */}
                    <i className="material-icons">close</i>
                  </div>
                </form>
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
