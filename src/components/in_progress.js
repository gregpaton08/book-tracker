import React from 'react'
import PropTypes from 'prop-types'

export class InProgress extends React.Component {
  render() {
    console.log('render', this.props)
    return (
      <div>
        <h2>In Progress</h2>
        {this.props.books.map((book) => (
          <div key={book.id}>
            <h3>
              {book.title}
            </h3>
            {book.author}
          </div>
        ))}
      </div>
    )
  }
}

InProgress.propTypes = {
  books: PropTypes.array.isRequired
}
