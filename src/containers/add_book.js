import { connect } from 'react-redux'
import { addBook } from '../actions/books'
import { AddBook } from '../components/add_book'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {
  addBook
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook)
