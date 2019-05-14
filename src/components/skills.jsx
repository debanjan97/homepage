import React, { Component } from "react";
import Profile from "./profile";
import BarGraph from "./bargraph";

class Skills extends Component {
  state = {};
  styleSkills = {
    marginTop: "5%"
  };
  render() {
    return (
      <div className="row" style={this.styleSkills} id="about-skills">
        <Profile />
        <BarGraph />
      </div>
    );
  }
}

export default Skills;
