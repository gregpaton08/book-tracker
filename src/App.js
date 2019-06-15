import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { readBooks, addBook } from  './database_connection'

import { AddBook } from './components/add_book'
import { BookList } from './components/book_list'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: null
    }

    this.fetchBooks = this.fetchBooks.bind(this)
  }

  componentDidMount() {
    if (this.state.books === null) {
      this.fetchBooks()
    }
  }

  fetchBooks() {
    readBooks()
    .then((books) => this.setState(state => ({
      ...state,
      books
    })))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <AddBook onAddBook={(book) => {
            addBook(book.title, book.author)
            this.fetchBooks()
          }} />
          <BookList books={this.state.books} />
        </header>
      </div>
    )
  }
}

export default App
