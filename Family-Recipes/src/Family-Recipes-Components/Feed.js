import React, { Component } from 'react';

export class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes:[]
        }
        this.getAllRecipes = this.getAllRecipes.bind(this);
        this.getAllRecipes();
    }

    async getAllRecipes() {
        await this.props.makeRESTCall(
            this.props.restURL + "recipe",
            'get',
            null,
            (getAllRecipesResponse) => {
                console.log("getAllRecipesResponse", getAllRecipesResponse);
                this.setState({
                    recipes: getAllRecipesResponse.data
                })
            },
            (title, error) => {
                console.error('Error:', error);
                alert("THERE WAS AN ERROR Getting the Recipes");
            },
            () => {
                //this.stopLoading();
            }
        );
    }

    async deleteRecipe(recipeId) {
        await this.props.makeRESTCall(
            this.props.restURL + "recipe/" + recipeId,
            'delete',
            null,
            (deleteRecipeResponse) => {
                console.log("deleteRecipeResponse", deleteRecipeResponse);
                this.getAllRecipes();
            },
            (title, error) => {
                console.error('Error:', error);
                alert("THERE WAS AN ERROR Deleting the Recipe");
            },
            () => {
                //this.stopLoading();
            }
        );
    }

    render() {
        return (
            <div>
                <h2>Feed Page</h2>
                {
                    this.state.recipes.map((recipe, index) => {
                    return (
                        <div className="feed-recipe" key={recipe.recipeId}>
                            <button onClick={() => { this.deleteRecipe(recipe.recipeId)}}>Delete {recipe.title}</button>
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                                <p>Difficulty: {recipe.difficultyLevel}</p>
                                <ul>
                                    {
                                        recipe.ingredients.map((ingredient, index) => {
                                            return (
                                                <li key={index}>{ingredient}</li>
                                            );
                                        })
                                    }
                                </ul>
                                <p>Instructions: {recipe.instructions}</p>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}