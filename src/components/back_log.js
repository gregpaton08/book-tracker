import React from 'react'
import PropTypes from 'prop-types'
import BookList from '../containers/book_list'

export class BackLog extends React.Component {
  render() {
    return (
      <div className='book-list-container'>
        <h2>Back Log</h2>
        <input
          type='text'
          placeholder='search'
          onChange={(event) => {
            const searchTerm = event.target.value
            this.props.setSearchTerm(searchTerm)
          }}
        />
        <BookList />
      </div>
    )
  }
}

BackLog.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
}
