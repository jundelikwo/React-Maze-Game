import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Board from './index';
import Cell from '../Cell'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board height={10} width={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 100 cells on when matrixSize is 100',() => {
  var board = TestUtils.renderIntoDocument(<Board height={10} width={10} matrixSize={100} />)
  board = TestUtils.scryRenderedComponentsWithType(board,Board)[0]
  var cells = TestUtils.scryRenderedComponentsWithType(board,Cell)

  expect(cells.length).toEqual(100)
})

it('renders 0 cells on when matrixSize is null',() => {
  var board = TestUtils.renderIntoDocument(<Board/>)
  board = TestUtils.scryRenderedComponentsWithType(board,Board)[0]
  var cells = TestUtils.scryRenderedComponentsWithType(board,Cell)

  expect(cells.length).toEqual(0)
})