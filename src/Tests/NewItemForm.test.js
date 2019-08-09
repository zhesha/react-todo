import React from 'react';
import ReactDOM from 'react-dom';
import NewItemForm from '../Components/NewItemForm';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewItemForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('call addNewItem', () => {
  const mockFn = jest.fn();

  var componentTree = ReactTestUtils.renderIntoDocument(<NewItemForm addNewItem={mockFn} />);

  let form = ReactTestUtils.findRenderedDOMComponentWithTag(componentTree, "form");
  let input = ReactTestUtils.findRenderedDOMComponentWithTag(componentTree, "input");

  input.value = "test";
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.submit(form);

  expect(mockFn.mock.calls.length).toBe(1);
  expect(mockFn.mock.calls[0][0]).toBe("test");
});
