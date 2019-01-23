import React from "react";

class TodoListItem extends React.Component {
  render() {
    const { todo, updateTodo } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{todo.title}</span>
              <p>{todo.body}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
