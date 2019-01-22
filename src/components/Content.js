import React, { Component } from "react";

class Content extends Component {
  render() {
    const { children } = this.props;

    return (
      <main>
        <div className="container"> {children}</div>
      </main>
    );
  }
}

export default Content;
