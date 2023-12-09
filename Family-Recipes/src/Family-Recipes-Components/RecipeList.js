import React, { Component } from "react";
import { RecipeLink } from "./RecipeLink";
import chickennoodle from "../images/chickennoodle.png"

export class RecipeList extends Component {
  constructor(props) {
      super(props);
    }


  render() {
    var recipes = [
      {
        name: "Chicken Noodle Soup",
      },
    ];
    var changeViewFunction = this.props.changeView;
    return (
        <div className="recipe-list">
            <button onClick={this.props.backToList}>Back</button>
        <div className="category-header">
          <img src={this.props.image} />
          <h2>{this.props.recipeType}</h2>
        </div>
        {recipes.map(function (recipe, idx) {
          console.log("RECIPE", recipe);
          return (
            <div key={idx}>
              <RecipeLink name={recipe.name} changeView={changeViewFunction} image={chickennoodle}/>
            </div>
          );
        })}
      </div>
    );
  }
}
