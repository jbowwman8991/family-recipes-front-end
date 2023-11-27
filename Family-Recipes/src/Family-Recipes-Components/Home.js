import React, { Component } from "react";
import { HomeMenu } from "./HomeMenu";
import { RecipeSearch } from "./RecipeSearch";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "my-recipes",
    };
  }

  getAllRecipes;


  changePage(page) {
    this.setState({
      page: page,
    });
  }

  render() {
    return (
      <div className="home-view">
        <HomeMenu page={this.state.page} changePage={this.changePage} />

        {this.state.page === "my-recipes" && (
          <RecipeSearch changeView={this.props.changeView} />
        )}
        {this.state.page === "families" && <div>Family Groups Page</div>}
      </div>
    );
  }
}
