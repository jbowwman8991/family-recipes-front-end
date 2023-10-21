import React, { Component } from 'react';
import { Home, Menu } from './Family-Recipes-Components/Home';
import './css/FamilyRecipes.css';
import { Feed } from './Family-Recipes-Components/Feed';
import { Browse } from './Family-Recipes-Components/Browse';
import { Account } from './Family-Recipes-Components/Account';

export class FamilyRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view:"mainPage"
        };
    }

    render() {
        return (
            <div>
                {
                    this.props.view == "home"
                    &&
                    <Home
                    />
                }
                {
                    this.props.view == "feed"
                    &&
                    <Feed

                    />
                }
                {
                    this.props.view == "browse"
                    &&
                    <Browse
                    />
                }
                {
                    this.props.view == "account"
                    &&
                    <Account
                    />
                }
            </div>
        );
    }
}