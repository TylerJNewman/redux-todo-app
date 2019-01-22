import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import store from "./store/store";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";

window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

const Footer = () => {
  return (
    <footer className="section page-footer">
      <div className="container center-align">&#169; Tyler Newman</div>
    </footer>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="navbar dark">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">
            Todo App
          </a>
        </div>
      </nav>
    </header>
  );
};

const Content = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
