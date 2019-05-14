import React, { Component } from "react";
import Overlay from "./overlay";

const $ = window.$;

class Showcase extends Component {
  state = {};
  styleFrame = {
    height: "300px",
    backgroundImage: "url(" + this.props.param.imgSrc + ")",
    transition: "0.75s ease"
  };
  styleOverlay = {
    position: "absolute",
    top: 0,
    height: "300px",
    transition: "0.5s ease",
    opacity: 0,
    textAlignment: "center",
    width: "100%",
    animationDelay: "0.1s"
  };
  delay = this.props.param.id * 0.2;
  styleComp = {
    animationDelay: this.delay + "s"
  };

  componentDidMount() {
    $("#show-" + this.props.param.id).waypoint(
      function() {
        $(".col-sm-4").addClass("fadeInUp");
        $(".col-sm-4").css("opacity", 1);
      },
      { offset: "70%" }
    );
  }
  render() {
    var id = "show-" + this.props.param.id;
    var overlayId = "overlay-" + this.props.param.id;
    return (
      <div className="col-sm-4 pro animated" style={this.styleComp}>
        <div
          onMouseEnter={() => this.props.onStartHover(this.props.param.id)}
          onMouseLeave={() => this.props.onEndHover(this.props.param.id)}
          style={this.styleFrame}
          id={id}
        />
        <div
          onMouseEnter={() => this.props.onStartHover(this.props.param.id)}
          onMouseLeave={() => this.props.onEndHover(this.props.param.id)}
          style={this.styleOverlay}
          id={overlayId}
        >
          <Overlay param={this.props.param} />
        </div>
      </div>
    );
  }
}

export default Showcase;
