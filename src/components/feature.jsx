import React, { Component } from "react";
import Icon from "./about_me_icon";

class Feature extends Component {
  state = {
    topics: ["school", "desktop-mac", "gamepad-variant", "language-python"]
  };
  styleFeature = {
    position: "relative",
    marginTop: "7%",
    width: "100%"
  };

  render() {
    return (
      <div className="row container no-gutters" style={this.styleFeature}>
        {this.state.topics.map(topic => (
          <Icon key={topic} class={topic} />
        ))}
      </div>
    );
  }
}

export default Feature;
