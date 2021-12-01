import React from "react";
import { Component } from "react/cjs/react.production.min";

class Form extends Component {
  state = {
    experience: "junior",
    lisence: false,
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  render() {
    return (
      <form>
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          ></input>
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          ></input>
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          ></input>
          senior
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />{" "}
          Согласен с условием
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}
export default Form;
