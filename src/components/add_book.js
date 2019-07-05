import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class AddBook extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event, event.name)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const book = {
      title: this.state.title,
      author: this.state.author
    }
    this.props.onAddBook(book)
    .then(() => {
      this.setState(state => ({
        ...state,
        title: '',
        author: ''
      }))
      this.props.history.push('/')
    })
    .catch(() => {
      // TODO: handle and report error
    })
  }

  render() {
    console.log('AddBook render', this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Title
            <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Author
            <input type='text' name='author' value={this.state.author} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <input value='Add' type='submit' />
          <Link to='/'>
            <input value='Cancel' type='button' />
          </Link>
        </div>
      </form>
    )
  }
}

AddBook.defaultProps = {

}

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired
}
