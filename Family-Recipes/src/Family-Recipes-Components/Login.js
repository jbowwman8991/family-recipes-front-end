import React, { Component } from "react";
import TextBox from "../Support-Components/TextBox";
import Button from "../Support-Components/Button";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <div className="loginpage">
        <div className="box text">
          <h2>Sign in to start cooking!</h2>
          <TextBox
            //   value={this.state.username}
            //   onChange={(e) => this.setState({ username: e.target.value })}
            placeholder="Username"
          ></TextBox>
          <div className="undertextbox">
            <TextBox
              //   value={this.state.username}
              //   onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="Password"
              type="password"
            ></TextBox>
            <a className="link">Forgot Password?</a>
          </div>

          <Button onClick={this.props.authenticateUser}>Log In</Button>

          <p>
            Don't have an account? Create one <a className="link">here</a>
          </p>
        </div>
      </div>
    );
  }
}
