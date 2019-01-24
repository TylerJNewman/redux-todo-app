import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scaleIn: "scale-transition scale-out" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ scaleIn: "scale-transition scale-in" });
    }, 1);
  }
  render() {
    const { todo, updateTodo } = this.props;

    return (
      <div class={this.state.scaleIn}>
        <article className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{todo.title}</span>
                <p>{todo.body}</p>
              </div>
              <div className="card-action">
                <a href="#!" className="delete">
                  <i className="material-icons">close</i>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TodoListItem;
