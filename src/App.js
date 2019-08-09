import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import Header from './Components/Header';
import NewItemForm from './Components/NewItemForm';
import List from './Components/List';
import Controlls, {Shown} from './Components/Controlls';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: Shown.ALL,
      list: []
    };

    this.addNewItem = this.addNewItem.bind(this);
    this.changeDone = this.changeDone.bind(this);
    this.clear = this.clear.bind(this);
    this.changeShown = this.changeShown.bind(this);
  }

  addNewItem (taskToAdd) {
    const list = this.state.list;
    list.push({
      name: taskToAdd,
      done: false
    });
    this.setState({
      list: list
    });
  }

  changeDone (index) {
    const list = this.state.list;
    list[index].done = !list[index].done;
    this.setState({
      list: list
    });
  }

  changeShown (shown) {
    this.setState({
      shown: shown
    });
  }

  clear () {
    let list = this.state.list;
    list = list.filter((entry) => !entry.done);
    this.setState({
      list: list
    });
  }

  render() {
    let list = this.state.list;
    if (this.state.shown == Shown.DONE) {
      list = list.filter((task) => task.done);
    } else if (this.state.shown == Shown.NEW) {
      list = list.filter((task) => !task.done);
    }
    return (
      <div className="container app">
        <div className="card">
          <Header />
          <div className="card-body">
            <NewItemForm addNewItem={this.addNewItem} />
            <List list={list} changeDone={this.changeDone} />
            <Controlls clear={this.clear} shown={this.state.shown} changeShown={this.changeShown}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
