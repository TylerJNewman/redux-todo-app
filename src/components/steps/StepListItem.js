import React from "react";

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    const toggledStep = Object.assign({}, this.props.step, {
      done: !this.props.step.done
    });
    this.props.receiveStep(toggledStep);
  }

  render() {
    // const step = {
    //   title: "play with dog",
    //   done: false,
    //   todo_id: 2
    // };
    const { step } = this.props;
    return (
      <li className="step-header">
        <div className="step-info">
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
        <div className="step-buttons">
          <button
            className={step.done ? "done" : "undone"}
            onClick={this.toggleStep}
          >
            {step.done ? "Undo" : "Done"}
          </button>
          <button className="delete-button" onClick={this.props.removeStep}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default StepListItem;
