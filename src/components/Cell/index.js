import React, { Component } from 'react';
import './index.css';

class Cell extends Component {
  render() {
    return (
      <div className={this.props.mario ? "cell mario" : "cell"} id={this.props.id} />
    );
  }
}

export default Cell;
