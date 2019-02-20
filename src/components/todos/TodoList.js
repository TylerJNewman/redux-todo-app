import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoListModal from "./TodoListModal";
import TodoForm from "./TodoForm";
import TodoDetailViewContainer from "./TodoDetailViewContainer";
import M from "materialize-css/dist/js/materialize.min.js";

class TodoList extends React.Component {
  // componentDidUpdate() {
  //   debugger;
  //   var elems = document.querySelectorAll(".modal");
  //   M.Modal.init(elems);
  // }
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
      <TodoListModal key={todo.id} todo={todo} />
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
