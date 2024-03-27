
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state = {
    display: '0',
  };

  handleClick = (value) => {
    if (value === '=') {
      try {
        this.setState({ display: eval(this.state.display) });
      } catch (error) {
        this.setState({ display: 'Error' });
      }
    } else if (value === 'AC') {
      this.setState({ display: '0' });
    } else {
      this.setState((prevState) => ({
        display: prevState.display === '0' ? value : prevState.display + value,
      }));
    }
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.display} readOnly />
        <div className="buttons">
          {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, 'AC', '=','+'].map((value) => (
            <button key={value} onClick={() => this.handleClick(String(value))}>
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;