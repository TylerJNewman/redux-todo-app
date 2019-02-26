import React from "react";
import Checkbox from "../CheckBox";
import classnames from "classnames";
import "./TodoListItem.css";
import { RIEInput } from "riek";
import _ from "lodash";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: "scale-out",
      detail: false,
      checked: this.props.todo.done,
      title: this.props.todo.title,
      editMode: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
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

  handleClick(e) {
    const newState = Object.assign(this.state, {
      editMode: !this.state.editMode
    });

    this.setState(newState);
    // e.currentTarget.focus();
  }

  update(property) {
    debugger;
    return e => this.setState({ [property]: e.target.value });
  }

  saveTitle({ title }) {
    if (title.length > 35) {
      return;
    }
    const updatedTodo = Object.assign({}, this.props.todo, {
      title
    });
    this.props.receiveTodo(updatedTodo);

    this.setState({ title });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    let title = this.input.value;
    if (title.length > 35) {
      return;
    }
    const todo = Object.assign({});
    this.props.receiveTodo(todo);
    this.input.value = "";
  }

  renderTitle(todo) {
    // if (this.state.editMode) {
    //   return (
    //     <input
    //       className="input"
    //       ref={input => (this.input = input)}
    //       placeholder={todo.title}
    //       autoFocus={true}
    //       value={todo.title}
    //     />
    //   );
    // }
    // return (
    //   <span onClick={this.handleClick} className="">
    //     {todo.title}
    //   </span>
    // );
    return (
      <RIEInput
        value={this.state.title}
        change={this.saveTitle}
        propName="title"
        validate={_.isString}
        className="input"
      />
    );
  }

  render() {
    const { checked } = this.state;
    const { todo, updateTodo, removeTodo, size } = this.props;
    const cardTitleClassName = classnames("card-title", {
      strike: checked
    });

    return (
      <div className={"scale-transition " + this.state.scale}>
        <div className={`col s12 ${size}`}>
          <div className="card blue-grey darken-1 hoverable">
            <div className="card-content white-text">
              <span
                className={
                  cardTitleClassName + " truncate " + this.state.checked
                }
              >
                {this.renderTitle(todo)}
              </span>
            </div>
            <div className="card-action">
              <a href="#!" className="delete right" onClick={this.handleDelete}>
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
      </div>
    );
  }
}

export default TodoListItem;
