import React, { Component } from "react";

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
            <ul className="right ">
              <li>
                <form id="navbarsearch">
                  <div className="navfix">
                    <div id="navfix2">
                      <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon" htmlFor="search">
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
