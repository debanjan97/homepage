import React, { Component } from "react";
import logo from "../../public/logo.png";

class NavBar extends Component {
  state = {};
  buttonStyle = {
    postion: "absolute"
  };
  render() {
    return (
      <nav className="navbar-dark bg-dark form-inline">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt="" />
        </a>

        <div className="navbar-nav" id="myNavbar">
          <a className="nav-item nav-link active m2 home" href="#home">
            Home
          </a>
          <a className="nav-item nav-link m2 about" href="#about">
            About
          </a>
          <a className="nav-item nav-link m2 projects" href="#projects">
            Projects
          </a>
          <a className="nav-item nav-link m2 contact" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
