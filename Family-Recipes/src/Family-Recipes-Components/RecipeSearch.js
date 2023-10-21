import React, { Component } from 'react';
import { RecipeTypes } from './RecipeTypes';

export class RecipeSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recipe-search">
                <div>
                    <h3>Search for a Recipe</h3>
                    <input></input> <p>View all</p>
                </div>
                <div>
                    <RecipeTypes
                    />
                </div>
            </div>
        );
    }
}