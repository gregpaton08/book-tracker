import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class BookDetail extends React.Component {
  componentDidMount() {
    if (!this.props.book) {
      this.props.fetchBooks()
    }
  }
  
  render() {
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
          <option value="unread">unread</option>
          <option value="in progress">in progress</option>
          <option value="read">read</option>
        </select>
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
