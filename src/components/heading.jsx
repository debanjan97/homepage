import React, { Component } from "react";

const $ = window.$;
class Heading extends Component {
  state = {};
  styleHead = {
    fontWeight: "bold",
    marginBottom: "0",
    marginTop: "7%",
    opacity: 0
  };

  styleUnderline = {
    position: "relative",
    content: "",
    height: "3px",
    width: "50px",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    background: "#e31b6d",
    opacity: 0,
    animationDelay: "0.5s"
  };
  componentDidMount() {
    var headingId = "#" + this.props.id;
    var underlineId = "#" + this.props.id + "-underline";
    $(headingId).waypoint(
      function() {
        $(headingId).addClass("slideInLeft");
        $(headingId).css("opacity", 1);
      },
      { offset: "70%" }
    );

    $(underlineId).waypoint(
      function() {
        $(underlineId).addClass("fadeIn");
        $(underlineId).css("opacity", 1);
      },
      { offset: "70%" }
    );
  }
  render() {
    return (
      <div>
        <h1
          id={this.props.id}
          style={this.styleHead}
          className="heading animated"
        >
          {" "}
          {this.props.children}{" "}
        </h1>
        <div
          id={this.props.id + "-underline"}
          className="head-underline animated"
          style={this.styleUnderline}
        />
      </div>
    );
  }
}

export default Heading;
