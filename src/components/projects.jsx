import React, { Component } from "react";
import Heading from "./heading";
import ProjectShowcase from "./list_projects";
const $ = window.$;
class Projects extends Component {
  styleProject = {
    position: "relative",
    paddingTop: "1px",
    minHeight: "50vh",
    background: "#DCDCDC",
    zIndex: "+1",
    paddingBottom: "50px"
  };

  styleManyMore = {};
  componentDidMount() {
    $("#projects").waypoint(
      function() {
        $(".active").each(function() {
          $(this).removeClass("active");
        });

        $(".projects").addClass("active");
      },
      { offset: "0%" }
    );
  }
  state = {};
  render() {
    return (
      <div id="projects" style={this.styleProject} className="container-flex">
        <Heading id="project-heading">PROJECTS</Heading>
        <ProjectShowcase style={this.styleShowCase} />
      </div>
    );
  }
}

export default Projects;
