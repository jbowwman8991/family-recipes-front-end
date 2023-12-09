import React, { Component } from 'react';
import { Home, Menu } from './Family-Recipes-Components/Home';
import './css/FamilyRecipes.css';
import { Feed } from './Family-Recipes-Components/Feed';
import { Browse } from './Family-Recipes-Components/Browse';
import { Account } from './Family-Recipes-Components/Account';
import { Recipe } from './Family-Recipes-Components/Recipe';
import { NewRecipe } from './Family-Recipes-Components/NewRecipe';

export class FamilyRecipes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.view == "home"
                    &&
                    <Home
                        changeView={this.props.changeView}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                    />
                }
                {
                    this.props.view == "feed"
                    &&
                    <Feed
                        changeView={this.props.changeView}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                    />
                }
                {
                    this.props.view == "browse"
                    &&
                    <Browse
                        changeView={this.props.changeView}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                    />
                }
                {
                    this.props.view == "account"
                    &&
                    <Account
                        changeView={this.props.changeView}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                        logout={this.props.logout}
                    />
                }
                {
                    this.props.view == "recipe"
                    &&
                    <Recipe
                        changeView={this.props.changeView}
                        activeRecipe={this.props.activeRecipe}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                    />
                }
                {
                    this.props.view == 'new-recipe'
                    &&
                    <NewRecipe
                        changeView={this.props.changeView}
                        makeRESTCall={this.props.makeRESTCall}
                        restURL={this.props.restURL}
                        user={this.props.user}
                    />
                }
            </div>
        );
    }
}
