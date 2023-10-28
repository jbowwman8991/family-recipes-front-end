import React, { Component } from 'react';
import { RecipeEdit } from './RecipeEdit';

export class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.saveRecipe = this.saveRecipe.bind(this);
    }

    saveRecipe() {
        alert("RECIPE SAVED");
        this.props.changeView('home');
    }


    render() {
        return (
            <div >
                <h1>Create New Recipe</h1>
                <form onSubmit={(e) => { e.preventDefault();}}> <label htmlFor='recipe-name'>Recipe Name:</label> <input type='text' id='recipe-name' name='recipe-name' defaultValue='' /><br />
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' name='description' defaultValue=''></textarea><br />

                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea id='ingredients' name='ingredients' defaultValue=''></textarea><br />

                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea id='instructions' name='instructions' defaultValue=''></textarea><br />

                    <button onClick={() => { this.saveRecipe() }} type='submit'>Save</button>
                </form>
            </div>
        );
    }
}