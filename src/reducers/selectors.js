import React from "react";

export default function allTodos(state) {
  const todos = state.todos;
  Object.keys(todos).map(id => todos[id]);
}

window.allTodos = allTodos;
