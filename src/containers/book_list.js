import { connect } from 'react-redux'
import { BookList } from '../components/book_list'
import { fetchBooks } from '../actions/books'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {
  fetchBooks
}

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default BookListContainer
