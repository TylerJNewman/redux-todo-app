import React, { Component, Fragment } from "react";
import App from "./App";
import { connect } from "react-redux";
// Actions
import { updateHeaderTitle } from "./actions/header_actions.js";

const mapStateToProps = state => ({
  headerTitle: state.header.headerTitle,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  updateHeaderTitle: title => dispatch(updateHeaderTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
