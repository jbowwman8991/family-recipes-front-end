import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <button onClick={this.props.authenticateUser}>Log In</button>
            </div>
        );
    }
}