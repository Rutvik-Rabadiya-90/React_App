import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      mobile: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      mobile: this.state.mobile
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Reset form fields
    this.setState({
      name: '',
      email: '',
      password: '',
      mobile: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;