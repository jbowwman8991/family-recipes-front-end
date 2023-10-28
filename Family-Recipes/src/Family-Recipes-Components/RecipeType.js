import React, { Component } from 'react';

export class RecipeType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recipe-type" onClick={() => { this.props.updateRecipeType(this.props.recipeType) }}>
                <h1>{this.props.recipeType}</h1>
            </div>
        );
    }
}