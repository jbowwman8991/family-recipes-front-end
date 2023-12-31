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
            user: null,
            view: "home",
            activeRecipe: "",
            restURL: "https://recipes-99rp.onrender.com/"
            //restURL: "http://127.0.0.1:5000/",
        };
        this.changeView = this.changeView.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.makeRESTCall = this.makeRESTCall.bind(this);
        this.logout = this.logout.bind(this);
    }

    changeView(view,activeRecipe="") {
        this.setState({
            view: view,
            activeRecipe: activeRecipe
        });
    }


    authenticateUser(user) {
        this.setState({
            isAuthorized: true,
            user: user
        })

        /*
        await this.makeRESTCall(this.state.restURL + 'user/login', 'POST', {username, password},
            (res) => {
                if (res.error) {
                    console.log(res);
                    alert("There was an error logging in: " + res.message);
                    console.log('appstate', this.state);
                    return;
                }
                this.setState({
                    isAuthorized: true,
                    user: {
                        //username: "btc36",
                        //email: "test@test.com",
                        //name: "Ben Cook"
                        username: res.data.username,
                        email: res.data.email,
                        name: res.data.name,
                    }
                });
            },
            (error) => {
                if (error == "Unauthorized") {
                    alert("Incorrect Username or Password");
                }
                else {
                    alert("There was an error logging in" + error);
                }
            },
            () => { })
        */
    }
    
    logout() {
        this.setState({
            isAuthorized: false,
            user: null,
            view: "home",
        });
    }

    async makeRESTCall(URL, method, body, responseFunction, errorFunction, finalFunction) {
        var fetchParameters = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                mode: "cors",
                credentials: "include"
            }
        }
        if (body) {
            fetchParameters.body = JSON.stringify(body);
        }
        await fetch(URL, fetchParameters).then(response => {
                return response.json();
        }).then((responseInfo) => {
            return responseFunction(responseInfo);
        }).catch((error) => {
            /* if (error == "Unauthorized") {
                console.log("UNATHORIZED");
                alert("Session Timeout: Your session has timed out and you will need to log in again");
                //this.logout();
                //Log them out, they are unauthorized
            }
            else if (error.message == "Failed to fetch") {
                errorFunction("Unknown Error", "There was an Network error. Check your internet connection and try again");
            } else {
                errorFunction("Unknown Error", error);
            } */
            return errorFunction(error);
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
                        view={this.state.view}
                    />
                    <FamilyRecipes
                        view={this.state.view}
                        changeView={this.changeView}
                        makeRESTCall={this.makeRESTCall}
                        restURL={this.state.restURL}
                        user={this.state.user}
                        logout={this.logout}
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
