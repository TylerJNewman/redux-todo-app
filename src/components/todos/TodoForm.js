import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign(
      {},
      { title: this.title.value, done: false },
      { id: uuidv4() }
    );
    this.props.receiveTodo(todo);
    this.title.value = "";
  }

  render() {
    return (
      <article className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <form className="todo-form" onSubmit={this.handleSubmit}>
              <div className="card-content white-text">
                <input
                  className="input"
                  ref={title => (this.title = title)}
                  placeholder="Add Title"
                  required
                  value={this.props.title}
                />
                {/* 
                <textarea
                  id="textarea1"
                  ref="body"
                  className="materialize-textarea"
                  onChange={this.update("body")}
                  value={this.state.body}
                  placeholder="Add Body"
                  required
                /> */}
              </div>
              {/* <div className="card-action">

                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  <i className="material-icons">add</i>
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
