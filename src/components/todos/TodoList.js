import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import TodoDetailViewContainer from "./TodoDetailViewContainer";
import M from "materialize-css/dist/js/materialize.min.js";

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

    return (
      <section className="todo-list">
        <TodoForm receiveTodo={receiveTodo} />
        <article className="row">{todoItems}</article>
      </section>
    );
  }
}

export default TodoList;
