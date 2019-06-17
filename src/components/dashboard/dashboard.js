import React from 'react'
import { readBooks, addBook, login } from  '../../database_connection'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { AddBook } from '../add_book'
import { BookList } from '../book_list'

export class Dashboard extends React.Component {
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
      <div>
        <button onClick={login}>Login</button>
        <Link to='/add_book'>Add Book</Link>
        <AddBook onAddBook={(book) => {
          addBook(book.title, book.author)
          this.fetchBooks()
        }} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}
