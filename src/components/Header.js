import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  // Here you can define your PropTypes.

  // $(document).ready(function() {
  //   var trig = 1;
  //   //fix for chrome
  //   $("#search").addClass('searchbarfix');

  //   //animate searchbar width increase to  +150%
  //   $('#search').click(function (e) {
  //     //handle other nav elements visibility here to avoid push down
  //     $('.search-hide').addClass('hide');
  //     if (trig == 1) {
  //       $('#navfix2').animate({
  //         width: '+=150',
  //         marginRight: 0
  //       }, 400);

  //       trig++;
  //     }

  //   });

  //   // if user leaves the form the width will go back to original state

  //   $("#search").focusout(function () {

  //     $('#navfix2').animate({
  //       width: '-=150'
  //     }, 400);
  //     trig = trig - 1;
  //     //handle other nav elements visibility first to avoid push down
  //     $('.search-hide').removeClass('hide');

  //   });

  // });

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
                    <input
                      type="text"
                      id="autocomplete-input"
                      className="autocomplete"
                    />
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
