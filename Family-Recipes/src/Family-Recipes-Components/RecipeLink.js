import React, { Component } from "react";

export class RecipeLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("RECIPE LINK", this.props);
    return (
      <div
        className="recipe-link"
        onClick={() => {
          this.props.changeView("recipe", 1234);
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="recipe-link-header">
          <h2 className="recipe-link-h2">{this.props.name}</h2>
          <div className="recipe-link-header-subitems">
            <span>Ingredients:</span>
            <span>Avg Cook Time:</span>
          </div>
        </div>
        <div className="recipe-link-image">
          <img
            src={this.props.image}
            style={{ width: "360px" }}
          />
        </div>
      </div>
    );
  }
}
