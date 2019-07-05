import { connect } from 'react-redux'
import { InProgress } from '../components/in_progress'
// import { fetchBooks, deleteBook } from '../actions/books'

const mapStateToProps = (state, props) => {
  const books = Object.values(state.books.books ? state.books.books : {})
  const inProgressBooks = books.filter(book => book.status === 'in progress')
  return {
    books: inProgressBooks
  }
}

const mapDispatchToProps = {
  
}

const InProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgress)

export default InProgressContainer
