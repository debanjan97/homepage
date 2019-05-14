import React, { Component } from "react";

class DownloadCV extends Component {
  state = {};
  styleDiv = {
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "25px",
    position: "relative"
  };
  render() {
    return (
      <div id="button_area" style={this.styleDiv}>
        <a id="link-resume" href="#about">
          Resume
        </a>
        <a id="link-about" href="#about">
          View My Work
        </a>
      </div>
    );
  }
}

export default DownloadCV;
