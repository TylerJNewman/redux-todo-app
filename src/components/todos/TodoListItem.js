import React from "react";

class TodoListItem extends React.Component {
  render() {
    const { todo, updateTodo } = this.props;
    return <li>{todo.title}</li>;
  }
}

export default TodoListItem;
