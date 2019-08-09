import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('addNewItem', () => {
  var componentTree = ReactTestUtils.renderIntoDocument(<App />);
  componentTree.addNewItem('test');
  expect(componentTree.state.list.length).toBe(1);
});

it('changeDone', () => {
  var componentTree = ReactTestUtils.renderIntoDocument(<App />);
  componentTree.addNewItem('test');
  componentTree.changeDone(0);
  expect(componentTree.state.list[0].done).toBe(true);
});

it('clear', () => {
  var componentTree = ReactTestUtils.renderIntoDocument(<App />);
  componentTree.addNewItem('test 1');
  componentTree.addNewItem('test 2');
  componentTree.changeDone(0);
  expect(componentTree.state.list.length).toBe(2);
  componentTree.clear();
  expect(componentTree.state.list.length).toBe(1);
});
