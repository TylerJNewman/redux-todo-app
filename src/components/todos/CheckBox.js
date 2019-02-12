import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: "" };
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  toggleCheckBox() {
    let checked = this.state.checked === "checked" ? "" : "checked";
    this.setState({
      checked
    }); // reset form
  }

  render() {
    return (
      <a>
        <form className="left checkbox-form" action="#">
          <label>
            <input
              type="checkbox"
              className="checkbox-white"
              checked={this.state.checked}
              onChange={this.toggleCheckBox}
            />
            <span />
          </label>
        </form>
      </a>
    );
  }
}

export default CheckBox;
