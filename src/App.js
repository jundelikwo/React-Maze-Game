import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    console.log('width: ',this.state.width," height: ",this.state.height)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
