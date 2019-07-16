import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class BookDetail extends React.Component {
  render() {
    console.error('BookDetail', this.props.book)
    return (
      <div>

        <Link to='/'>
          <button>Back</button>
        </Link>
        Book Detail
        {this.props.book.title}
        {this.props.book.author}
      </div>
    )
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
}
