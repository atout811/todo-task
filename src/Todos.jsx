import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Todos extends Component {
  state = {
    add: "",
    index: 0
  };

  handleChange = event => {
    this.add = event.target.value;
  };
  handleClick = event => {
    this.props.insert({
      num: this.state.index++,
      value: this.add
    });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type Todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Todos;
