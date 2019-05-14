import React, { Component } from "react";
import SocialIcon from "./social_logo";

class IconWrap extends Component {
  state = {
    icons: [
      { id: 1, logo: "github-box", link: "https://github.com/debanjan97" },
      {
        id: 2,
        logo: "linkedin-box",
        link: "https://www.linkedin.com/in/debanjan-ganguly-514aba144/"
      },
      { id: 3, logo: "twitter-box", link: "https://twitter.com/_debanjan_" },
      {
        id: 4,
        logo: "facebook-box",
        link: "https://www.facebook.com/bonjo.ganguly"
      }
    ]
  };
  styleContainer = {
    width: "25%"
  };
  render() {
    return (
      <div className="container social-icon" style={this.styleContainer}>
        <div className="row">
          {this.state.icons.map(icon => (
            <SocialIcon key={icon.id} class={icon.logo} link={icon.link} />
          ))}
        </div>
      </div>
    );
  }
}

export default IconWrap;
