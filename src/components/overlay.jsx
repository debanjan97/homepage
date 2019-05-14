import React, { Component } from "react";
const $ = window.$;
class Overlay extends Component {
  state = {};
  styleTitle = {
    fontSize: 20,
    position: "relative",
    top: 80,
    fontWeight: "bold",
    animationDelay: "0.01s"
  };
  styleLanguage = {
    position: "relative",
    top: 60,
    color: "#e31b6d",
    animationDelay: "0.1s"
  };
  styleButton = {
    position: "relative",
    top: 100,
    border: "2px solid #e31b6d",
    fontSize: 40,
    padding: "2% 7%",
    animationDelay: "0.1s"
  };
  handleMouseEnter = () => {
    var titleId = "#project-title-" + this.props.param.id;
    var languageId = "#language-" + this.props.param.id;
    var buttonId = "#button-" + this.props.param.id;
    $(titleId).removeClass("fadeOutUp");
    $(titleId).addClass("fadeInDown");
    $(titleId).css("opacity", 1);
    $(languageId).removeClass("fadeOutUp");
    $(languageId).addClass("fadeInDown");
    $(languageId).css("opacity", 1);
    $(buttonId).removeClass("fadeOutDown");
    $(buttonId).addClass("fadeInUp");
    $(buttonId).css("opacity", 1);
  };
  handleMouseLeave = () => {
    var titleId = "#project-title-" + this.props.param.id;
    var languageId = "#language-" + this.props.param.id;
    var buttonId = "#button-" + this.props.param.id;
    $(titleId).removeClass("fadeInDown");
    $(titleId).addClass("fadeOutUp");
    $(titleId).css("opacity", 0);
    $(languageId).removeClass("fadeInDown");
    $(languageId).addClass("fadeOutUp");
    $(languageId).css("opacity", 0);
    $(buttonId).removeClass("fadeInUp");
    $(buttonId).addClass("fadeOutDown");
    $(buttonId).css("opacity", 0);
  };
  cardStyle = {
    height: "100%"
  };
  handleClick = () => {
    location.href = this.props.param.link;
  };
  render() {
    var titleId = "project-title-" + this.props.param.id;
    var languageId = "language-" + this.props.param.id;
    var buttonId = "button-" + this.props.param.id;
    var cardId = "card-" + this.props.param.id;
    return (
      <div
        id={cardId}
        style={this.cardStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h4 id={titleId} className="animated" style={this.styleTitle}>
          {this.props.param.title}
        </h4>
        <br />
        <p id={languageId} className="animated" style={this.styleLanguage}>
          {this.props.param.language}
        </p>
        <br />
        <button
          id={buttonId}
          className="btn learn-more btn-lg animated"
          style={this.styleButton}
          onClick={this.handleClick}
        >
          LEARN MORE
        </button>
      </div>
    );
  }
}

export default Overlay;
