import React from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json'
import TodoForm from './components/TodoForm.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo (todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if (window.confirm("Are you sure you want to delete it ")){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4" key={i}>      
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.Equipo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.Modelo}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.ID}</p>
              <p>{todo.CPU}</p>
              <p>{todo.RAM}</p>
              <p>{todo.HDD}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>          
          </div>
        </div>  
      )
    })


    return (
    <div className="App">
      <nav className="navbar">
        <a href="http://google.com" className="Text-while">
          Equipos de computo
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>
          <div className="col-md-9">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default App;
