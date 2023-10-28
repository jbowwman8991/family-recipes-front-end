import React, { Component } from 'react';
import { RecipeType } from './RecipeType';

export class RecipeTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='recipe-types'>
                <RecipeType
                    recipeType="Soups"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Pasta"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Breakfast"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Salad"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Sandwich"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Casserole"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Pot Roast"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Entree"
                    updateRecipeType={this.props.updateRecipeType}
                />
                <RecipeType
                    recipeType="Lunch"
                    updateRecipeType={this.props.updateRecipeType}
                />
            </div>
        );
    }
}