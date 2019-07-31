import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import DeleteBookButtom from '../containers/delete_book_button'

const convertDate = (date) => date ?
  date.seconds ?
    new Date(date.seconds * 1000) :
    date :
  undefined

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

    let purchasedOn = convertDate(this.props.book.purchasedOn)

    let completedOn = convertDate(this.props.book.completedOn)

    return (
      <div>
        <Link to='/'>
          <button>Back</button>
        </Link>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
        <select
          onChange={(event) => {
            const status = event.target.value
            const completedOn = status == 'read' ? new Date() : null
            const updates = {
              status,
              completedOn
            }
            this.props.updateBook(this.props.book.id, updates)
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
        {purchasedOn &&
          <div>
            <div>Purchased on {purchasedOn.toDateString()}</div>
            <label>Format</label>
            <select
              onChange={(event) => {
                // this.props.updateBookStatus(this.props.book.id, event.target.value)
              }}
              value={this.props.book.status}
            >
              <option value='physical'>physical</option>
              <option value='digital'>digital</option>
              <option value='audio'>audio</option>
            </select>
          </div>
        }
        {completedOn &&
          <div>Finished reading on {completedOn.toDateString()}</div>
        }
      </div>
    )
  }
}

BookDetail.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  updateBook: PropTypes.func.isRequired
}
