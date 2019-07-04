import { connect } from 'react-redux'
import { BookList } from '../components/book_list'
import { fetchBooks, deleteBook } from '../actions/books'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {
  fetchBooks,
  deleteBook
}

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default BookListContainer
