import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import DeleteBookButtom from '../containers/delete_book_button'

export class BookDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isBookDeleted: false
    }
  }

  componentDidMount() {
    if (!this.props.book) {
      this.props.fetchBooks()
    }
  }
  
  render() {
    if (this.state.isBookDeleted) {
      return <Redirect to='/' />
    }

    if (!this.props.book) {
      return <div>loading...</div>
    }

    return (
      <div>
        <Link to='/'>
          <button>Back</button>
        </Link>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
        <select
          onChange={(event) => {
            this.props.updateBookStatus(this.props.book.id, event.target.value)
          }}
          value={this.props.book.status}
        >
          <option value='unread'>unread</option>
          <option value='in progress'>in progress</option>
          <option value='read'>read</option>
        </select>
        <DeleteBookButtom
          bookId={this.props.book.id}
          onClick={() => this.setState((state) => ({ ...state, isBookDeleted: true }))}
        />
      </div>
    )
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  updateBookStatus: PropTypes.func.isRequired
}
