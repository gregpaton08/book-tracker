import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Dashboard } from './components/dashboard'
import { AddBook } from './components/add_book'
import { Login } from './components/login'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Dashboard} />
          <Route path='/add_book' component={AddBook} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
