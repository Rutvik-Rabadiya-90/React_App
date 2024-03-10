// ForgotPasswordForm.js

import React, { Component } from 'react';

class DisplayPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrMobile: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { emailOrMobile } = this.state;
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && (userData.email === emailOrMobile || userData.mobile === emailOrMobile)) {
      this.setState({ password: userData.password });
    } else {
      alert('User not found');
    }
  };

  render() {
    const { emailOrMobile, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email or Mobile:</label>
          <input
            type="text"
            name="emailOrMobile"
            value={emailOrMobile}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Retrieve Password</button>
        {password && <div>Your password is: {password}</div>}
      </form>
    );
  }
}

export default DisplayPassword;
