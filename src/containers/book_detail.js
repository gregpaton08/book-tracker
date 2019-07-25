import { connect } from 'react-redux'
import { BookDetail } from '../components/book_detail'
import { fetchBooks, updateBookStatus, deleteBook } from '../actions/books'

const mapStateToProps = (state, props) => {
  const params = new URLSearchParams(props.location.search)
  const bookId = params.get('id')
  const book = state.books.books ? state.books.books[bookId] : undefined
  return {
    book
  }
}

const mapDispatchToProps = {
  updateBookStatus,
  fetchBooks
}

const BookDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default BookDetailContainer
