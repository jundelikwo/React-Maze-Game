import React from 'react';
import ReactDOM from 'react-dom';
import Board from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board height={10} width={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});