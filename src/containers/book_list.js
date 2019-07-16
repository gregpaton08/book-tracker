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
  // TODO: create a generic filter function (e.g. status === "in progress")
  const books = getFilteredBooks(state.books.searchTerm, state.books.books)
      .filter(book => book.status !== 'in progress' && book.status !== 'read')
  return {
    books
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
