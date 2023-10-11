import React, { Component } from 'react';
import { Menu } from './Family-Recipes-Components/Menu';
import './css/FamilyRecipes.css';

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
                    this.state.view == "mainPage"
                    &&
                    <Menu />
                }
            </div>
        );
    }
}