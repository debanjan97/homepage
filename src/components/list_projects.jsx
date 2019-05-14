import React, { Component } from "react";
import Showcase from "./showcase";
const $ = window.$;
import FoodAdobe from "./FoodAdobe.png";

class ProjectShowcase extends Component {
  state = {
    projects_row1: [
      {
        id: 1,
        title: "Denoising NeuralNets",
        language: "Python + Tensorflow",
        imgSrc:
          "https://cdn-images-1.medium.com/max/1600/1*kpEzOvX1bvu6v72b0vOZ9w@2x.png",
        link: "https://github.com/debanjan97/denoising_neuralnets"
      },
      {
        id: 2,
        title: "Handwritten Character Recognition",
        language: "Python + Scikit-Learn",
        imgSrc: "http://www.seminarstopics.com/seminar-image/9066-mpeZ1gH.png",
        link: "https://github.com/debanjan97/character_recognition_SVM"
      },
      {
        id: 3,
        title: "Live Traffic Analysis Using Tensorflow",
        language: "Python + YOLOv2",
        imgSrc:
          "https://cdn-images-1.medium.com/max/1600/1*QOGcvHbrDZiCqTG6THIQ_w.png",
        link: "https://github.com"
      }
    ],
    projects_row2: [
      {
        id: 4,
        title: "Snake BOT",
        language: "Python + NEAT",
        imgSrc: "https://i.ytimg.com/vi/3bhP7zulFfY/hqdefault.jpg",
        link: "https://github.com/debanjan97/NEAT_SnakeBOT"
      },
      {
        id: 5,
        title: "Waiter App",
        language: "Vanilla Javascript",
        imgSrc: FoodAdobe,
        link: "https://debanjan97.github.io/FoodAdobe"
      }
    ]
  };
  divStyle = {
    marginTop: "7%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px"
  };

  handleMouseEntry = projectId => {
    var modalId = "#show-" + projectId;
    var overlayId = "#overlay-" + projectId;
    $(modalId).css("opacity", 0);
    $(overlayId).css("opacity", 1);
  };
  handleMouseExit = projectId => {
    var modalId = "#show-" + projectId;
    var overlayId = "#overlay-" + projectId;
    $(modalId).css("opacity", 1);
    $(overlayId).css("opacity", 0);
  };
  styleManyMore = {
    position: "relative",
    top: "150px",
    animationDelay: "0.2s",
    fontSize: 20
  };
  styleLink = {
    textDecoration: "none",
    color: "#e31b6d"
  };
  render() {
    return (
      <div style={this.divStyle} className="row container no-gutters">
        {this.state.projects_row1.map(project => {
          return (
            <Showcase
              key={project.id}
              onStartHover={this.handleMouseEntry}
              onEndHover={this.handleMouseExit}
              param={project}
            />
          );
        })}
        <div className="w-100" />
        {this.state.projects_row2.map(project => {
          return (
            <Showcase
              key={project.id}
              onStartHover={this.handleMouseEntry}
              onEndHover={this.handleMouseExit}
              param={project}
            />
          );
        })}
        <div
          id="many-more"
          className="col-sm-4 animated container"
          style={this.styleManyMore}
        >
          <p id="text-project">
            Click{" "}
            <a
              href="https://github.com/debanjan97?tab=repositories"
              style={this.styleLink}
            >
              Here
            </a>{" "}
            for many more
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectShowcase;
