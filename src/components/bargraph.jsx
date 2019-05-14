import React, { Component } from "react";
import Bar from "./bar";
const $ = window.$;
class BarGraph extends Component {
  styleBarGraph = {
    paddingLeft: "7%",
    marginBottom: "7%"
  };
  componentDidMount() {
    $(".bar").waypoint(
      function() {
        $(".bar").addClass("slideInRight");
        $(".bar").css("opacity", 1);
      },
      { offset: "70%" }
    );
  }
  state = {
    languages: [
      { id: "C", value: 80 },
      { id: "C++", value: 70 },
      { id: "JAVA", value: 80 },
      { id: "Javascript", value: 60 },
      { id: "Python", value: 80 },
      { id: "HTML/CSS", value: 60 },
      { id: "ReactJS", value: 50 },
      { id: "Tensorflow", value: 65 },
      { id: "Spring", value: 45 },
      { id: "NoSQL", value: 80 }
    ]
  };
  render() {
    return (
      <div className="col-sm-8 flex animated bar" style={this.styleBarGraph}>
        {this.state.languages.map(lang => (
          <Bar key={lang.id} param={lang} />
        ))}
      </div>
    );
  }
}

export default BarGraph;
