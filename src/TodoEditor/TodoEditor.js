import React, { Component } from "react";
import { connect } from "react-redux";
import todosOperations from "../redux/todos/todos-operation";

class TodoEditor extends Component {
  state = {
    message: "",
  };
  handleChange = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.message !== "") {
      this.props.onSubmit(this.state.message);
      this.props.onSave();
      this.setState({ message: "" });
      return;
    }
    alert("Заполни форму!");
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor_textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor_button">
          Save
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  onSubmit: todosOperations.addTodo,
};

export default connect(null, mapDispatchToProps)(TodoEditor);
