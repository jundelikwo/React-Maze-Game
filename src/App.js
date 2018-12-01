import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

class App extends Component {
  constructor(props){
    super(props)
    let width = prompt("Please enter board width")
    let height = prompt("Please enter board height")
    width = (!width || isNaN(width) || width == 0) ? 10 : width
    height = (!height || isNaN(height) || height == 0) ? 10 : height
    this.state = { height, width }
  }

  render() {
    const { height, width } = this.state
    console.log('width: ',width," height: ",height)
    return (
      <div className="App">
        <Board height={height} width={width} />
      </div>
    );
  }
}

export default App;
