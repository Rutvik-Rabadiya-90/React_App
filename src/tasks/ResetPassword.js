import React, { Component } from 'react';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { oldPassword, newPassword, confirmPassword } = this.state;

    // Validate if newPassword matches confirmPassword
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if old password matches the one stored in local storage
    if (userData && userData.password !== oldPassword) {
      alert('Old password is incorrect');
      return;
    }

    // Update password in local storage
    userData.password = newPassword;
    localStorage.setItem('userData', JSON.stringify(userData));

    // Reset form fields
    this.setState({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });

    alert('Password changed successfully!');
  };

  render() {
    const { oldPassword, newPassword, confirmPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    );
  }
}

export default ResetPassword  ;
