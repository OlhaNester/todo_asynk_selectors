import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modalRoot");

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackDrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal_backdrop" onClick={this.handleBackDrop}>
        <div className="Modal_content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
