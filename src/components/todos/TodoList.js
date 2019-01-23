import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem key={`todo-list-item${todo.id}`} todo={todo} />
    ));

    return (
      <section className="todo-list">
        <article className="row">
          <div className="col s12 m6 offset-m3">
            {" "}
            <form>
              <input
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Add Todo"
              />
            </form>
          </div>
        </article>
        {todoItems}
      </section>
    );
  }
}

export default TodoList;
