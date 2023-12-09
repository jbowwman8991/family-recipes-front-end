import React, { Component } from "react";
import TextBox from "../Support-Components/TextBox";
import Button from "../Support-Components/Button";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      register: false,
      error: null
    };
  }

    async loginUser() {
        this.setState({error: null})
        const body = {
            username: this.state.username,
            password: this.state.password,
        }
        return await this.props.makeRESTCall(this.props.restURL+"user/login", "POST", body, (res) => {
            if (res.error) {
                this.setState({error: res.message})
                return;
            }
            this.props.authenticateUser(res.data);
        }, () => {}, () => {});
    }

    async registerUser() {
        this.setState({error: null})
        const body = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
        }
        return await this.props.makeRESTCall(this.props.restURL+"user/register", "POST", body, async (res) => {
            if (res.error) {
                this.setState({error: res.message})
                return
            }
            this.loginUser();
        }, () => {}, () => {});
    }


  render() {
    // probably better to just have actual if blocks at this point...
    // but this works
    return (
      <div className="loginpage">
        <div className="box text">
          <h2>{this.state.register && "Sign up " || "Sign in "}to start cooking!</h2>

          <TextBox
            onChange={(e) => this.setState({ username: e.target.value })}
            placeholder="Username"
          ></TextBox>

          <div className="undertextbox">
            <TextBox
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="Password"
              type="password"
            ></TextBox>
          {!this.state.register && <a className="link">Forgot Password?</a>}
          </div>

          {this.state.register &&
          <>
            <div className="undertextbox">
             <TextBox
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Name" />
            </div>
            <div className="undertextbox">
             <TextBox
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email" />
            </div>
          </>
          }

          {this.state.error &&
          <span className="login-error">{this.state.error}</span>
          }
        
          <div className="login-buttons">
            <Button onClick={async () => {
              if (this.state.register) {
                  await this.registerUser()
              } else {
                this.loginUser();
              }
            }}> {this.state.register && "Sign up" || "Log In"}
            </Button>
            {!this.state.register &&
              (
                <Button className="button-secondary" onClick={() => this.setState({register: true})}>Register</Button>
              ) || 
              (
                <Button className="button-secondary" onClick={() => this.setState({register: false})}>Back to login</Button>
              )
            }
          </div>

        </div>
      </div>
    );
  }
}
