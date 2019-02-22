import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import StepListContainer from "../steps/StepListContainer";

// Actions
import {
  receiveTodos,
  receiveTodo,
  removeTodo
} from "../../actions/todo_actions.js";
import { allTodos, getVisibleTodos } from "../../reducers/selectors.js";

class TodoListContainer extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    return this.props.header.currentView === "TODO_LIST" ? (
      <TodoList
        todos={todos}
        receiveTodo={receiveTodo}
        removeTodo={removeTodo}
      />
    ) : (
      <StepListContainer />
    );
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(allTodos(state), state.visibilityFilter),
  header: state.header
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todoId => dispatch(removeTodo(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
