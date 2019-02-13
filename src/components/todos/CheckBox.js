import React from "react";
import { connect } from "react-redux";
import { receiveTodo } from "../../actions/todo_actions.js";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  toggleCheckBox() {
    const toggledTodo = Object.assign({}, this.props.todo, {
      done: !this.props.todo.done
    });
    this.props.receiveTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    return (
      <a>
        <form className="left checkbox-form" action="#">
          <label>
            <input
              type="checkbox"
              className="checkbox-white"
              checked={todo.done}
              onChange={this.toggleCheckBox}
            />
            <span />
          </label>
        </form>
      </a>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBox);
