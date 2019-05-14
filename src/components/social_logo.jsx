import React, { Component } from "react";
const $ = window.$;
class SocialIcon extends Component {
  state = {
    class: " col social-link",
    classIcon: "mdi mdi-" + this.props.class + " social-icon"
  };
  styleIcons = {
    color: "white",
    fontSize: "40px"
  };
  stylelink = {
    padding: 0,
    width: 0
  };
  handleMouseEntry = logoId => {
    logoId = "#" + logoId;
    $(logoId).css("color", "rgb(132, 211, 238)");
  };
  handleMouseLeave = logoId => {
    logoId = "#" + logoId;
    $(logoId).css("color", "white");
  };
  render() {
    return (
      <a
        href={this.props.link}
        className={this.state.class}
        style={this.stylelink}
      >
        <i
          style={this.styleIcons}
          onMouseEnter={() => this.handleMouseEntry(this.props.class)}
          onMouseLeave={() => this.handleMouseLeave(this.props.class)}
          className={this.state.classIcon}
          id={this.props.class}
        />
      </a>
    );
  }
}

export default SocialIcon;
