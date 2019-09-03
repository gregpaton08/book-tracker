import { connect } from 'react-redux'
import { InProgress } from '../components/in_progress'
import { createSelector } from 'reselect'

const getBooks = state => Object.values(state.books.books)

const getInProgressBooks = createSelector(
  [getBooks],
  books => books.filter(book => book.status === 'in progress')
)

const mapStateToProps = (state, props) => {
  return {
    books: getInProgressBooks(state)
  }
}

const mapDispatchToProps = {
  
}

const InProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgress)

export default InProgressContainer
