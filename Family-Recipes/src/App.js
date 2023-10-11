import React, { Component } from 'react';
import { FamilyRecipes } from './FamilyRecipes';
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: true,
            userId: 'ben',
            userName: 'BenCook'
        };
        this.authenticateUser = this.authenticateUser.bind(this);
        this.makeRESTCall = this.makeRESTCall.bind(this);
    }

    authenticateUser(userId, userName, userPermissions, appPermissions) {
        this.setState({
            isAuthorized: true,
            userId: userId,
            userName: userName,
            userPermissions: userPermissions,
            appPermissions: appPermissions
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
                <div>
                    <FamilyRecipes
                    />
                </div>
            )
        }  
    }
}
