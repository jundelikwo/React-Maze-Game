import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

const totalAvailableMoves = 64

class App extends Component {
  constructor(props){
    super(props)
    let width = prompt("Please enter board width")
    let height = prompt("Please enter board height")
    width = (!width || isNaN(width) || width == 0) ? 10 : parseInt(width,10)
    height = (!height || isNaN(height) || height == 0) ? 10 : parseInt(height,10)
    const matrixSize = height*width
    this.state = { height, width, matrixSize, numberOfMoves: 0 }
  }

  componentDidMount(){
    window.addEventListener('keydown',this.onKeyPress)
  }

  moveMario = pos => {
    const { matrixSize, numberOfMoves } = this.state
    let sprites = document.getElementsByClassName('sprite')
    let mario = document.getElementsByClassName('mario')[0]
    let marioCellId = parseInt(mario.id,10)
    let newMarioCellId = marioCellId + pos;

    // Checks if they are still sprites to capture remaining
    if(!sprites.length){
      alert('You have won')
      return
    }

    // Checks if you still have available moves remaining
    if(numberOfMoves >= 64){
      alert('You have exhausted all your moves')
      return
    }

    if(newMarioCellId <= matrixSize && newMarioCellId > 0){
      // Valid Movement
      // Move Player
      mario.classList.toggle('mario')
      let marioNewPosition = document.getElementById(newMarioCellId)
      marioNewPosition.classList.toggle('mario')
      if(marioNewPosition.classList.contains('sprite')){
        marioNewPosition.classList.toggle('sprite')
      }
      this.setState({ numberOfMoves: numberOfMoves+1 }, () => {
        // Checks if they are still sprites to capture remaining
        if(!sprites.length){
          alert('You have won')
        }
      })

      return
    } else {
      // Invalid Movement
      return
    }
  }

  onKeyPress = event => {
    switch(event.keyCode){
      case 37 :
        // Left Arrow key pressed
        this.moveMario(-1)
        event.preventDefault()
        return
      case 38 :
        // Up Arrow key pressed
        this.moveMario(-10)
        event.preventDefault()
        return
      case 39 :
        // Right Arrow key pressed
        this.moveMario(1)
        event.preventDefault()
        return
      case 40 :
        // Down Arrow key pressed
        this.moveMario(10)
        event.preventDefault()
        return
      default :
        return
    }
  }

  render() {
    const { height, width, matrixSize } = this.state
    return (
      <div className="App">
        <Board height={height} width={width} matrixSize={matrixSize} />
      </div>
    );
  }
}

export default App;
