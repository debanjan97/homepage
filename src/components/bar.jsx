import React, { Component } from "react";

class Bar extends Component {
  styleProgress = {
    width: this.props.param.value + "%",
    backgroundColor: "#00A1A7"
  };
  styleBar = {
    height: 30,
    marginBottom: 15
  };
  styleTag = {
    position: "absolute",
    width: 100,
    height: 30,
    backgroundColor: "#04C2C9",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px"
  };
  styleLabel = {
    position: "absolute",
    right: 10,
    width: 50,
    color: "black",
    fontSize: "25"
  };

  componentDidMount() {
    var width = this.props.param.value;
    this.setState({ width: width });
  }

  render() {
    return (
      <div className="progress" style={this.styleBar}>
        <div className="progress-bar fill" style={this.styleProgress}>
          <div className="tag bold flex" style={this.styleTag}>
            {this.props.param.id}
          </div>
          <div className="percent" style={this.styleLabel}>
            {this.props.param.value}%
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
