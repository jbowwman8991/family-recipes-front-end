import React, { Component } from "react";
import house1 from "../images/house-door.svg";
import window from "../images/layout-text-window.svg";
import person from "../images/person-circle.svg";
import TextBox from "../Support-Components/TextBox";
// import house1 from "../images/house-door.svg";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-app-name">
          <h1>
            Family Recipes{" "}
            <img
              alt="Cool image here"
              src="https://www.figma.com/file/bEj7F8B8zmYdYXMBFwqKZc/Family-Recipe-App?type=design&node-id=15-541&mode=design&t=A37hm7zjQ2nOxSHg-4"
            ></img>
          </h1>
        </div>

        <div className="header-links">
          {" "}
          <TextBox
            placeholder="Search Recipes..."
            style={{ backgroundColor: "white", fontSize: "1.2em", marginRight: "20px" }}
          />{" "}
          <button
            onClick={() => this.props.changeView("home")}
            className="header-link"
            style={{boxShadow: this.props.view === "home" ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "", backgroundColor: this.props.view === "home" ? "#92e2c8" : "", }}
          >
            <img src={house1} />
            Home
          </button>
          <button
            onClick={() => this.props.changeView("feed")}
            className="header-link"
            style={{boxShadow: this.props.view === "feed" ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "", backgroundColor: this.props.view === "feed" ? "#92e2c8" : "", }}

          >
            {" "}
            <img src={window} />
            Feed
          </button>
          {/* <button
            onClick={() => this.props.changeView("browse")}
            className="header-link"
          >
            <img src={house1} /> Browse
          </button> */}
          <button
            onClick={() => this.props.changeView("account")}
            className="header-link"
            style={{boxShadow: this.props.view === "account" ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "", backgroundColor: this.props.view === "account" ? "#92e2c8" : "", }}

          >
            <img src={person} /> Account
          </button>
        </div>
      </div>
    );
  }
}
