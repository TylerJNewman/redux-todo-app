import React from "react";
import CheckBox from "./CheckBox";
import "./TodoListItem.css";
import TodoDetailViewContainer from "./TodoDetailViewContainer";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scale: "scale-out", detail: false };

    this.toggleDetail = this.toggleDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ scale: "scale-in" });
    }, 1);
  }

  // componentWillUnmount() {
  //   this.setState({ scale: "scale-out" });
  // }

  handleDelete() {
    this.setState({ scale: "scale-out" });
    setTimeout(() => {
      this.props.removeTodo(this.props.todo.id);
    }, 250);
  }

  toggleDetail() {
    this.setState({ detail: !this.detail });
  }

  render() {
    const { todo, updateTodo, removeTodo } = this.props;

    return (
      <div className={"scale-transition " + this.state.scale}>
        <article className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{todo.title}</span>
                <TodoDetailViewContainer todo={todo} />
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
