import React, { Component } from "react";
import Form from "./contact_form";
const $ = window.$;
class Contact extends Component {
  state = {};
  styleContact = {
    position: "relative",
    minHeight: "110vh",
    backgroundImage: "url(" + this.props.backgroundUrl + ")",
    zIndex: "+1"
  };
  styleHead = {
    position: "relative",
    fontWeight: "bold",
    marginBottom: "0",
    color: "white",
    top: 75,
    animationDelay: "0.4s"
  };
  styleUnderline = {
    position: "relative",
    content: "",
    height: "4px",
    width: "70px",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    background: "white",
    animationDelay: "0.5s",
    top: 75
  };
  styleP = {
    position: "relative",
    color: "rgb(132, 211, 238)",
    fontSize: 20,
    top: "20vh",
    animationDelay: "0.6s"
  };
  componentDidMount() {
    $("#question").waypoint(
      function() {
        $("#question").addClass("fadeIn");
        $("#question").css("opacity", 1);
      },
      { offset: "70%" }
    );
    $("#contact-heading").waypoint(
      function() {
        $("#contact-heading").addClass("fadeIn");
        $("#contact-heading").css("opacity", 1);
      },
      { offset: "70%" }
    );
    $("#contact-underline").waypoint(
      function() {
        $("#contact-underline").addClass("fadeIn");
        $("#contact-underline").css("opacity", 1);
      },
      { offset: "70%" }
    );
    $("#contact").waypoint(
      function() {
        $(".active").each(function() {
          $(this).removeClass("active");
        });

        $(".contact").addClass("active");
      },
      { offset: "10%" }
    );
  }
  render() {
    return (
      <div id="contact" style={this.styleContact}>
        <h1 id="contact-heading" className="animated" style={this.styleHead}>
          CONTACT
        </h1>
        <div
          id="contact-underline"
          className="head-underline animated"
          style={this.styleUnderline}
        />
        <p id="question" className="animated container" style={this.styleP}>
          Have a question or want to work together?
        </p>
        <Form />
      </div>
    );
  }
}

export default Contact;
