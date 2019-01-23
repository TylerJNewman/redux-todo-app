import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    return (
      <article className="row">
        <div className="col s12 m6 offset-m3">
          {" "}
          <form>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Add Todo"
            />
          </form>
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
