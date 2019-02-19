import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

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
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
        <TodoForm receiveTodo={receiveTodo} />
        {todoItems}
      </section>
    );
  }
}

export default TodoList;
