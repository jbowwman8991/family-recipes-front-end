import React, { Component } from 'react';
import { RecipeLink } from './RecipeLink';

export class RecipeList extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        var recipes = [
            {
                name: "Chicken Noodle Soup"
            }
        ];
        var changeViewFunction = this.props.changeView;
        return (
            <div className="recipe-list">
                <h2>{this.props.recipeType}</h2>
                {
                    recipes.map(function (recipe, idx) {
                        console.log("RECIPE", recipe);
                        return (
                            <div key={idx}>
                                <RecipeLink
                                    name={recipe.name}
                                    changeView={changeViewFunction}
                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}