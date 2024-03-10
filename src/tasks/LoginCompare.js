import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class LoginCompare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            shouldRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: ''
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        // Retrieve data from localStorage
        const storedUser = localStorage.getItem('userData');

        let parsedUserData = JSON.parse(storedUser)

        if (storedUser === null) {

            let userData = {
                email,
                password
            }

            localStorage.setItem('userData', JSON.stringify(userData));

        }
        else if (email === parsedUserData.email && password === parsedUserData.password) {
            // Successful login
            // Perform actions like redirecting or setting user state
            // alert('Login successful');
            this.setState({ shouldRedirect: true })

        } else {
            // Invalid login
            this.setState({ errorMessage: 'Invalid email or password' });
        }
    };

    render() {
        const { email, password, errorMessage } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p>{errorMessage}</p>}

                {this.state.shouldRedirect ? (
                    <Navigate replace to="/IntroPage" />
                ) : null}
            </div>
        );
    }
}

export default LoginCompare;