import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import TodoDetailViewContainer from "./TodoDetailViewContainer";
import M from "materialize-css/dist/js/materialize.min.js";

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todosLength = todos.length;

    let size;
    size = todosLength > 8 ? "l4" : "l6";
    size = todosLength > 12 ? "l3" : size;
    size = todosLength < 5 ? "l6 offset-l3" : size;

    const todoItems = todos
      .reverse()
      .map(todo => (
        <TodoListItem
          size={size}
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
