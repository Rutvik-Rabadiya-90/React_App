import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    // Load counter value from localStorage if available
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
      this.setState({ counter: parseInt(savedCounter) });
    }
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }), () => {
      // Update localStorage after state has been updated
      localStorage.setItem('counter', this.state.counter.toString());
    });
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }), () => {
      // Update localStorage after state has been updated
      localStorage.setItem('counter', this.state.counter.toString());
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;