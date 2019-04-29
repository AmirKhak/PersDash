import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
var request = require('request');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    switch (propertyName) {
      case 'Username':
        this.setState({username: event.target.value});
        break;
      case 'Password':
        this.setState({password: event.target.value});
        break;
      default:  
    }
  }

  handleSubmit(event) {
    request.post('http://localhost:3001/login').form(
      JSON.stringify({username: this.state.username, password:this.state.password }));
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state['username']}
              onChange={this.handleChange.bind(this, "Username")} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state['password']}
              onChange={this.handleChange.bind(this, "Password")} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <a href="/register">Sign Up</a>
      </div>
    )
  }
}

export default Login;
