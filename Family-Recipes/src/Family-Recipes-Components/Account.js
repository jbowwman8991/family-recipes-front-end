import React, { Component } from 'react';
import Button from '../Support-Components/Button';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            posts: []
        }
        this.getUserPosts();
    }

    async getUserPosts() {
        await this.props.makeRESTCall(this.props.restUrl+`/posts/user/${this.state.user.username}`,"GET",null, (res) => {
            if (res.error) {
                console.log("getfeedError:", res);
                return;
            }
            this.setState({posts: res.data})
            console.log(this.state.posts);
        }, ()=>{},()=>{})
    }

    render() {
        return (
            <div className="account-view">
                <h2>Account Page</h2>
                <h4>User Info</h4>
                <ul>
                    <li>Username: {this.state.user.username}</li>
                    <li>Email: {this.state.user.email}</li>
                    <li>Name: {this.state.user.name}</li>
                </ul>
                <Button
                  onClick={() => this.props.logout()}
                >
                    Log out
                </Button>
            <h4>Your posts:</h4>
            {this.state.posts.length > 0 && this.state.posts.map((item) => {
                // once we have a post component
                //<Post post={item} />
            }) || (<span>You have no posts!</span>)
            }
            </div>

        );
    }
}
