import React, { Component } from 'react';
import { Header } from './Family-Recipes-Components/Header';
import { Login } from './Family-Recipes-Components/Login';
import { FamilyRecipes } from './FamilyRecipes';
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
            userId: 'ben',
            userName: 'BenCook',
            view: "home",
            activeRecipe: "",
            restURL: "https://recipes-99rp.onrender.com/"
        };
        this.changeView = this.changeView.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.makeRESTCall = this.makeRESTCall.bind(this);
    }

    changeView(view,activeRecipe="") {
        this.setState({
            view: view,
            activeRecipe: activeRecipe
        });
    }


    authenticateUser() {
        this.setState({
            isAuthorized: true
        });
    }

    async makeRESTCall(URL, method, body, responseFunction, errorFunction, finalFunction) {
        var fetchParameters = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
        if (body) {
            fetchParameters.body = JSON.stringify(body);
        }
        await fetch(URL, fetchParameters).then(response => {
            if (!response.ok) {
                console.log("ERROR:", response);
                if (response.status == 401) {
                    return Promise.reject("Unauthorized");
                }
                else {
                    return Promise.reject("Unknown Error - Please contact I.T.");
                }
            }
            else {
                return response.json();
            }
        }).then((responseInfo) => {
            return responseFunction(responseInfo);
        }).catch((error) => {
            if (error == "Unauthorized") {
                console.log("UNATHORIZED");
                alert("Session Timeout: Your session has timed out and you will need to log in again");
                this.logout();
                //Log them out, they are unauthorized
            }
            else if (error.message == "Failed to fetch") {
                errorFunction("Unknown Error", "There was an Network error. Check your internet connection and try again");
            } else {
                errorFunction("Unknown Error", error);
            }
        }).finally(() => {
            finalFunction();
        });
    }


    render() {
        if (this.state.isAuthorized) {
            return (
                <div className="main-app">
                    <Header
                        changeView={this.changeView}
                    />
                    <FamilyRecipes
                        view={this.state.view}
                        changeView={this.changeView}
                        makeRESTCall={this.makeRESTCall}
                        restURL={this.state.restURL}
                    />
                </div>
            )
        }
        else {
            return (
                <div className="authentication-pages">
                    <Login
                        authenticateUser={this.authenticateUser}
                        makeRESTCall={this.makeRESTCall}
                        restURL={this.state.restURL}
                    />
                </div>
            );
        }
    }
}
