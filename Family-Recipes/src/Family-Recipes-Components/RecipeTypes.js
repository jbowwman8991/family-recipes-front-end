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
                />
                <RecipeType
                    recipeType="Pasta"
                />
                <RecipeType
                    recipeType="Breakfast"
                />
                <RecipeType
                    recipeType="Salad"
                />
                <RecipeType
                    recipeType="Sandwich"
                />
                <RecipeType
                    recipeType="Casserole"
                />
                <RecipeType
                    recipeType="Pot Roast"
                />
                <RecipeType
                    recipeType="Entree"
                />
                <RecipeType
                    recipeType="Lunch"
                />
            </div>
        );
    }
}