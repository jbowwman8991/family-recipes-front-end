import React, { Component } from 'react';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header-app-name">
                    <h1>Family Recipes <img alt="Cool image here" src="https://www.figma.com/file/bEj7F8B8zmYdYXMBFwqKZc/Family-Recipe-App?type=design&node-id=15-541&mode=design&t=A37hm7zjQ2nOxSHg-4"></img></h1>
                </div>
                <div className="header-links">
                    <button onClick={() => this.props.changeView("home")}>Home</button>
                    <button onClick={() => this.props.changeView("feed")}>Feed</button>
                    <button onClick={() => this.props.changeView("browse")}>Browse</button>
                    <button onClick={() => this.props.changeView("account")}>Account</button>
                </div>
            </div>
        );
    }
}
