import React, { Component } from "react";

class Tag extends Component {
  state = {};
  styleName = {
    display: "inline-block",
    color: "#e31b6d",
    fontWeight: "bold"
  };
  styleTag = {
    fontSize: "calc(25px + (43 - 25) * ((100vw - 300px) / (1600 - 300)))"
  };
  render() {
    return (
      <h1 className="container-fluid text-light" style={this.styleTag}>
        Hi, I am{" "}
        <p className="name" style={this.styleName}>
          Debanjan Ganguly
        </p>
        .<br /> Software Developer and ML/AI enthusiast.
      </h1>
    );
  }
}

export default Tag;
