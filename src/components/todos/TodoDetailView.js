import React, { Component } from "react";
import StepListContainer from "../steps/StepListContainer";

export class TodoDetailView extends Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{todo.title}</span>
            <p className="todo-body">{todo.body}</p>
            <StepListContainer todo_id={todo.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoDetailView;
