import React, { Component } from "react";
import { connect } from "react-redux";
import TodoDetailView from "./TodoDetailView";

// Actions
// import { removeTodo } from "../../actions/todo_actions.js";

const mapDispatchToProps = dispatch => ({
  //   removeTodo: todoId => dispatch(removeTodo(todoId))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
