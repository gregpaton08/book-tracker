import { connect } from 'react-redux'
import { BookList } from '../components/book_list'

const mapStateToProps = (state, props) => {
  return {
    books: state.books.books
  }
}

const mapDispatchToProps = {

}

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default BookListContainer
