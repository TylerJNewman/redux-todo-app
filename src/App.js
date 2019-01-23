import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import { allTodos } from "./reducers/selectors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import TodoList from "./components/todos/TodoListContainer";
import M from "materialize-css/dist/js/materialize.min.js";

window.allTodos = allTodos;

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <TodoList />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
