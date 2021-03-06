import uuidv4 from "uuid/v4";
import React from "react";

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      todo_id: this.props.todo_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state, { id: uuidv4() });
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }

  render() {
    return (
      <form className="step-form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          ref="body"
          value={this.state.body}
          onChange={this.update("body")}
          required
        />

        <button className="create-button">Create Step!</button>
      </form>
    );
  }
}

export default StepForm;
