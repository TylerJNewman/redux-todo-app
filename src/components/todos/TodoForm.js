import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

export class TodoForm extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
