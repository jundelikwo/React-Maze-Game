import React, { Component } from 'react';

import Cell from '../Cell'
import './index.css';

class Board extends Component {
  render() {
    const { width, height } = this.props
    let matrixSize = height*width
    let cells = []
    for(var i=0; i < matrixSize; i++){
      cells.push(<Cell key={i}/>)
    }
    return (
      <div className="Board" style={{ width: width*52, height: height*60 }}>
        {cells}
      </div>
    );
  }
}

export default Board;
