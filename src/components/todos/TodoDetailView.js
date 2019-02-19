import React, { Component } from "react";
import StepListContainer from "../steps/StepListContainer";

export class TodoDetailView extends Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <p className="todo-body">{todo.body}</p>
        <StepListContainer todo_id={todo.id} />
      </div>
    );
  }
}

export default TodoDetailView;
