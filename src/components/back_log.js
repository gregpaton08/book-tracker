import React from 'react'
import PropTypes from 'prop-types'
import BookList from '../containers/book_list'

export class BackLog extends React.Component {
  render() {
    return (
      <div className='book-list-container'>
        <h2>Back Log</h2>
        <input type='text' placeholder='search' />
        <BookList />
      </div>
    )
  }
}

BackLog.propTypes = {
  
}
