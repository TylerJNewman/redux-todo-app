import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO
} from "../actions/todo_actions.js";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      let newState = {};
      let id = action.todoId;
      Object.keys(state)
        .filter(key => parseInt(key) !== id && key !== id)
        .map(key => (newState[key] = state[key]));
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
