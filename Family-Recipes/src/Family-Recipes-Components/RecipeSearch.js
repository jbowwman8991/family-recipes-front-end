import React, { Component } from 'react';
import { RecipeList } from './RecipeList';
import { RecipeTypes } from './RecipeTypes';

export class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeType: ""
        }
        this.updateRecipeType = this.updateRecipeType.bind(this);
    }

    updateRecipeType(recipeType) {
        this.setState({
            recipeType: recipeType
        });
    }

    render() {
        return (
            <div className="recipe-search">
                <div>
                    <button onClick={() => {this.props.changeView('new-recipe')}}>Create New Recipe +</button>
                    <h3>Search for a Recipe</h3>
                    <input></input> <p>View all</p>
                </div>
                {
                    this.state.recipeType
                    ?
                    <div>
                        < RecipeList
                            recipeType={this.state.recipeType}
                            changeView={this.props.changeView}
                        />
                    </div>
                    :
                    <div>
                        <RecipeTypes
                            updateRecipeType={this.updateRecipeType}
                        />
                    </div>
                }
            </div>
        );
    }
}