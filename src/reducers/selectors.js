import React from "react";

export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);
