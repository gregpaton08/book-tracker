import { connect } from 'react-redux'
import { BookList } from '../components/book_list'
import { fetchBooks, removeBook } from '../actions/books'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {
  fetchBooks,
  deleteBook: removeBook
}

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default BookListContainer
