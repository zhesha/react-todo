import React, { Component } from 'react';

const conputeclassName = (done) => 'list-group-item' + (!done ? '' : ' disabled');

export default class List extends Component {
  render() {
    const list = this.props.list.map((task, index) =>
        <div key={index} className={conputeclassName(task.done)}>
          <input
            checked={task.done}
            type="checkbox"
            onChange={() => this.props.changeDone(index)}
          />
          <span className="ml-2">{task.name}</span>
        </div>
    );

    return <div className="list-group">{list}</div>;
  }
}
