import React from 'react'
import PropTypes from 'prop-types'
import BookList from '../containers/book_list'

export class BackLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className='book-list-container'>
        <h2>Back Log</h2>
        <input
          type='text'
          placeholder='search'
          onChange={(event) => {
            const searchTerm = event.target.value
            this.setState(state => ({
              ...state,
              searchTerm
            }))
          }}
        />
        <BookList />
      </div>
    )
  }
}

BackLog.propTypes = {

}
