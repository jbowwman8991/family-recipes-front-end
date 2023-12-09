import React, { Component } from 'react';
import { RecipeEdit } from './RecipeEdit';

export class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            editMode: false,
            editedRecipe: null
        }
        this.getAllRecipes = this.getAllRecipes.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.startEditRecipe = this.startEditRecipe.bind(this);
        this.submitRecipe = this.submitRecipe.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
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

    startEditRecipe(recipe) {
        this.setState({
        editMode: true,
            editedRecipe: recipe
        })
    }

    async submitRecipe(recipe) {
        //delete old recipe
        await this.props.makeRESTCall(
            this.props.restURL + "recipe/" + this.state.editedRecipe.recipeId,
            'delete',
            null,
            (deleteRecipeResponse) => {
                console.log("deleteRecipeResponse", deleteRecipeResponse);
            },
            (title, error) => {
                console.error('Error:', error);
                alert("THERE WAS AN ERROR Deleting the Recipe");
            },
            () => {
                //this.stopLoading();
            }
        );
        await this.props.makeRESTCall(
            this.props.restURL + "recipe",
            'post',
            recipe,
            (submitRecipeResponse) => {
                console.log("submitRecipeResponse", submitRecipeResponse);
                this.getAllRecipes();
            },
            (title, error) => {
                console.error('Error:', error);
                alert("THERE WAS AN ERROR Submitting the Recipe");
            },
            () => {
                //this.stopLoading();
                this.setState({
                    editMode: false,
                    editedRecipe: null
                })
            }
        );
        this.getAllRecipes();
    }

    cancelEdit() {
        this.setState({
            editMode: false,
            editedRecipe: null
        })
    }


    render() {
        if (this.state.editMode) {
            return (

                <div>
                    <RecipeEdit
                        recipe={this.state.editedRecipe}
                        saveRecipe={this.submitRecipe}
                        cancelEdit={this.cancelEdit}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Feed Page</h2>
                    {
                        this.state.recipes.map((recipe, index) => {
                            return (
                                <div className="feed-recipe" key={recipe.recipeId}>
                                    <button onClick={() => { this.deleteRecipe(recipe.recipeId) }}>Delete {recipe.title}</button>
                                    <button onClick={() => { this.startEditRecipe(recipe) }}>Edit</button>
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
}