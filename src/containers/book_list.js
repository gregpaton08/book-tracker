import { connect } from 'react-redux'
import { BookList } from '../components/book_list'
import { fetchBooks, deleteBook } from '../actions/books'

// TODO: memoize
const getFilteredBooks = (searchTerm, books) => {
  const booksArray = Object.values(books ? books : {})
  if (searchTerm.length === 0) {
    return booksArray
  }

  return booksArray
      .filter(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      )
}

const mapStateToProps = (state, props) => {
  return {
    books: getFilteredBooks(state.books.searchTerm, state.books.books)
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
