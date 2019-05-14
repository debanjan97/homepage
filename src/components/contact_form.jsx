import React, { Component } from "react";
const $ = window.$;

class Form extends Component {
  state = {};
  styleForm = {
    position: "absolute",
    top: "25vh",
    width: "600px",
    position: "relative",
    animationDelay: "0.6s"
  };
  styleTextArea = {
    height: "30vh"
  };
  styleButton = {
    position: "relative",
    border: "2px solid white",
    fontSize: 40,
    padding: "2% 7%",
    color: "white",
    backgroundColor: "#1e242c",
    top: 10
  };
  handleEntry = () => {
    $("#submit-form").css("background-color", "#04C2C9");
    $("#submit-form").css("border", "2px solid #04C2C9");
  };
  handleExit = () => {
    $("#submit-form").css("background-color", "#1e242c");
    $("#submit-form").css("border", "2px solid white");
  };
  componentDidMount() {
    $("#contact-form").waypoint(
      function() {
        $("#contact-form").addClass("zoomInUp");
        $("#contact-form").css("opacity", 1);
      },
      { offset: "70%" }
    );
  }
  render() {
    return (
      <form
        id="contact-form"
        style={this.styleForm}
        className="container animated"
      >
        <input className="" type="text" placeholder="Name" />
        <input className="" type="text" placeholder="E-mail" />
        <textarea
          className=""
          placeholder="Write Your Message Here"
          style={this.styleTextArea}
        />
        <input
          id="submit-form"
          className="button btn"
          onMouseEnter={this.handleEntry}
          onMouseLeave={this.handleExit}
          type="submit"
          value="SUBMIT"
          style={this.styleButton}
        />
      </form>
    );
  }
}

export default Form;
