import React, { Component } from 'react';
import Button from '../Support-Components/Button';

export class HomeMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", gap: "1em", padding: "1em"}}>
                <Button style={{width: "200px"}} onClick={() => this.props.changePage("my-recipes")}>My Recipes</Button>
                <Button style={{width: "200px"}} onClick={() => this.props.changePage("families")}>Families</Button>
            </div>
        );
    }
}