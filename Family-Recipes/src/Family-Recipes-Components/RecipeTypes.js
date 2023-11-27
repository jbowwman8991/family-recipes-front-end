import React, { Component } from 'react';
import { RecipeType } from './RecipeType';
import bbq from '../images/B-B-Q.png'
import burger from '../images/burger.png'
import chefhat from '../images/chefhat.png'
import cutler from '../images/cutler.png'
import dish1 from '../images/dish-1.png'
import dish3 from '../images/dish-3.png'
import friedeggs from '../images/friedeggs.png'
import noodles from '../images/noodles.png'
import toast from '../images/toast.png'


export class RecipeTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='recipe-types'>
                <RecipeType
                    recipeType="Soups"
                    updateRecipeType={this.props.updateRecipeType}
                    image={noodles}
                />
                <RecipeType
                    recipeType="Pasta"
                    updateRecipeType={this.props.updateRecipeType}
                    image={cutler}
                />
                <RecipeType
                    recipeType="Breakfast"
                    updateRecipeType={this.props.updateRecipeType}
                    image={friedeggs}
                />
                <RecipeType
                    recipeType="Salad"
                    updateRecipeType={this.props.updateRecipeType}
                    image={dish1}
                />
                <RecipeType
                    recipeType="Sandwich"
                    updateRecipeType={this.props.updateRecipeType}
                    image={toast}
                />
                <RecipeType
                    recipeType="Casserole"
                    updateRecipeType={this.props.updateRecipeType}
                    image={dish3}
                />
                <RecipeType
                    recipeType="Pot Roast"
                    updateRecipeType={this.props.updateRecipeType}
                    image={bbq}
                />
                <RecipeType
                    recipeType="Entree"
                    updateRecipeType={this.props.updateRecipeType}
                    image={chefhat}
                />
                <RecipeType
                    recipeType="Lunch"
                    updateRecipeType={this.props.updateRecipeType}
                    image={burger}
                />
            </div>
        );
    }
}