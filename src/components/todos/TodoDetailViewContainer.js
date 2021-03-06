import React, { Component } from "react";
import { connect } from "react-redux";
import TodoDetailView from "./TodoDetailView";

// Actions
// import { removeTodo } from "../../actions/todo_actions.js";
import { receiveSteps } from "../../actions/step_actions.js";

const mapDispatchToProps = (dispatch, { steps }) => ({
  //   removeTodo: todoId => dispatch(removeTodo(todoId)),
  receiveSteps: todoId => dispatch(receiveSteps(steps))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
