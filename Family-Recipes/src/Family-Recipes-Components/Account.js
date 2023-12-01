import React, { Component } from 'react';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div className="account-view">
                <h2>Account Page</h2>
                <h4>User Info</h4>
                <ul>
                    <li>{this.state.user.username}</li>
                    <li>{this.state.user.email}</li>
                    <li>{this.state.user.name}</li>
                </ul>
            </div>

        );
    }
}
