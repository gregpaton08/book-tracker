import React from 'react'
import PropTypes from 'prop-types'

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
    this.props.onAddBook(this.state)
    this.setState(state => ({
      ...state,
      title: '',
      author: ''
    }))
    event.preventDefault()
  }

  render() {
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
        </div>
      </form>
    )
  }
}

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired
}