import { connect } from 'react-redux'
import { addNewBook } from '../actions/books'
import { AddBook } from '../components/add_book'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {
  onAddBook: addNewBook
}

const AddBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook)

export default withRouter(AddBookContainer)
