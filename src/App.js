import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './components/Todos'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';


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
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  // Delete TodoItem
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id
    )] });
  }

  render(){ 
    console.log(this.state); 
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos  todos={this.state.todos}  
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
