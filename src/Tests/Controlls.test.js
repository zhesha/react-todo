import React from 'react';
import ReactDOM from 'react-dom';
import Controlls from '../Components/Controlls';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  let data = [];
  const div = document.createElement('div');
  ReactDOM.render(<Controlls />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('call clear', () => {
  const mockFn = jest.fn();

  var componentTree = ReactTestUtils.renderIntoDocument(<Controlls clear={mockFn} />);
  const allButtons = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentTree, "button");
  const clearBtn = allButtons.filter(e => e.classList.contains('clear'))[0];
  ReactTestUtils.Simulate.click(clearBtn);

  expect(mockFn.mock.calls.length).toBe(1);
});

it('call clear', () => {
  const mockFn = jest.fn();

  var componentTree = ReactTestUtils.renderIntoDocument(<Controlls changeShown={mockFn} />);
  const allButtons = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentTree, "button");
  let btn = allButtons.filter(e => e.classList.contains('ALL'))[0];
  ReactTestUtils.Simulate.click(btn);

  expect(mockFn.mock.calls.length).toBe(1);

  btn = allButtons.filter(e => e.classList.contains('NEW'))[0];
  ReactTestUtils.Simulate.click(btn);

  expect(mockFn.mock.calls.length).toBe(2);
});
