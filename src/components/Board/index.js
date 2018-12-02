import React, { Component } from 'react';

import Cell from '../Cell'
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
      cells.push(<Cell key={key} id={'cell'+key} mario={key===mario} />)
      ids.push(i)
    } 
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
