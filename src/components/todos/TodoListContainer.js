import { connect } from "react-redux";
import TodoList from "./TodoList";

// Actions
import {
  receiveTodos,
  receiveTodo,
  removeTodo
} from "../../actions/todo_actions.js";
import { allTodos } from "../../reducers/selectors.js";

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todoId => dispatch(removeTodo(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
