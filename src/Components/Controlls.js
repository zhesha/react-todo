import React, { Component } from 'react';

export default class Controlls extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="clear btn btn-danger" onClick={this.props.clear}>Clear</button>
          </div>
          <div className="btn-group" role="group" aria-label="Third group">
            <button
              type="button"
              className={shownClass(Shown.ALL, this.props.shown)}
              onClick={() => this.props.changeShown(Shown.ALL)}
            >
              All
            </button>
            <button
              type="button"
              className={shownClass(Shown.DONE, this.props.shown)}
              onClick={() => this.props.changeShown(Shown.DONE)}
            >
              Done
            </button>
            <button
              type="button"
              className={shownClass(Shown.NEW, this.props.shown)}
              onClick={() => this.props.changeShown(Shown.NEW)}
            >
              New
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export const Shown = {
  ALL: 0,
  DONE: 1,
  NEW: 2
}

const shownClass = (btn, shown) => {
  let result = 'btn ';

  if(btn == shown) {
    result += 'btn-primary';
  } else {
    result += 'btn-secondary';
  }

  if (btn == Shown.ALL) {
    result += ' ALL';
  } else if (btn == Shown.DONE) {
    result += ' DONE';
  } else if (btn == Shown.NEW) {
    result += ' NEW';
  }

  return result;
};
