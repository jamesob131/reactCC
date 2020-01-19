import React, { Component } from 'react';
import './components/Todos'
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the room',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render(){ 
    console.log(this.state); 
    return (
      <div className="App">
        <h1> James' App </h1>
        <Todos  todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
