import React, { Component } from "react";
import classnames from "classnames";
import isString from "lodash/isString";
import isBoolean from "lodash/isBoolean";
import isFunction from "lodash/isFunction";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.checkedFromProps = this.checkedFromProps.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.state = {
      checked: this.checkedFromProps()
    };
  }

  checkedFromProps() {
    let { checked } = this.props;

    // If checked is a function, invoke the function
    checked = isFunction(checked) ? checked() : checked;

    // Return checked if it is a boolean, otherwise false
    return isBoolean(checked) && checked;
  }

  toggleCheckBox(evt) {
    // evt.persist();
    // evt.preventDefault();

    const { onClick, onStateChanged } = this.props;

    this.setState({ checked: !this.state.checked }, () => {
      const state = this.state;

      // Augument the event object with CHECKBOX_STATE
      const checkBoxEvent = Object.assign(evt, {
        CHECKBOX_STATE: state
      });

      // Execute the callback functions
      isFunction(onClick) && onClick(checkBoxEvent);
      isFunction(onStateChanged) && onStateChanged(state);
    });
  }

  render() {
    const { checked } = this.state;

    // Isolate special props and store the remaining as restProps
    const {
      checked: _checked,
      theme,
      onClick,
      className,
      onStateChanged,
      ...restProps
    } = this.props;

    // Use default as a fallback theme if valid theme is not passed
    const checkBoxTheme = theme && isString(theme) ? theme : "default";

    const checkBoxClasses = classnames(
      `checkBox checkBox--${checkBoxTheme}`,
      className
    );

    const togglerClasses = classnames(
      "checkBox-toggle",
      `checkBox-toggle--${checked ? "on" : "off"}`
    );

    return (
      <a>
        <form className="left checkbox-form" action="#">
          <label>
            <input
              type="checkbox"
              className={checkBoxClasses}
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

// export default function CheckBox() {
//   return <div />;
// }
