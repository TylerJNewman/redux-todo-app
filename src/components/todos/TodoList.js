import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem key={`todo-list-item${todo.id}`} todo={todo} />
    ));

    return (
      <div>
        <ul className="todo-list">{todoItems}</ul>
      </div>
    );
  }
}

export default TodoList;
