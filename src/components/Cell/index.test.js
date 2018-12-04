import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Cell from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Cell Component div should contain a class called cell',() => {
  var cell = TestUtils.renderIntoDocument(<Cell/>)
  var classes = ReactDOM.findDOMNode(cell).classList

  expect(classes.contains('cell')).toEqual(true)
  expect(parseInt(classes.length)).toEqual(1)
})

it('Cell Component div should contain a class called mario when mario props is set to true',() => {
  var cell = TestUtils.renderIntoDocument(<Cell mario />)
  var classes = ReactDOM.findDOMNode(cell).classList

  expect(classes.contains('cell')).toEqual(true)
  expect(classes.contains('mario')).toEqual(true)
  expect(parseInt(classes.length)).toEqual(2)
})

it('Cell Component div should not contain a class called mario when mario props is set to false',() => {
  var cell = TestUtils.renderIntoDocument(<Cell />)
  var classes = ReactDOM.findDOMNode(cell).classList

  expect(classes.contains('cell')).toEqual(true)
  expect(classes.contains('mario')).toEqual(false)
})

it('Cell Component div should contain a class called sprite when sprite props is set to true',() => {
  var cell = TestUtils.renderIntoDocument(<Cell sprite />)
  var classes = ReactDOM.findDOMNode(cell).classList

  expect(classes.contains('cell')).toEqual(true)
  expect(classes.contains('sprite')).toEqual(true)
  expect(parseInt(classes.length)).toEqual(2)
})

it('Cell Component div should not contain a class called sprite when sprite props is set to false',() => {
  var cell = TestUtils.renderIntoDocument(<Cell />)
  var classes = ReactDOM.findDOMNode(cell).classList

  expect(classes.contains('cell')).toEqual(true)
  expect(classes.contains('sprite')).toEqual(false)
})