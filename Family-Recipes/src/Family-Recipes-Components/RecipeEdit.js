import React, { Component } from 'react';

export class RecipeEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='recipe-page'>
                <button onClick={this.props.cancelEdit }>Back</button>
                <form onSubmit={(e) => { e.preventDefault(); this.props.saveRecipe(); } }> <label htmlFor='recipe-name'>Recipe Name:</label> <input type='text' id='recipe-name' name='recipe-name' defaultValue='Chicken Noodle Soup' /><br />
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' name='description' defaultValue='A delicious meal you cant resist'></textarea><br />

                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea id='ingredients' name='ingredients' defaultValue='Chicken&#13;&#10;Noodles&#13;&#10;Soup'></textarea><br />

                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea id='instructions' name='instructions' defaultValue='Boil water&#13;&#10;Add chicken&#13;&#10;Add noodles&#13;&#10;Add soup&#13;&#10;Enjoy!'></textarea><br />

                    <button onClick={()=>{this.props.saveRecipe()}} type='submit'>Save</button>
                </form>
            </div>
        );
    }
}