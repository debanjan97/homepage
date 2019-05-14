import React, { Component } from "react";
import Modal from "./text_area";
import Particles from "react-particles-js";

class Opening extends Component {
  styleOpening = {
    backgroundImage: "url(" + this.props.backgroundUrl + ")",
    //backgroundColor: "darkgrey",
    height: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden"
  };
  particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      }
    }
  };
  particlesStyle = {
    overflow: "hidden"
  };

  render() {
    return (
      <div id="home" style={this.styleOpening}>
        <Modal />
        <Particles
          style={this.particlesStyle}
          className="particles"
          params={this.particlesOptions}
        />
      </div>
    );
  }
}

export default Opening;
