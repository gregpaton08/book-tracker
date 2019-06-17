import React from 'react'
import { readBooks, logout } from  '../../database_connection'
import { Link } from "react-router-dom"
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
        <Link to='/add_book'>Add Book</Link>
        <Link
          to={() => {
            logout()
            return '/login'
          }}
        >
          Logout
        </Link>
        <BookList books={this.state.books} />
      </div>
    )
  }
}
