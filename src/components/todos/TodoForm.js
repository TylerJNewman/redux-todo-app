import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uuidv4() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); // reset form
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
                  onChange={this.update("title")}
                  ref="title"
                  value={this.state.title}
                  placeholder="Add Title"
                  required
                />

                <textarea
                  id="textarea1"
                  ref="body"
                  className="materialize-textarea"
                  onChange={this.update("body")}
                  value={this.state.body}
                  placeholder="Add Body"
                  required
                />
              </div>
              <div className="card-action">
                {/* <a href="#!" className="delete">
                <i className="material-icons">submit</i>
              </a> */}
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Create
                  <i className="material-icons right">send</i>
                </button>
              </div>
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
