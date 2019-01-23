import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos
      .reverse()
      .map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={receiveTodo}
        />
      ));

    return (
      <section className="todo-list">
        <TodoForm receiveTodo={receiveTodo} />
        {todoItems}
      </section>
    );
  }
}

export default TodoList;
