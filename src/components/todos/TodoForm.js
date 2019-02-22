import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign(
      {},
      { title: this.input.value },
      { id: uuidv4() }
    );
    this.props.receiveTodo(todo);
    this.input.value = "";
  }

  render() {
    return (
      <div>
        <article className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card blue-grey darken-1">
              <form className="todo-form" onSubmit={this.handleSubmit}>
                <div className="card-content white-text">
                  <input
                    className="input"
                    ref={input => (this.input = input)}
                    placeholder="Add Title"
                    required
                  />
                </div>
                {/* <div className="input-field">
                  <input id="search" type="search" required />
                  <label className="label-icon" for="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i class="material-icons">close</i>
                </div> */}
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
