import React, { Component } from 'react';

import Cell from '../Cell'
import { shuffleArray } from '../../functions'
import './index.css';

class Board extends Component {
  constructor(props){
    super(props)
    const { width, height, matrixSize } = this.props
    const mario = Math.round((height*width/2) - width/2)
    let cells = []
    let ids = []
    for(var i=0; i < matrixSize; i++){
      cells.push(<Cell key={i} id={i+1} mario={i===mario} sprite={false} />)
      if(!(i===mario)){
        ids.push(i)
      }
    } 
    const numberOfSprites = Math.round(Math.sqrt(matrixSize))
    const spritePositions = shuffleArray(ids).slice(0,numberOfSprites)
    spritePositions.forEach(pos => {
      cells[pos] = <Cell key={pos} id={pos+1} mario={pos===mario} sprite={true} />
    })
    this.state = { cells }

  }

  render() {
    const { width, height } = this.props
    return (
      <div className="Board" style={{ width: width*52, height: height*60 }}>
        {this.state.cells}
      </div>
    );
  }
}

export default Board;
