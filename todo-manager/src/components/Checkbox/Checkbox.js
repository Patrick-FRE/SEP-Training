import React from "react";
import "./Checkbox.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.handelCheckboxChange = this.handelCheckboxChange.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
  }

  handelCheckboxChange(e) {
    console.log("checkbox changed!", e);
    this.setState({ isChecked: e.target.checked });
  }

  handleToggleCheck() {
    // console.log("toggle is chekced");
    this.setState({ isChecked: !this.state.isChecked }, () => {
      if (this.props.onClick) {
        this.props.onClick(this.state);
      }
    });
  }

  render() {
    return (
      <span onClick={this.handleToggleCheck}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handelCheckboxChange}
        />
        <span></span>
      </span>
    );
  }
}

export default Checkbox;
