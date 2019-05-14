import React, { Component } from "react";
import backgroundImage from "../public/background.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdi/css/materialdesignicons.css";
import "animate.css/animate.min.css";
import Opening from "./components/opening";
import NavBar from "./components/navbar";
import About from "./components/about";
import "waypoints/lib/jquery.waypoints.min.js";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Opening backgroundUrl={backgroundImage} />
        <NavBar />
        <About />
        <Projects />
        <Contact backgroundUrl={backgroundImage} />
        <Footer />
      </div>
    );
  }
}

export default App;
