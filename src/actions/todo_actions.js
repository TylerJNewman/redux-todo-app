import localForage from "localforage";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_FILTERED_TODOS = "RECEIVE_FILTERED_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function receiveFilteredTodos(filteredTodos) {
  debugger;
  return {
    type: RECEIVE_FILTERED_TODOS,
    filteredTodos
  };
}

export function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  todoId
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
};

export const fetchTodos = () => dispatch => {
  debugger;
  localForage.getItem("Redux_Todo_App").then(data => {
    const todos = JSON.parse(data).todos;
    dispatch(receiveTodos(todos));
  });
};
