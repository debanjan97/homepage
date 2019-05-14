import React, { Component } from "react";
import image from "../../public/me.png";
const $ = window.$;

class Profile extends Component {
  componentDidMount() {
    $("#whatami").waypoint(
      function() {
        $("#whatami").addClass("fadeIn");
        $("#whatami").css("opacity", 1);
      },
      { offset: "70%" }
    );
  }
  styleSection = {
    marginBottom: "7%"
  };
  styleImage = {
    width: "100%",
    height: "auto"
  };
  styleHeading = {
    marginTop: "20px",
    fontWeight: "bold"
  };
  styleSpan = {
    color: "#e31b6d"
  };
  render() {
    return (
      <div className="col-sm-4" style={this.styleSection}>
        <img src={image} style={this.styleImage} alt="" />
        <h4 id="whoami" style={this.styleHeading}>
          Who Am I?
        </h4>
        <p className="animated" id="whatami">
          I currently work as a{" "}
          <span style={this.styleSpan}>Software Developer Intern</span> at
          ZeMoSo technologies, Hyderabad. I am very passionate about{" "}
          <span style={this.styleSpan}>
            building apps based on Machine Learning
          </span>{" "}
          to solve current World Problems
        </p>
      </div>
    );
  }
}

export default Profile;
