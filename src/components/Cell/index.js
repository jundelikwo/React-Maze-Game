import React, { Component } from 'react';
import './index.css';

class Cell extends Component {
  render() {
    let className = "cell"
    if(this.props.mario){
      className = "cell mario"
    }else if(this.props.sprite){
      className = "cell sprite"
    }

    return (
      <div className={className} id={this.props.id} />
    );
  }
}

export default Cell;
