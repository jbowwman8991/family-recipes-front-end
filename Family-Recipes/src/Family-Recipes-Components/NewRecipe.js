import React, { Component } from 'react';
import { RecipeEdit } from './RecipeEdit';

export class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            title: "",
            description: "",
            ingredients: [],
            instructions: "",
            difficultyLevel: "Easy",
            imageId: 1234,
            foodType: "Pasta",
            recipeSource: "string"
        }
        this.updateValue = this.updateValue.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.startLoading = this.startLoading.bind(this);
        this.stopLoading = this.stopLoading.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.saveRecipeCallback = this.saveRecipeCallback.bind(this);
    }

    updateValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateIngredients(e) {
        var ingredients = e.target.value.split(",");
        this.setState({
            ingredients: ingredients
        });
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    stopLoading() {
        this.setState({
            loading: false
        })
    }


    saveRecipe() {
        if (this.state.loading) {
            return;
        }
        this.startLoading();
        setTimeout(this.saveRecipeCallback);
    }

    async saveRecipeCallback() {

        var postBody = {
            title: this.state.title,
            description: this.state.description,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            difficultyLevel: this.state.difficultyLevel,
            imageId: this.state.imageId,
            foodType: this.state.foodType,
            recipeSource: this.state.recipeSource
        };
        await this.props.makeRESTCall(
            this.props.restURL,
            'post',
            postBody,
            (createNewRecipeResponse) => {
                console.log("createNewRecipeResponse", createNewRecipeResponse);
                alert("RECIPE SAVED");
                this.props.changeView('home');
            },
            (title, error) => {
                console.error('Error:', error);
                alert("THERE WAS AN ERROR SAVING THE RECIPE");
            },
            () => {
                this.stopLoading();
            }
        );
    }


    render() {
        console.log("STATE", this.state)
        return (
            <div >
                <h1>Create New Recipe</h1>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <label htmlFor='recipe-name'>Recipe Name:</label>
                    <input type='text' id='recipe-name' name='title' onChange={(e) => { this.updateValue(e) }} value={this.state.title} /><br />
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' name='description' onChange={(e) => { this.updateValue(e) }} value={this.state.description}></textarea><br />

                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea id='ingredients' name='ingredients' onChange={(e) => { this.updateIngredients(e) }} value={this.state.ingredients.toString()}></textarea><br />

                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea id='instructions' name='instructions' onChange={(e) => { this.updateValue(e) }} value={this.state.instructions}></textarea><br />

                    <button onClick={() => { this.saveRecipe() }} type='submit'>Save</button>
                </form>
            </div>
        );
    }
}