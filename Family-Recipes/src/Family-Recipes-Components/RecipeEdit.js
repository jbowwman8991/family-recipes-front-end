import React, { Component } from 'react';

export class RecipeEdit extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const recipe = {
            title: formData.get('recipe-name'),
            description: formData.get('description'),
            ingredients: formData.get('ingredients').split('\n'),
            instructions: formData.get('instructions')
        };
        this.props.saveRecipe(recipe);
    }

    render() {
        console.log(this.props.recipe);

        return (
            <div className='recipe-edit-page'>
                <button onClick={this.props.cancelEdit }>Back</button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='recipe-name'>Recipe Name:</label>
                    <input type='text' id='recipe-name' name='recipe-name' defaultValue={this.props.recipe.title} /><br />

                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' name='description' defaultValue={this.props.recipe.description}></textarea><br />

                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea id='ingredients' name='ingredients' defaultValue={this.props.recipe.ingredients.toString()}></textarea><br />

                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea id='instructions' name='instructions' defaultValue={this.props.recipe.instructions}></textarea><br />
                    
                    <button type='submit'>Save</button>   
                </form>
            </div>
        );
    }
}