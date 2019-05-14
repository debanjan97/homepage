import React, { Component } from "react";
import IconWrap from "./icon-wrap";

class Footer extends Component {
  state = {};
  styleFooter = {
    height: 200,
    backgroundColor: "#1e242c",
    position: "relative",
    zIndex: +1
  };
  styleUp = {
    position: "relative",
    top: -35,
    color: "white",
    fontSize: 40,
    backgroundColor: "#e31b6d",
    padding: "5px",
    width: "40px",
    display: "inline"
  };
  styleName = {
    color: "#e31b6d"
  };
  render() {
    return (
      <footer style={this.styleFooter}>
        <a href="#home">
          <i
            className="mdi mdi-arrow-up-thick page-link"
            style={this.styleUp}
          />
        </a>
        <IconWrap />
        <p id="author" style={this.styleName}>
          &copy; Debanjan Ganguly, 2019
        </p>
      </footer>
    );
  }
}

export default Footer;
