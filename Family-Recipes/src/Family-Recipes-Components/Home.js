import React, { Component } from 'react';
import { HomeMenu } from './HomeMenu';
import { RecipeSearch } from './RecipeSearch';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-view">
                <div class-name="grid-home-menu">
                    <HomeMenu
                    />
                </div>
                <div className="grid-recipe-search">
                    <RecipeSearch
                    />
                </div>
            </div>
        );
    }
}