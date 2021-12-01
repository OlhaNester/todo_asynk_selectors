import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalId = null;

  componentDidMount() {
    console.log("setInterval");
    this.intarvalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <div className="Clock_face">{this.state.time}</div>;
  }
}
