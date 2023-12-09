import React, { Component } from 'react';
import { RecipeEdit } from './RecipeEdit';
import { RecipeView } from './RecipeView';

export class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'view'
        }
        this.startEdit = this.startEdit.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this)
        this.backToList = this.backToList.bind(this);
    }

    startEdit() {
        this.setState({
            mode: 'edit'
        })
    }

    deleteRecipe() {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            alert('Recipe deleted');
            this.props.changeView("home");
        }
    }

    saveRecipe(e) {
        alert('Recipe saved');
        this.setState({
            mode: 'view'
        })
    }

    cancelEdit() {
        this.setState({
            mode: 'view'
        });
    }

    backToList() {
        this.props.changeView("home");
    }



    render() {
        return (
            <div className="recipe-page">
                {
                    this.state.mode === 'view'
                    &&
                    <RecipeView
                        startEdit={this.startEdit}
                        deleteRecipe={this.deleteRecipe}
                        backToList={this.backToList}
                    />
                }
                {
                    this.state.mode == 'edit'
                    &&
                    <RecipeEdit
                        saveRecipe={this.saveRecipe}
                        cancelEdit={this.cancelEdit}
                    />
                }
            </div>
        );
    }
}