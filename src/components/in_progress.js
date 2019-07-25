import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../style/in_progress.css'

export class InProgress extends React.Component {
  render() {
    console.log('render', this.props)
    return (
      <div className='book-list-container'>
        <h2>In Progress</h2>
        <div className='book-tile-container'>
          {this.props.books.map((book) => (
            <div className='book-tile' key={book.id}>
              <Link to={`/book?id=${book.id}`}>
                <h3>
                  {book.title}
                </h3>
                {book.author}
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

InProgress.propTypes = {
  books: PropTypes.array.isRequired
}
