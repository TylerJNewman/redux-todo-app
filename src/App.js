import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import { allTodos, stepsByTodoId } from "./reducers/selectors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import TodoList from "./components/todos/TodoListContainer";
import M from "materialize-css/dist/js/materialize.min.js";

window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;

class App extends Component {
  componentDidMount() {
    M.AutoInit();
    // setTimeout(() => {
    //   this.props.updateHeaderTitle("hey");
    // }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header title={this.props.headerTitle} />
        <Content>
          <TodoList />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
