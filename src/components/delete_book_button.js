import React from 'react'
import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'

export class DeleteBookButton extends React.Component {
  render() {
    return (
      <button
        style={{ backgroundColor: 'Transparent', border: 'none' }}
        onClick={() => this.props.deleteBook(this.props.bookId)}
      >
        <FaTrashAlt />
      </button>
    )
  }
}

DeleteBookButton.propTypes = {
  bookId: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired
}
