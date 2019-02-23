import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import "./TodoList.css";
import TodoDetailViewContainer from "./TodoDetailViewContainer";
import M from "materialize-css/dist/js/materialize.min.js";
import fuzzyFilterFactory from "react-fuzzy-filter";

const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory();

class TodoList extends React.Component {
  render() {
    const fuseConfig = {
      keys: ["body", "title"]
    };
    const { todos, receiveTodo, removeTodo } = this.props;
    const todosLength = todos.length;

    let size;
    size = todosLength > 8 ? "l4 m6" : "l6 m6";
    size = todosLength > 12 ? "l3 m6" : size;
    size = todosLength < 5 ? "l6 offset-l3 m6 offset-m3" : size;

    const filtered = (
      <FilterResults items={todos} fuseConfig={fuseConfig}>
        {filteredItems => {
          return (
            <div>
              {filteredItems.map(todo => (
                <TodoListItem
                  size={size}
                  key={todo.id}
                  todo={todo}
                  receiveTodo={receiveTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </div>
          );
        }}
      </FilterResults>
    );

    return (
      <section className="todo-list">
        <div class="row">
          <div class="input-field col s12 m8 offset-m2 ">
            <InputFilter debounceTime={0} />
          </div>
        </div>

        <TodoForm receiveTodo={receiveTodo} />
        <article className="row">{filtered}</article>
      </section>
    );
  }
}

export default TodoList;
