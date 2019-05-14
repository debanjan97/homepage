import React, { Component } from "react";
import Feature from "./feature";
import Heading from "./heading";
import Skills from "./skills";
const $ = window.$;
class About extends Component {
  state = {};
  styleAboutMe = {
    minHeight: "100vh"
  };
  componentDidMount() {
    $("#about").waypoint(
      function() {
        $(".active").each(function() {
          $(this).removeClass("active");
        });

        $(".about").addClass("active");
      },
      { offset: "10%" }
    );
  }
  render() {
    return (
      <div
        id="about"
        className="container container-flex"
        style={this.styleAboutMe}
      >
        <Heading id="about-heading">ABOUT</Heading>
        <Feature />
        <Skills />
      </div>
    );
  }
}

export default About;
