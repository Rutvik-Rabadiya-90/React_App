import React, { Component } from 'react';

class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: localStorage.getItem('bgColor') || '#ffffff', // Default to white if no color is stored
      selectedColor: ''
    };
  }

  handleClick = (color) => {
    this.setState({ 
      bgColor: color,
      selectedColor: color
    });
    localStorage.setItem('bgColor', color);
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bgColor, minHeight: '100vh' }}>
        <button onClick={() => this.handleClick('Red')}>Red</button>
        <button onClick={() => this.handleClick('Green')}>Green</button>
        <button onClick={() => this.handleClick('Blue')}>Blue</button>
      </div>
    );
  }
}

export default ColorChanger;