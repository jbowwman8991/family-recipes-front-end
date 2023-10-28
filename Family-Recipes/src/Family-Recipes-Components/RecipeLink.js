import React, { Component } from 'react';

export class RecipeLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("RECIPE LINK", this.props);
        return (
            <div className='recipe-link' onClick={() => {this.props.changeView('recipe',1234)}}>
                <h2>{this.props.name}</h2>

            </div>
        );
    }
}