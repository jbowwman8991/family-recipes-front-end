import React, { Component } from 'react';

export class RecipeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            < div className='recipe-page' >
                <button onClick={this.props.startEdit}>Edit Recipe</button>
                <button onClick={this.props.deleteRecipe}>Delete Recipe</button>
                <h1>Chicken Noodle Soup</h1>
                <h2>A delicious meal you cant resist</h2>
                <ul>
                    <li>Chicken</li>
                    <li>Noodles</li>
                    <li>Soup</li>
                </ul>
                <ol>
                    <li>Boil water</li>
                    <li>Add chicken</li>
                    <li>Add noodles</li>
                    <li>Add soup</li>
                    <li>Enjoy!</li>
                </ol>
            </div >
        );
    }
}