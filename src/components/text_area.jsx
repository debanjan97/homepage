import React, { Component } from "react";
import DownloadCV from "./cv";
import Tag from "./tag";

class Modal extends Component {
  state = {};
  styleModal = {
    position: "relative",
    top: "35vh"
  };
  render() {
    return (
      <div style={this.styleModal}>
        <Tag />
        <DownloadCV />
      </div>
    );
  }
}

export default Modal;
