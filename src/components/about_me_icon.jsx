import React, { Component } from "react";
import "jquery/jquery.min.js";

const $ = window.$;

class Icon extends Component {
  componentDidMount() {
    $(".hexagon").waypoint(
      function() {
        $(".hexagon").css("opacity", 1);
        $(".hexagon").addClass("flipInX");
      },
      { offset: "70%" }
    );
    $(".title-tag").waypoint(
      function() {
        $(".title-tag").css("opacity", 1);
        $(".title-tag").addClass("fadeIn");
      },
      { offset: "70%" }
    );
    $(".desc-tag").waypoint(
      function() {
        $(".desc-tag").css("opacity", 1);
        $(".desc-tag").addClass("fadeIn");
      },
      { offset: "70%" }
    );
  }
  state = {
    info: [
      {
        class: "school",
        title: "Education",
        desc:
          "Undergrad, Bachelors in CS,\n From Heritage Institute of Technology, Kolkata"
      },
      {
        class: "desktop-mac",
        title: "Web Designing",
        desc: "Fast Load times and Lag free Interactions are my top Priority"
      },
      {
        class: "gamepad-variant",
        title: "Gaming",
        desc: "Avid MOBA player, Smite"
      },
      {
        class: "language-python",
        title: "ML/AI",
        desc: "Tutor for almost 3 years, to Machines"
      }
    ]
  };

  class = "mdi mdi-" + this.props.class;

  information = this.state.info.filter(info => info.class === this.props.class);
  delay = this.state.info.indexOf(this.information[0]) * 0.1;

  styleIcon = {
    margin: "40px 0"
  };

  styleHeading = {
    marginTop: "60px",
    fontWeight: "bold"
  };

  styleHex = {
    animationDelay: this.delay + "s",
    opacity: 0
  };
  render() {
    return (
      <div className="hex-icon col-sm" style={this.styleIcon}>
        <div style={this.styleHex} className="text-center hexagon animated">
          {<i className={this.class} />}
        </div>
        <h4 style={this.styleHeading} className="animated title-tag">
          {this.information[0].title}
        </h4>
        <p className="animated desc-tag">{this.information[0].desc}</p>
      </div>
    );
  }
}

export default Icon;
