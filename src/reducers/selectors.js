import React from "react";

const allTodos = state => {
  const todos = state.todosReducer;
  return Object.keys(todos).map(id => todos[id]);
};

export default allTodos;
