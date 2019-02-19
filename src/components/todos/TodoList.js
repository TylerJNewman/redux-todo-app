import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import TodoDetailViewContainer from "./TodoDetailViewContainer";
import StepListContainer from "../steps/StepListContainer";

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos
      .reverse()
      .map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo}
        />
      ));
    const todoModals = todos.map(todo => (
      <div id="{todo.id}" key={todo.id} className="modal blue-grey darken-1">
        <div className="modal-content white-text">
          <h4>{todo.title}</h4>
          <StepListContainer todo_id={todo.id} />
        </div>
      </div>
    ));

    return (
      <section className="todo-list">
        <TodoForm receiveTodo={receiveTodo} />
        {todoItems}
        {todoModals}
      </section>
    );
  }
}

export default TodoList;
