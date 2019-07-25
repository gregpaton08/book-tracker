import { connect } from 'react-redux'
import { BookDetail } from '../components/book_detail'
import { updateBookStatus } from '../actions/books'

const mapStateToProps = (state, props) => {
  const params = new URLSearchParams(props.location.search)
  const bookId = params.get('id')
  const book = state.books.books ? state.books.books[bookId] : {}
  return {
    book
  }
}

const mapDispatchToProps = {
  updateBookStatus
}

const BookDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default BookDetailContainer
