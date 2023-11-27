import React, { Component } from "react";
import { RecipeList } from "./RecipeList";
import { RecipeTypes } from "./RecipeTypes";
import Button from "../Support-Components/Button";
import TextBox from "../Support-Components/TextBox";

export class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeType: "",
    };
    this.updateRecipeType = this.updateRecipeType.bind(this);
  }

  updateRecipeType(recipeType, image) {
    this.setState({
      recipeType: recipeType,
      image: image,
    });
  }

  render() {
    return (
      <div className="recipe-search">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1em 0em",
            position: "relative",
          }}
        >
          <Button
            onClick={() => {
              this.props.changeView("new-recipe");
            }}
            style={{ position: "absolute", right: "1em", top: "0" }}
          >
            Create New Recipe +
          </Button>
          {/* <h3>Search for a Recipe</h3> */}
    
        </div>
        {this.state.recipeType ? (
          <RecipeList
            recipeType={this.state.recipeType}
            changeView={this.props.changeView}
            image={this.state.image}
          />
        ) : (
          <RecipeTypes updateRecipeType={this.updateRecipeType} />
        )}
      </div>
    );
  }
}
