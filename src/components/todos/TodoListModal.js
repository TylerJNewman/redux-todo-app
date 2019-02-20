import React, { Component } from "react";
import { connect } from "react-redux";
import StepListContainer from "../steps/StepListContainer";
import M from "materialize-css/dist/js/materialize.min.js";

export class TodoListModal extends Component {
  componentDidMount() {
    const { todo } = this.props;
    var elems = document.getElementById(`${todo.id}`);
    var instances = M.Modal.init(elems);
  }
  render() {
    const { todo } = this.props;
    return (
      <div id={todo.id} key={todo.id} className="modal blue-grey darken-1">
        <div className="modal-content white-text">
          <h4>{todo.title}</h4>
          <StepListContainer todo_id={todo.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListModal);
