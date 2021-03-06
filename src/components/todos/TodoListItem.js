import React from "react";
import Checkbox from "../CheckBox";
import classnames from "classnames";
import "./TodoListItem.css";
import TodoDetailViewContainer from "./TodoDetailViewContainer";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: "scale-out",
      detail: false,
      checked: this.props.todo.done
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ scale: "scale-in" });
    }, 1);
  }

  handleDelete() {
    this.setState({ scale: "scale-out" });
    setTimeout(() => {
      this.props.removeTodo(this.props.todo.id);
    }, 250);
  }

  toggleCheckBox() {
    this.setState({ checked: !this.state.checked });
    const toggledTodo = Object.assign({}, this.props.todo, {
      done: !this.props.todo.done
    });
    this.props.receiveTodo(toggledTodo);
  }

  render() {
    const { checked } = this.state;
    const { todo, updateTodo, removeTodo } = this.props;
    const modalRef = "#" + todo.id;
    const cardTitleClassName = classnames("card-title", "modal-trigger", {
      strike: checked
    });
    return (
      <div className={"scale-transition " + this.state.scale}>
        <article className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span
                  className={cardTitleClassName + " " + this.state.checked}
                  href={modalRef}
                >
                  {todo.title}
                </span>
              </div>
              <div className="card-action">
                <a
                  href="#!"
                  className="delete right"
                  onClick={this.handleDelete}
                >
                  <i className="material-icons">close</i>
                </a>
                <Checkbox
                  checked={todo.done}
                  onStateChanged={this.toggleCheckBox}
                  className="checkbox-white"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TodoListItem;

// < !--Modal Trigger-- >
// <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
