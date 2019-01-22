import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import { allTodos } from "./reducers/selectors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import TodoList from "./components/todos/TodoListContainer";

window.allTodos = allTodos;

const Card = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Card />
          <TodoList />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
