import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
var request = require('request-promise');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  message: 'message'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    this.setState({message: propertyName});
    switch (propertyName) {
      case 'Username':
        this.setState({username: event.target.value});
        break;
      case 'Email':
        this.setState({email: event.target.value});
        break;
      case 'Password':
        this.setState({password: event.target.value});
        break;
      case 'ConfirmPassword':
        this.setState({confirmPassword: event.target.value});
        break;
      default:
    }
  }

  componentDidMount() {

  }

  handleSubmit(event) {
    var form = {
      method: 'POST',
      uri: 'http://localhost:3001/register',
      form: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }),
      resolveWithFullResponse: true,
      'Access-Control-Allow-Origin': 'http://localhost:3001/register'
    };
    // var data = {
    //   username: this.state.username,
    //   email: this.state.email,
    //   password: this.state.password,
    //   confirmPassword: this.state.confirmPassword
    // };
    // request.post({url: 'http://localhost:3001/register', form:
    //   JSON.stringify({
    //     username: this.state.username,
    //     email: this.state.email,
    //     password: this.state.password,
    //     confirmPassword: this.state.confirmPassword
    //   })}, (error, response, body) => {
        // var resp = []
        // for (var key in error) {
        //   resp.push(key + " ");
        // }
    //     if (error == null) {
    //       resp.push("error == null");
    //     }
    //     if (response == null) {
    //       resp.push("response == null");
    //     }
    //     if (body == null) {
    //       resp.push("body == null");
    //     }
    //     this.setState({message: resp});
    //   });
    request(form).then(response => {
      this.setState({message: 'err'});
    }).catch(err => {
      var resp = []
      for (var key in err.options) {
        resp.push(key + " ");
      }
      console.log(err);
      this.setState({message: err.simple + resp});
    });
    // var form = new FormData();
    // form.set('username', this.state.username);
    // form.set('email', this.state.email);
    // form.set('password', this.state.password);
    // form.set('confirmPassword', this.state.confirmPassword);
    // this.setState({message: JSON.stringify(form)});
    // axios({
    //   method: 'post',
    //   uri: 'http://localhost:3001/register',
    //   data: form,
    //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    // })
    // axios.post('http://localhost:3001/register', JSON.stringify(data))
    // .then(res => {
    //   //handle success
    //   this.setState({message: 'success'});
    // }).catch(err => {
    //   //handle error
      // var resp = []
      // for (var key in err.response) {
      //   resp.push(key + " ");
      // }
      // this.setState({message: err.response +  resp});
    // });
    // axios.get('http://localhost:3001/').then(res => {
    //   this.setState({message: 'get'});
    // }).catch(err => {
    //   this.setState({message: 'err.response'});
    // });

  }

  render() {
    return (
      <div className="register">
        <form>
          <div className="message">{this.state.message}</div>
          <label>
            Username:
            <input type="text" value={this.state['username']}
              onChange={this.handleChange.bind(this, "Username")} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state['email']}
              onChange={this.handleChange.bind(this, "Email")} />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" value={this.state['password']}
              onChange={this.handleChange.bind(this, "Password")} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={this.state['confirmPassword']}
              onChange={this.handleChange.bind(this, "ConfirmPassword")} />
          </label>
          <input type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Register;
