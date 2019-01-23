import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem key={`todo-list-item${todo.id}`} todo={todo} />
    ));

    return (
      <section className="todo-list">
        <TodoForm />
        {todoItems}
      </section>
    );
  }
}

export default TodoList;
