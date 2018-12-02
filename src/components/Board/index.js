import React, { Component } from 'react';

import Cell from '../Cell'
import { shuffleArray } from '../../functions'
import './index.css';

class Board extends Component {
  constructor(props){
    super(props)
    const { width, height } = this.props
    let matrixSize = height*width
    const mario = Math.round((height*width/2) - width/2)
    let cells = []
    let ids = []
    for(var i=0; i < matrixSize; i++){
      let key = i+1
      cells.push(<Cell key={key} id={'cell'+key} mario={key===mario} sprite={false} />)
      if(!(key===mario)){
        ids.push(i)
      }
    } 
    const numberOfSprites = Math.round(Math.sqrt(matrixSize))
    const spritePositions = shuffleArray(ids).slice(0,numberOfSprites)
    spritePositions.forEach(pos => {
      let key = pos+1
      cells[pos] = <Cell key={key} id={'cell'+key} mario={key===mario} sprite={true} />
    })
    console.log('ids',ids,': spritePositions : ',spritePositions)
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
