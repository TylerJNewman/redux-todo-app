import React from "react";
import CheckBox from "./CheckBox";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scaleIn: "scale-out" };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ scaleIn: "scale-in" });
    }, 1);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo, updateTodo, removeTodo } = this.props;

    return (
      <div className={"scale-transition " + this.state.scaleIn}>
        <article className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{todo.title}</span>
                <p>{todo.body}</p>
              </div>
              <div className="card-action">
                <a
                  href="#!"
                  className="delete right"
                  onClick={this.handleDelete}
                >
                  <i className="material-icons">close</i>
                </a>
                <CheckBox todo={todo} />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TodoListItem;
