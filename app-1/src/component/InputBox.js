import React, { Component } from "react";

class InputBox extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="inputBox">
        <input
          className="inputBox"
          onChange={e => this.handleChange(e.target.value)}
        />
        <p> {this.state.text} </p>
      </div>
    );
  }
}

export default InputBox;
