import React, { Component } from 'react';

export default class NewItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskToAdd: ''
    };
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem (e) {
    e.preventDefault();
    if (this.state.taskToAdd === '') {
      return;
    }

    this.props.addNewItem(this.state.taskToAdd);
    this.setState({
      taskToAdd: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.addNewItem}>
        <div className="input-group mb-3">

          <input
            onChange={(e) => this.setState({taskToAdd: e.target.value})}
            value={this.state.taskToAdd}
            type="text"
            className="form-control"
            placeholder="Add new task"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />

          <div className="input-group-append">

            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              +
            </button>

          </div>
        </div>
      </form>
    );
  }
}
