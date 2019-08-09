import React from 'react';
import ReactDOM from 'react-dom';
import List from '../Components/List';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  let data = [];
  const div = document.createElement('div');
  ReactDOM.render(<List list={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fill up List', () => {
  let data = [];
  data.push({
    name: "test",
    done: false
  });

  var componentTree = ReactTestUtils.renderIntoDocument(<List list={data} />);
  let itemsList = ReactTestUtils.scryRenderedDOMComponentsWithClass(componentTree, "list-group-item");

  expect(itemsList.length).toBe(1);
});

it('test changeDone', () => {
  let data = [];
  data.push({
    name: "test 1",
    done: false
  }, {
    name: "test 2",
    done: false
  });

  const mockFn = jest.fn();

  var componentTree = ReactTestUtils.renderIntoDocument(<List list={data} changeDone={mockFn} />);
  let checkboxList = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentTree, "input");
  ReactTestUtils.Simulate.change(checkboxList[0]);

  expect(mockFn.mock.calls.length).toBe(1);
  expect(mockFn.mock.calls[0][0]).toBe(0);

  ReactTestUtils.Simulate.change(checkboxList[1]);

  expect(mockFn.mock.calls.length).toBe(2);
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
