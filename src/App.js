import React, { Component } from "react";
import Todos from "./Todos";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = { todos: [] };

  constructor() {
    super();
    var checked = 0;
    var unchecked = 0;
  }

  addTodo = comp => {
    this.setState({ todos: [...this.state.todos, comp] });
    this.unchecked = this.state.todos.length + 1;
    this.checked = 0;
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(c => c.num !== id);
    this.setState({ todos });
  };

  onCheck = () => {
    this.unchecked = this.unchecked - 1;
    this.checked = this.checked + 1;
    console.log(this.unchecked, this.checked);

    // console.log("hello");
    // liststyle = styled.li`
    //   text-decoration: line-through;
    // `;
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <Todos arr={this.state.todos} insert={this.addTodo} />
        <ol>
          {this.state.todos.map(e => (
            <div>
              <li style={{ margin: "10px" }}>
                {e.value}
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    height: "15px",
                    padding: "0px",
                    fontSize: "0.75em",
                    marginRight: "10px",
                    float: "right"
                  }}
                  onClick={() => this.deleteTodo(e.num)}
                >
                  Delete
                </button>
                <input
                  type="checkbox"
                  onClick={this.onCheck}
                  style={{ marginRight: "30px", float: "right" }}
                  id="myBtn"
                ></input>
              </li>
            </div>
          ))}
        </ol>
        <p>
          Total Todos: {this.state.todos.length} <br /> Checked: {this.checked}
          <br />
          Unchecked: {this.unchecked}
        </p>
      </div>
    );
  }
}

export default App;
