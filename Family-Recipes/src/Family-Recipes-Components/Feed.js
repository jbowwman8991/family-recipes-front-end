import React, { Component } from 'react';

export class Feed extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var recipes = [
            {
                name: "Nates famous chicken noodle",
                description: "A medium challenging chicken noodle soup that will knock your socks off",
                ingredients: [
                    '1/2 cup chopped onion',
                    '1 cup noodles',
                    '1 cup veggies',
                    '1/2 cup of water'
                ]
            },
            {
                name: "Nates famous chicken noodle",
                description: "A medium challenging chicken noodle soup that will knock your socks off",
                ingredients: [
                    '1/2 cup chopped onion',
                    '1 cup noodles',
                    '1 cup veggies',
                    '1/2 cup of water'
                ]
            },
             {
                name: "Nates famous chicken noodle",
                description: "A medium challenging chicken noodle soup that will knock your socks off",
                ingredients: [
                    '1/2 cup chopped onion',
                    '1 cup noodles',
                    '1 cup veggies',
                    '1/2 cup of water'
                ]
            }
        ];
        return (
            <div>
                <h2>Feed Page</h2>
                {
                    recipes.map((recipe, index) => {
return (
                            <div key={index}>
                                <h3>{recipe.name}</h3>
                                <p>{recipe.description}</p>
                                <ul>
                                    {
                                        recipe.ingredients.map((ingredient, index) => {
                                            return (
                                                <li key={index}>{ingredient}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}