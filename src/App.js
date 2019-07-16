import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Dashboard } from './components/dashboard'
import AddBook from './containers/add_book'
import BookDetail from './containers/book_detail'
import { Login } from './components/login'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Dashboard} />
          <Route path='/add_book' component={AddBook} />
          <Route path='/book' component={BookDetail} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
